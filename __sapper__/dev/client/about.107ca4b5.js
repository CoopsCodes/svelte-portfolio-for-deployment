import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.c6ae97d7.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let h1;
	let t1;
	let t2;
	let canvas;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			h1 = element("h1");
			t1 = text("Hi Welcome to the about me page");
			t2 = space();
			canvas = element("canvas");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			h1 = claim_element(body_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Hi Welcome to the about me page");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(body_nodes);
			canvas = claim_element(body_nodes, "CANVAS", { id: true, class: true });
			children(canvas).forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			attr_dev(h1, "class", "svelte-bb8nqw");
			add_location(h1, file, 28, 1, 547);
			attr_dev(canvas, "id", "pageCanvas");
			attr_dev(canvas, "class", "svelte-bb8nqw");
			add_location(canvas, file, 31, 1, 594);
			attr_dev(body, "class", "svelte-bb8nqw");
			add_location(body, file, 27, 0, 539);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, h1);
			append_dev(h1, t1);
			append_dev(body, t2);
			append_dev(body, canvas);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
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

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMTA3Y2E0YjUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
