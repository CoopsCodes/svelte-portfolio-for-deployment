import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks } from './client.d26c6618.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			canvas_1 = claim_element(body_nodes, "CANVAS", { width: true, height: true, class: true });
			children(canvas_1).forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			attr_dev(canvas_1, "width", canvas_1_width_value = 1000);
			attr_dev(canvas_1, "height", canvas_1_height_value = 1000);
			attr_dev(canvas_1, "class", "svelte-1065a7b");
			add_location(canvas_1, file, 42, 1, 852);
			attr_dev(body, "class", "svelte-1065a7b");
			add_location(body, file, 41, 0, 844);
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
	var cols, rows;
	var scale = 20;
	var w = 600;
	var h = 600;
	cols = w / scale;
	rows = h / scale;
	let canvas;

	onMount(() => {
		const ctx = canvas.getContext("2d");

		for (let x = 0; x < cols; x++) {
			for (let y = 0; y < rows; y++) {
				ctx.strokeStyle = "#FF0000";
				ctx.strokeRect(x * scale, y * scale, scale, scale);
			}
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
		if ("cols" in $$props) cols = $$props.cols;
		if ("rows" in $$props) rows = $$props.rows;
		if ("scale" in $$props) scale = $$props.scale;
		if ("w" in $$props) w = $$props.w;
		if ("h" in $$props) h = $$props.h;
		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNmRlMjA2NmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0dmFyIGNvbHMsIHJvd3M7XG5cdHZhciBzY2FsZSA9IDIwO1xuXHR2YXIgdyA9IDYwMDtcblx0dmFyIGggPSA2MDA7XG5cdGNvbHMgPSB3IC8gc2NhbGU7XG5cdHJvd3MgPSBoIC8gc2NhbGU7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRsZXQgZnJhbWU7XG5cblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCByb3dzOyB5KyspIHtcblx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gXCIjRkYwMDAwXCI7XG5cblx0XHRcdFx0Y3R4LnN0cm9rZVJlY3QoeCAqIHNjYWxlLCB5ICogc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4uL3N0eWxlcy90aGVtZS5zY3NzXCI7XG5cdCoge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdGNhbnZhcyB7XG5cdFx0Lyogd2lkdGg6IDEwMHZ3O1xuXHRcdGhlaWdodDogMTAwdmg7ICovXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogcGluazsgKi9cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+QWJvdXQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGJvZHk+XG5cdDxjYW52YXMgYmluZDp0aGlzPVwie2NhbnZhc31cIiB3aWR0aD1cInsxMDAwfVwiIGhlaWdodD1cInsxMDAwfVwiPjwvY2FudmFzPlxuPC9ib2R5PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQTBDc0MsSUFBSTt3REFBWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdkNyRCxJQUFJLEVBQUUsSUFBSTtLQUNWLEtBQUssR0FBRyxFQUFFO0tBQ1YsQ0FBQyxHQUFHLEdBQUc7S0FDUCxDQUFDLEdBQUcsR0FBRztDQUNYLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSztDQUNoQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUs7S0FFWixNQUFNOztDQUNWLE9BQU87UUFDQSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJOztXQUd6QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUNqQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMxQixHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVM7SUFFM0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7Ozs7Ozs7bUJBdUJoQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
