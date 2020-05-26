import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks, r as globals } from './client.992f5164.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */

const { document: document_1 } = globals;
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t;
	let body;
	let canvas_1;
	let canvas_1_width_value;
	let canvas_1_height_value;

	const block = {
		c: function create() {
			t = space();
			body = element("body");
			canvas_1 = element("canvas");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);

			canvas_1 = claim_element(body_nodes, "CANVAS", {
				id: true,
				width: true,
				height: true,
				class: true
			});

			children(canvas_1).forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "About";
			attr_dev(canvas_1, "id", "canvasId");
			attr_dev(canvas_1, "width", canvas_1_width_value = 1000);
			attr_dev(canvas_1, "height", canvas_1_height_value = 1000);
			attr_dev(canvas_1, "class", "svelte-1sup3tp");
			add_location(canvas_1, file, 43, 1, 907);
			attr_dev(body, "class", "svelte-1sup3tp");
			add_location(body, file, 42, 0, 899);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, canvas_1);
			/*canvas_1_binding*/ ctx[6](canvas_1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(body);
			/*canvas_1_binding*/ ctx[6](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	var canvas = document.getElementById("canvas");
	var cols, rows;
	var scale = 20;
	var w = 600;
	var h = 600;
	cols = w / scale;
	rows = h / scale;

	// let canvas;
	onMount(() => {
		const ctx = canvas.getContext("2d");

		for (let y = 0; y < rows; y++) {
			ctx.beginPath();

			for (let x = 0; x < cols; x++) {
				ctx.strokeStyle = "#FF0000";
				ctx.strokeRect(x * scale, y * scale, scale, scale);
			}

			ctx.endPath();
		}
	});

	function canvas_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, canvas = $$value);
		});
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
		if ("cols" in $$props) cols = $$props.cols;
		if ("rows" in $$props) rows = $$props.rows;
		if ("scale" in $$props) scale = $$props.scale;
		if ("w" in $$props) w = $$props.w;
		if ("h" in $$props) h = $$props.h;
	};

	return [canvas, cols, rows, scale, w, h, canvas_1_binding];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZTZhZTFmZGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuXHR2YXIgY29scywgcm93cztcblx0dmFyIHNjYWxlID0gMjA7XG5cdHZhciB3ID0gNjAwO1xuXHR2YXIgaCA9IDYwMDtcblx0Y29scyA9IHcgLyBzY2FsZTtcblx0cm93cyA9IGggLyBzY2FsZTtcblxuXHQvLyBsZXQgY2FudmFzO1xuXHRvbk1vdW50KCgpID0+IHtcblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdGxldCBmcmFtZTtcblxuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykge1xuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBcIiNGRjAwMDBcIjtcblx0XHRcdFx0Y3R4LnN0cm9rZVJlY3QoeCAqIHNjYWxlLCB5ICogc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG5cdFx0XHR9XG5cdFx0XHRjdHguZW5kUGF0aCgpO1xuXHRcdH1cblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuLi9zdHlsZXMvdGhlbWUuc2Nzc1wiO1xuXHQqIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXHRjYW52YXMge1xuXHRcdC8qIHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTsgKi9cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+QWJvdXQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGJvZHk+XG5cdDxjYW52YXNcblx0XHRpZD1cImNhbnZhc0lkXCJcblx0XHRiaW5kOnRoaXM9XCJ7Y2FudmFzfVwiXG5cdFx0d2lkdGg9XCJ7MTAwMH1cIlxuXHRcdGhlaWdodD1cInsxMDAwfVwiXG5cdD48L2NhbnZhcz5cbjwvYm9keT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBOENVLElBQUk7d0RBQ0gsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTdDVixNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRO0tBRXpDLElBQUksRUFBRSxJQUFJO0tBQ1YsS0FBSyxHQUFHLEVBQUU7S0FDVixDQUFDLEdBQUcsR0FBRztLQUNQLENBQUMsR0FBRyxHQUFHO0NBQ1gsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLO0NBQ2hCLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSzs7O0NBR2hCLE9BQU87UUFDQSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJOztXQUd6QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztHQUMxQixHQUFHLENBQUMsU0FBUzs7WUFDSixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMxQixHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVM7SUFDM0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7OztHQUVsRCxHQUFHLENBQUMsT0FBTzs7Ozs7O21CQXVCQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=