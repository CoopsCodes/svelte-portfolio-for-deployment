import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.d9ff4b50.js';

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
			attr_dev(canvas_1, "width", canvas_1_width_value = 32);
			attr_dev(canvas_1, "height", canvas_1_height_value = 32);
			attr_dev(canvas_1, "class", "svelte-farpoq");
			add_location(canvas_1, file, 42, 1, 869);
			attr_dev(body, "class", "svelte-farpoq");
			add_location(body, file, 41, 0, 861);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, canvas_1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(body);
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

function instance($$self) {
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
				ctx.stroke("pink");
				ctx.fillStyle = "rgb(200, 0, 0)";
				ctx.rect(x * scale, y * scale, scale, scale);
			}
		}
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("cols" in $$props) cols = $$props.cols;
		if ("rows" in $$props) rows = $$props.rows;
		if ("scale" in $$props) scale = $$props.scale;
		if ("w" in $$props) w = $$props.w;
		if ("h" in $$props) h = $$props.h;
		if ("canvas" in $$props) canvas = $$props.canvas;
	};

	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY2NjZDhkNWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0dmFyIGNvbHMsIHJvd3M7XG5cdHZhciBzY2FsZSA9IDIwO1xuXHR2YXIgdyA9IDYwMDtcblx0dmFyIGggPSA2MDA7XG5cdGNvbHMgPSB3IC8gc2NhbGU7XG5cdHJvd3MgPSBoIC8gc2NhbGU7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRsZXQgZnJhbWU7XG5cblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCByb3dzOyB5KyspIHtcblx0XHRcdFx0Y3R4LnN0cm9rZShcInBpbmtcIik7XG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcInJnYigyMDAsIDAsIDApXCI7XG5cdFx0XHRcdGN0eC5yZWN0KHggKiBzY2FsZSwgeSAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuLi9zdHlsZXMvdGhlbWUuc2Nzc1wiO1xuXHQqIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXHRjYW52YXMge1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkFib3V0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxib2R5PlxuXHQ8Y2FudmFzIHdpZHRoPVwiezMyfVwiIGhlaWdodD1cInszMn1cIj48L2NhbnZhcz5cbjwvYm9keT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREEwQ2lCLEVBQUU7d0RBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F2QzVCLElBQUksRUFBRSxJQUFJO0tBQ1YsS0FBSyxHQUFHLEVBQUU7S0FDVixDQUFDLEdBQUcsR0FBRztLQUNQLENBQUMsR0FBRyxHQUFHO0NBQ1gsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLO0NBQ2hCLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSztLQUVaLE1BQU07O0NBQ1YsT0FBTztRQUNBLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7O1dBR3pCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ2pCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtJQUNqQixHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFnQjtJQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
