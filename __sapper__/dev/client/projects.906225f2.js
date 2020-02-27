import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.2aebca6d.js';

/* src/routes/projects.svelte generated by Svelte v3.18.2 */

const file = "src/routes/projects.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let a0;
	let div2;
	let div0;
	let h10;
	let t1;
	let t2;
	let div1;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let p2;
	let t7;
	let t8;
	let a1;
	let div5;
	let div3;
	let h11;
	let t9;
	let t10;
	let div4;
	let p3;
	let t11;
	let t12;
	let a2;
	let div8;
	let div6;
	let h12;
	let t13;
	let t14;
	let div7;
	let p4;
	let t15;
	let t16;
	let p5;
	let t17;
	let t18;
	let p6;
	let t19;
	let t20;
	let a3;
	let div11;
	let div9;
	let h13;
	let t21;
	let t22;
	let div10;
	let p7;
	let t23;
	let t24;
	let p8;
	let t25;
	let t26;
	let a4;
	let div14;
	let div12;
	let h14;
	let t27;
	let t28;
	let div13;
	let p9;
	let t29;
	let t30;
	let p10;
	let t31;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			a0 = element("a");
			div2 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t1 = text("Original Webpage");
			t2 = space();
			div1 = element("div");
			p0 = element("p");
			t3 = text("My first website.");
			t4 = space();
			p1 = element("p");
			t5 = text("Built as a project while a student at Coder Academy.");
			t6 = space();
			p2 = element("p");
			t7 = text("Click on me to see.");
			t8 = space();
			a1 = element("a");
			div5 = element("div");
			div3 = element("div");
			h11 = element("h1");
			t9 = text("This Website");
			t10 = space();
			div4 = element("div");
			p3 = element("p");
			t11 = text("Built a year after Bootcamp after the Internship at JB HiFi concluded.");
			t12 = space();
			a2 = element("a");
			div8 = element("div");
			div6 = element("div");
			h12 = element("h1");
			t13 = text("that 🐈 page");
			t14 = space();
			div7 = element("div");
			p4 = element("p");
			t15 = text("A project built to test my initial skills with SASS.");
			t16 = space();
			p5 = element("p");
			t17 = text("Just calls an API to display images of cats.");
			t18 = space();
			p6 = element("p");
			t19 = text("Click on me to see.");
			t20 = space();
			a3 = element("a");
			div11 = element("div");
			div9 = element("div");
			h13 = element("h1");
			t21 = text("Tetris");
			t22 = space();
			div10 = element("div");
			p7 = element("p");
			t23 = text("Building Tetris with support from a Tutorial, the goal was to learn\n          JavasScript logic for development.");
			t24 = space();
			p8 = element("p");
			t25 = text("Click on me to see.");
			t26 = space();
			a4 = element("a");
			div14 = element("div");
			div12 = element("div");
			h14 = element("h1");
			t27 = text("Compounding interest calculator");
			t28 = space();
			div13 = element("div");
			p9 = element("p");
			t29 = text("Interest Calculator I built while at Coder Academy to test my\n          VanillaJS skills");
			t30 = space();
			p10 = element("p");
			t31 = text("Click on me to see.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1en3a0b\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			a0 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a0_nodes = children(a0);
			div2 = claim_element(a0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "Original Webpage");
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "My first website.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Built as a project while a student at Coder Academy.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "Click on me to see.");
			p2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t8 = claim_space(body_nodes);

			a1 = claim_element(body_nodes, "A", {
				href: true,
				onclick: true,
				target: true,
				class: true
			});

			var a1_nodes = children(a1);
			div5 = claim_element(a1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h11 = claim_element(div3_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t9 = claim_text(h11_nodes, "This Website");
			h11_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t10 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "Built a year after Bootcamp after the Internship at JB HiFi concluded.");
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t12 = claim_space(body_nodes);
			a2 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a2_nodes = children(a2);
			div8 = claim_element(a2_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h12 = claim_element(div6_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t13 = claim_text(h12_nodes, "that 🐈 page");
			h12_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t14 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p4 = claim_element(div7_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t15 = claim_text(p4_nodes, "A project built to test my initial skills with SASS.");
			p4_nodes.forEach(detach_dev);
			t16 = claim_space(div7_nodes);
			p5 = claim_element(div7_nodes, "P", { class: true });
			var p5_nodes = children(p5);
			t17 = claim_text(p5_nodes, "Just calls an API to display images of cats.");
			p5_nodes.forEach(detach_dev);
			t18 = claim_space(div7_nodes);
			p6 = claim_element(div7_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t19 = claim_text(p6_nodes, "Click on me to see.");
			p6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			t20 = claim_space(body_nodes);
			a3 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a3_nodes = children(a3);
			div11 = claim_element(a3_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div9 = claim_element(div11_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h13 = claim_element(div9_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t21 = claim_text(h13_nodes, "Tetris");
			h13_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t22 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p7 = claim_element(div10_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t23 = claim_text(p7_nodes, "Building Tetris with support from a Tutorial, the goal was to learn\n          JavasScript logic for development.");
			p7_nodes.forEach(detach_dev);
			t24 = claim_space(div10_nodes);
			p8 = claim_element(div10_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t25 = claim_text(p8_nodes, "Click on me to see.");
			p8_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			t26 = claim_space(body_nodes);
			a4 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a4_nodes = children(a4);
			div14 = claim_element(a4_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div12 = claim_element(div14_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h14 = claim_element(div12_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t27 = claim_text(h14_nodes, "Compounding interest calculator");
			h14_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t28 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			p9 = claim_element(div13_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t29 = claim_text(p9_nodes, "Interest Calculator I built while at Coder Academy to test my\n          VanillaJS skills");
			p9_nodes.forEach(detach_dev);
			t30 = claim_space(div13_nodes);
			p10 = claim_element(div13_nodes, "P", { class: true });
			var p10_nodes = children(p10);
			t31 = claim_text(p10_nodes, "Click on me to see.");
			p10_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			a4_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects";
			attr_dev(h10, "class", "svelte-1qz37uk");
			add_location(h10, file, 63, 8, 1809);
			attr_dev(div0, "class", "projectTitle svelte-1qz37uk");
			add_location(div0, file, 62, 6, 1774);
			attr_dev(p0, "class", "svelte-1qz37uk");
			add_location(p0, file, 66, 8, 1888);
			attr_dev(p1, "class", "svelte-1qz37uk");
			add_location(p1, file, 69, 8, 1941);
			attr_dev(p2, "class", "svelte-1qz37uk");
			add_location(p2, file, 72, 8, 2029);
			attr_dev(div1, "class", "projectBody svelte-1qz37uk");
			add_location(div1, file, 65, 6, 1854);
			attr_dev(div2, "class", "projectTile svelte-1qz37uk");
			add_location(div2, file, 61, 4, 1742);
			attr_dev(a0, "href", "https://cooper-codes.dev/");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "class", "svelte-1qz37uk");
			add_location(a0, file, 60, 2, 1685);
			attr_dev(h11, "class", "svelte-1qz37uk");
			add_location(h11, file, 82, 8, 2244);
			attr_dev(div3, "class", "projectTitle svelte-1qz37uk");
			add_location(div3, file, 81, 6, 2209);
			attr_dev(p3, "class", "svelte-1qz37uk");
			add_location(p3, file, 85, 8, 2319);
			attr_dev(div4, "class", "projectBody svelte-1qz37uk");
			add_location(div4, file, 84, 6, 2285);
			attr_dev(div5, "class", "projectTile svelte-1qz37uk");
			add_location(div5, file, 80, 4, 2177);
			attr_dev(a1, "href", "This Website");
			attr_dev(a1, "onclick", "return false");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "class", "svelte-1qz37uk");
			add_location(a1, file, 79, 2, 2110);
			attr_dev(h12, "class", "svelte-1qz37uk");
			add_location(h12, file, 95, 8, 2593);
			attr_dev(div6, "class", "projectTitle svelte-1qz37uk");
			add_location(div6, file, 94, 6, 2558);
			attr_dev(p4, "class", "svelte-1qz37uk");
			add_location(p4, file, 98, 8, 2668);
			attr_dev(p5, "class", "svelte-1qz37uk");
			add_location(p5, file, 101, 8, 2756);
			attr_dev(p6, "class", "svelte-1qz37uk");
			add_location(p6, file, 104, 8, 2836);
			attr_dev(div7, "class", "projectBody svelte-1qz37uk");
			add_location(div7, file, 97, 6, 2634);
			attr_dev(div8, "class", "projectTile svelte-1qz37uk");
			add_location(div8, file, 93, 4, 2526);
			attr_dev(a2, "href", "https://coopscodes.github.io/that-cat-page/");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "class", "svelte-1qz37uk");
			add_location(a2, file, 92, 2, 2451);
			attr_dev(h13, "class", "svelte-1qz37uk");
			add_location(h13, file, 114, 8, 3052);
			attr_dev(div9, "class", "projectTitle svelte-1qz37uk");
			add_location(div9, file, 113, 6, 3017);
			attr_dev(p7, "class", "svelte-1qz37uk");
			add_location(p7, file, 117, 8, 3121);
			attr_dev(p8, "class", "svelte-1qz37uk");
			add_location(p8, file, 121, 8, 3269);
			attr_dev(div10, "class", "projectBody svelte-1qz37uk");
			add_location(div10, file, 116, 6, 3087);
			attr_dev(div11, "class", "projectTile svelte-1qz37uk");
			add_location(div11, file, 112, 4, 2985);
			attr_dev(a3, "href", "https://coopscodes.github.io/Tetris/");
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "class", "svelte-1qz37uk");
			add_location(a3, file, 111, 2, 2917);
			attr_dev(h14, "class", "svelte-1qz37uk");
			add_location(h14, file, 134, 8, 3521);
			attr_dev(div12, "class", "projectTitle svelte-1qz37uk");
			add_location(div12, file, 133, 6, 3486);
			attr_dev(p9, "class", "svelte-1qz37uk");
			add_location(p9, file, 137, 8, 3615);
			attr_dev(p10, "class", "svelte-1qz37uk");
			add_location(p10, file, 141, 8, 3739);
			attr_dev(div13, "class", "projectBody svelte-1qz37uk");
			add_location(div13, file, 136, 6, 3581);
			attr_dev(div14, "class", "projectTile svelte-1qz37uk");
			add_location(div14, file, 132, 4, 3454);
			attr_dev(a4, "href", "https://coopscodes.github.io/Compounding-Interest-Calculator/");
			attr_dev(a4, "target", "_blank");
			attr_dev(a4, "class", "svelte-1qz37uk");
			add_location(a4, file, 128, 2, 3350);
			attr_dev(body, "class", "projectsContainer svelte-1qz37uk");
			add_location(body, file, 59, 0, 1650);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, a0);
			append_dev(a0, div2);
			append_dev(div2, div0);
			append_dev(div0, h10);
			append_dev(h10, t1);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, p0);
			append_dev(p0, t3);
			append_dev(div1, t4);
			append_dev(div1, p1);
			append_dev(p1, t5);
			append_dev(div1, t6);
			append_dev(div1, p2);
			append_dev(p2, t7);
			append_dev(body, t8);
			append_dev(body, a1);
			append_dev(a1, div5);
			append_dev(div5, div3);
			append_dev(div3, h11);
			append_dev(h11, t9);
			append_dev(div5, t10);
			append_dev(div5, div4);
			append_dev(div4, p3);
			append_dev(p3, t11);
			append_dev(body, t12);
			append_dev(body, a2);
			append_dev(a2, div8);
			append_dev(div8, div6);
			append_dev(div6, h12);
			append_dev(h12, t13);
			append_dev(div8, t14);
			append_dev(div8, div7);
			append_dev(div7, p4);
			append_dev(p4, t15);
			append_dev(div7, t16);
			append_dev(div7, p5);
			append_dev(p5, t17);
			append_dev(div7, t18);
			append_dev(div7, p6);
			append_dev(p6, t19);
			append_dev(body, t20);
			append_dev(body, a3);
			append_dev(a3, div11);
			append_dev(div11, div9);
			append_dev(div9, h13);
			append_dev(h13, t21);
			append_dev(div11, t22);
			append_dev(div11, div10);
			append_dev(div10, p7);
			append_dev(p7, t23);
			append_dev(div10, t24);
			append_dev(div10, p8);
			append_dev(p8, t25);
			append_dev(body, t26);
			append_dev(body, a4);
			append_dev(a4, div14);
			append_dev(div14, div12);
			append_dev(div12, h14);
			append_dev(h14, t27);
			append_dev(div14, t28);
			append_dev(div14, div13);
			append_dev(div13, p9);
			append_dev(p9, t29);
			append_dev(div13, t30);
			append_dev(div13, p10);
			append_dev(p10, t31);
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

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects",
			options,
			id: create_fragment.name
		});
	}
}

export default Projects;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuOTA2MjI1ZjIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
