import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.27718395.js';

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
			body = claim_element(nodes, "BODY", {});
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
			attr_dev(canvas_1, "class", "svelte-5p3g3y");
			add_location(canvas_1, file, 21, 1, 353);
			add_location(body, file, 20, 0, 345);
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
	let canvas;

	onMount(() => {
		const ctx = canvas.getContext("2d");
	});

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYTQ5NjBhODUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRsZXQgZnJhbWU7XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXHRAaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LnNjc3NcIjtcblxuXHRjYW52YXMge1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkFib3V0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxib2R5PlxuXHQ8Y2FudmFzIHdpZHRoPVwiezMyfVwiIGhlaWdodD1cInszMn1cIj48L2NhbnZhcz5cbjwvYm9keT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFxQmlCLEVBQUU7d0RBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWxCNUIsTUFBTTs7Q0FDVixPQUFPO1FBQ0EsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9