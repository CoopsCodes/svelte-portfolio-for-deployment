import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.58c320f4.js';

/* src/routes/index.svelte generated by Svelte v3.18.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let div6;
	let h10;
	let t1;
	let t2;
	let h11;
	let t3;
	let t4;
	let h12;
	let t5;
	let span0;
	let t6;
	let t7;
	let t8;
	let div1;
	let div0;
	let span1;
	let t9;
	let div5;
	let div2;
	let t10;
	let div3;
	let span2;
	let t11;
	let span3;
	let t12;
	let div4;
	let span4;
	let t13;
	let span5;
	let t14;
	let span6;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			div6 = element("div");
			h10 = element("h1");
			t1 = text("Welcome, I'm");
			t2 = space();
			h11 = element("h1");
			t3 = text("Cooper Viktor");
			t4 = space();
			h12 = element("h1");
			t5 = text("a ");
			span0 = element("span");
			t6 = text("Developer");
			t7 = text(" in Melbourne");
			t8 = space();
			div1 = element("div");
			div0 = element("div");
			span1 = element("span");
			t9 = space();
			div5 = element("div");
			div2 = element("div");
			t10 = space();
			div3 = element("div");
			span2 = element("span");
			t11 = space();
			span3 = element("span");
			t12 = space();
			div4 = element("div");
			span4 = element("span");
			t13 = space();
			span5 = element("span");
			t14 = space();
			span6 = element("span");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-lvli9x\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div6 = claim_element(body_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h10 = claim_element(div6_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Welcome, I'm");
			h10_nodes.forEach(detach_dev);
			t2 = claim_space(div6_nodes);
			h11 = claim_element(div6_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t3 = claim_text(h11_nodes, "Cooper Viktor");
			h11_nodes.forEach(detach_dev);
			t4 = claim_space(div6_nodes);
			h12 = claim_element(div6_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t5 = claim_text(h12_nodes, "a ");
			span0 = claim_element(h12_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t6 = claim_text(span0_nodes, "Developer");
			span0_nodes.forEach(detach_dev);
			t7 = claim_text(h12_nodes, " in Melbourne");
			h12_nodes.forEach(detach_dev);
			t8 = claim_space(div6_nodes);
			div1 = claim_element(div6_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span1 = claim_element(div0_nodes, "SPAN", { class: true });
			children(span1).forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t10 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			span2 = claim_element(div3_nodes, "SPAN", { class: true });
			children(span2).forEach(detach_dev);
			t11 = claim_space(div3_nodes);
			span3 = claim_element(div3_nodes, "SPAN", { class: true });
			children(span3).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t12 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span4 = claim_element(div4_nodes, "SPAN", {});
			children(span4).forEach(detach_dev);
			t13 = claim_space(div4_nodes);
			span5 = claim_element(div4_nodes, "SPAN", {});
			children(span5).forEach(detach_dev);
			t14 = claim_space(div4_nodes);
			span6 = claim_element(div4_nodes, "SPAN", {});
			children(span6).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cooper-Codes.dev";
			attr_dev(h10, "class", "row1");
			add_location(h10, file, 182, 4, 14977);
			attr_dev(h11, "class", "name");
			add_location(h11, file, 183, 4, 15016);
			attr_dev(span0, "class", "dev");
			add_location(span0, file, 184, 23, 15075);
			attr_dev(h12, "class", "row3");
			add_location(h12, file, 184, 4, 15056);
			attr_dev(span1, "class", "rounds");
			add_location(span1, file, 189, 8, 15216);
			attr_dev(div0, "class", "cloudBase");
			add_location(div0, file, 188, 6, 15184);
			attr_dev(div1, "class", "mainCloud");
			add_location(div1, file, 187, 4, 15154);
			attr_dev(div2, "class", "circle");
			add_location(div2, file, 194, 6, 15300);
			attr_dev(span2, "class", "left");
			add_location(span2, file, 196, 8, 15360);
			attr_dev(span3, "class", "right");
			add_location(span3, file, 197, 8, 15395);
			attr_dev(div3, "class", "eyes");
			add_location(div3, file, 195, 6, 15333);
			add_location(span4, file, 200, 8, 15472);
			add_location(span5, file, 201, 8, 15489);
			add_location(span6, file, 202, 8, 15506);
			attr_dev(div4, "class", "sunrays");
			add_location(div4, file, 199, 6, 15442);
			attr_dev(div5, "class", "sun");
			add_location(div5, file, 193, 4, 15276);
			attr_dev(div6, "class", "homepageContainer");
			add_location(div6, file, 181, 2, 14941);
			attr_dev(body, "class", "siteContainer");
			add_location(body, file, 180, 0, 14910);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div6);
			append_dev(div6, h10);
			append_dev(h10, t1);
			append_dev(div6, t2);
			append_dev(div6, h11);
			append_dev(h11, t3);
			append_dev(div6, t4);
			append_dev(div6, h12);
			append_dev(h12, t5);
			append_dev(h12, span0);
			append_dev(span0, t6);
			append_dev(h12, t7);
			append_dev(div6, t8);
			append_dev(div6, div1);
			append_dev(div1, div0);
			append_dev(div0, span1);
			append_dev(div6, t9);
			append_dev(div6, div5);
			append_dev(div5, div2);
			append_dev(div5, t10);
			append_dev(div5, div3);
			append_dev(div3, span2);
			append_dev(div3, t11);
			append_dev(div3, span3);
			append_dev(div5, t12);
			append_dev(div5, div4);
			append_dev(div4, span4);
			append_dev(div4, t13);
			append_dev(div4, span5);
			append_dev(div4, t14);
			append_dev(div4, span6);
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

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMWU4ZGI3ZmUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
