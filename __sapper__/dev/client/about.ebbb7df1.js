import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.c3b33fce.js';

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
			attr_dev(canvas_1, "class", "svelte-1paim9c");
			add_location(canvas_1, file, 38, 1, 761);
			attr_dev(body, "class", "svelte-1paim9c");
			add_location(body, file, 37, 0, 753);
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

		for (let x = 0; x < cols.length; x++) {
			for (let y = 0; y < rows.length; y++) {
				
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZWJiYjdkZjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0dmFyIGNvbHMsIHJvd3M7XG5cdHZhciBzY2FsZSA9IDIwO1xuXHR2YXIgdyA9IDYwMDtcblx0dmFyIGggPSA2MDA7XG5cdGNvbHMgPSB3IC8gc2NhbGU7XG5cdHJvd3MgPSBoIC8gc2NhbGU7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRsZXQgZnJhbWU7XG5cblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHMubGVuZ3RoOyB4KyspIHtcblx0XHRcdGZvciAobGV0IHkgPSAwOyB5IDwgcm93cy5sZW5ndGg7IHkrKykge31cblx0XHR9XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi4vc3R5bGVzL3RoZW1lLnNjc3NcIjtcblx0KiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblx0Y2FudmFzIHtcblx0XHR3aWR0aDogMTAwdnc7XG5cdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keT5cblx0PGNhbnZhcyB3aWR0aD1cInszMn1cIiBoZWlnaHQ9XCJ7MzJ9XCI+PC9jYW52YXM+XG48L2JvZHk+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBc0NpQixFQUFFO3dEQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbkM1QixJQUFJLEVBQUUsSUFBSTtLQUNWLEtBQUssR0FBRyxFQUFFO0tBQ1YsQ0FBQyxHQUFHLEdBQUc7S0FDUCxDQUFDLEdBQUcsR0FBRztDQUNYLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSztDQUNoQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUs7S0FFWixNQUFNOztDQUNWLE9BQU87UUFDQSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJOztXQUd6QixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
