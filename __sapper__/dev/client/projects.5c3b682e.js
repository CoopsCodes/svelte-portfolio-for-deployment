import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.378e47f5.js';

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
	let a1;
	let div5;
	let div3;
	let h11;
	let t7;
	let t8;
	let div4;
	let p2;
	let t9;
	let t10;
	let p3;
	let t11;
	let t12;
	let p4;
	let t13;
	let t14;
	let a2;
	let div8;
	let div6;
	let h12;
	let t15;
	let t16;
	let div7;
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
	let p9;
	let t27;
	let t28;
	let a4;
	let div14;
	let div12;
	let h14;
	let t29;
	let t30;
	let div13;
	let p10;
	let t31;
	let t32;
	let p11;
	let t33;
	let t34;
	let a5;
	let div17;
	let div15;
	let h15;
	let t35;
	let t36;
	let div16;
	let p12;
	let t37;
	let t38;
	let p13;
	let t39;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			a0 = element("a");
			div2 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t1 = text("This Website");
			t2 = space();
			div1 = element("div");
			p0 = element("p");
			t3 = text("Rebuilt my Portfolio in Svelte, this is an ongoing project.");
			t4 = space();
			p1 = element("p");
			t5 = text("Pages like this one aren't final and it will constantly\n\t\t\t\t\tupdate.");
			t6 = space();
			a1 = element("a");
			div5 = element("div");
			div3 = element("div");
			h11 = element("h1");
			t7 = text("Resume");
			t8 = space();
			div4 = element("div");
			p2 = element("p");
			t9 = text("A resume webpage page.");
			t10 = space();
			p3 = element("p");
			t11 = text("If you 'Command+P' me I can be saved as an A4 sized PDF (or\n\t\t\t\t\tprinted) for all you curious recruiters out there.");
			t12 = space();
			p4 = element("p");
			t13 = text("Click on me to see.");
			t14 = space();
			a2 = element("a");
			div8 = element("div");
			div6 = element("div");
			h12 = element("h1");
			t15 = text("Toy Robot Coding Challenge");
			t16 = space();
			div7 = element("div");
			p5 = element("p");
			t17 = text("The Toy Robot Coding Challenge built in C# as an attempt to\n\t\t\t\t\tlearn the fundamentals.");
			t18 = space();
			p6 = element("p");
			t19 = text("I'm clickable.");
			t20 = space();
			a3 = element("a");
			div11 = element("div");
			div9 = element("div");
			h13 = element("h1");
			t21 = text("that 🐈 page");
			t22 = space();
			div10 = element("div");
			p7 = element("p");
			t23 = text("A project built to test my initial skills with SASS.");
			t24 = space();
			p8 = element("p");
			t25 = text("Just calls an API to display images of cats.");
			t26 = space();
			p9 = element("p");
			t27 = text("I'm clickable.");
			t28 = space();
			a4 = element("a");
			div14 = element("div");
			div12 = element("div");
			h14 = element("h1");
			t29 = text("Tetris");
			t30 = space();
			div13 = element("div");
			p10 = element("p");
			t31 = text("Building Tetris with support from a Tutorial, the goal was\n\t\t\t\t\tto learn JavasScript logic for development.");
			t32 = space();
			p11 = element("p");
			t33 = text("I'm clickable.");
			t34 = space();
			a5 = element("a");
			div17 = element("div");
			div15 = element("div");
			h15 = element("h1");
			t35 = text("Compounding interest calculator");
			t36 = space();
			div16 = element("div");
			p12 = element("p");
			t37 = text("Interest Calculator I built while at Coder Academy to test\n\t\t\t\t\tmy VanillaJS skills");
			t38 = space();
			p13 = element("p");
			t39 = text("I'm clickable.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-5oeyam\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);

			a0 = claim_element(body_nodes, "A", {
				href: true,
				onclick: true,
				target: true,
				class: true
			});

			var a0_nodes = children(a0);
			div2 = claim_element(a0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t1 = claim_text(h10_nodes, "This Website");
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Rebuilt my Portfolio in Svelte, this is an ongoing project.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Pages like this one aren't final and it will constantly\n\t\t\t\t\tupdate.");
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t6 = claim_space(body_nodes);
			a1 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a1_nodes = children(a1);
			div5 = claim_element(a1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h11 = claim_element(div3_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t7 = claim_text(h11_nodes, "Resume");
			h11_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t8 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p2 = claim_element(div4_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "A resume webpage page.");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "If you 'Command+P' me I can be saved as an A4 sized PDF (or\n\t\t\t\t\tprinted) for all you curious recruiters out there.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div4_nodes);
			p4 = claim_element(div4_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "Click on me to see.");
			p4_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t14 = claim_space(body_nodes);
			a2 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a2_nodes = children(a2);
			div8 = claim_element(a2_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h12 = claim_element(div6_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t15 = claim_text(h12_nodes, "Toy Robot Coding Challenge");
			h12_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t16 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p5 = claim_element(div7_nodes, "P", { class: true });
			var p5_nodes = children(p5);
			t17 = claim_text(p5_nodes, "The Toy Robot Coding Challenge built in C# as an attempt to\n\t\t\t\t\tlearn the fundamentals.");
			p5_nodes.forEach(detach_dev);
			t18 = claim_space(div7_nodes);
			p6 = claim_element(div7_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t19 = claim_text(p6_nodes, "I'm clickable.");
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
			t21 = claim_text(h13_nodes, "that 🐈 page");
			h13_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t22 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p7 = claim_element(div10_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t23 = claim_text(p7_nodes, "A project built to test my initial skills with SASS.");
			p7_nodes.forEach(detach_dev);
			t24 = claim_space(div10_nodes);
			p8 = claim_element(div10_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t25 = claim_text(p8_nodes, "Just calls an API to display images of cats.");
			p8_nodes.forEach(detach_dev);
			t26 = claim_space(div10_nodes);
			p9 = claim_element(div10_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t27 = claim_text(p9_nodes, "I'm clickable.");
			p9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			t28 = claim_space(body_nodes);
			a4 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a4_nodes = children(a4);
			div14 = claim_element(a4_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div12 = claim_element(div14_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h14 = claim_element(div12_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t29 = claim_text(h14_nodes, "Tetris");
			h14_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t30 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			p10 = claim_element(div13_nodes, "P", { class: true });
			var p10_nodes = children(p10);
			t31 = claim_text(p10_nodes, "Building Tetris with support from a Tutorial, the goal was\n\t\t\t\t\tto learn JavasScript logic for development.");
			p10_nodes.forEach(detach_dev);
			t32 = claim_space(div13_nodes);
			p11 = claim_element(div13_nodes, "P", { class: true });
			var p11_nodes = children(p11);
			t33 = claim_text(p11_nodes, "I'm clickable.");
			p11_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			a4_nodes.forEach(detach_dev);
			t34 = claim_space(body_nodes);
			a5 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a5_nodes = children(a5);
			div17 = claim_element(a5_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div15 = claim_element(div17_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			h15 = claim_element(div15_nodes, "H1", { class: true });
			var h15_nodes = children(h15);
			t35 = claim_text(h15_nodes, "Compounding interest calculator");
			h15_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			t36 = claim_space(div17_nodes);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			p12 = claim_element(div16_nodes, "P", { class: true });
			var p12_nodes = children(p12);
			t37 = claim_text(p12_nodes, "Interest Calculator I built while at Coder Academy to test\n\t\t\t\t\tmy VanillaJS skills");
			p12_nodes.forEach(detach_dev);
			t38 = claim_space(div16_nodes);
			p13 = claim_element(div16_nodes, "P", { class: true });
			var p13_nodes = children(p13);
			t39 = claim_text(p13_nodes, "I'm clickable.");
			p13_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			a5_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects";
			attr_dev(h10, "class", "svelte-1tn62vn");
			add_location(h10, file, 93, 4, 2744);
			attr_dev(div0, "class", "projectTitle svelte-1tn62vn");
			add_location(div0, file, 92, 3, 2713);
			attr_dev(p0, "class", "svelte-1tn62vn");
			add_location(p0, file, 96, 4, 2809);
			attr_dev(p1, "class", "svelte-1tn62vn");
			add_location(p1, file, 99, 4, 2891);
			attr_dev(div1, "class", "projectBody svelte-1tn62vn");
			add_location(div1, file, 95, 3, 2779);
			attr_dev(div2, "class", "projectTile svelte-1tn62vn");
			add_location(div2, file, 91, 2, 2684);
			attr_dev(a0, "href", "This Website");
			attr_dev(a0, "onclick", "return false");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "class", "svelte-1tn62vn");
			add_location(a0, file, 90, 1, 2619);
			attr_dev(h11, "class", "svelte-1tn62vn");
			add_location(h11, file, 110, 4, 3131);
			attr_dev(div3, "class", "projectTitle svelte-1tn62vn");
			add_location(div3, file, 109, 3, 3100);
			attr_dev(p2, "class", "svelte-1tn62vn");
			add_location(p2, file, 113, 4, 3190);
			attr_dev(p3, "class", "svelte-1tn62vn");
			add_location(p3, file, 116, 4, 3235);
			attr_dev(p4, "class", "svelte-1tn62vn");
			add_location(p4, file, 120, 4, 3373);
			attr_dev(div4, "class", "projectBody svelte-1tn62vn");
			add_location(div4, file, 112, 3, 3160);
			attr_dev(div5, "class", "projectTile svelte-1tn62vn");
			add_location(div5, file, 108, 2, 3071);
			attr_dev(a1, "href", "https://coopscodes.github.io/resume/");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "class", "svelte-1tn62vn");
			add_location(a1, file, 107, 1, 3005);
			attr_dev(h12, "class", "svelte-1tn62vn");
			add_location(h12, file, 130, 4, 3569);
			attr_dev(div6, "class", "projectTitle svelte-1tn62vn");
			add_location(div6, file, 129, 3, 3538);
			attr_dev(p5, "class", "svelte-1tn62vn");
			add_location(p5, file, 133, 4, 3648);
			attr_dev(p6, "class", "svelte-1tn62vn");
			add_location(p6, file, 140, 4, 3862);
			attr_dev(div7, "class", "projectBody svelte-1tn62vn");
			add_location(div7, file, 132, 3, 3618);
			attr_dev(div8, "class", "projectTile svelte-1tn62vn");
			add_location(div8, file, 128, 2, 3509);
			attr_dev(a2, "href", "https://github.com/CoopsCodes/CSharpRobot");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "class", "svelte-1tn62vn");
			add_location(a2, file, 127, 1, 3438);
			attr_dev(h13, "class", "svelte-1tn62vn");
			add_location(h13, file, 150, 4, 4055);
			attr_dev(div9, "class", "projectTitle svelte-1tn62vn");
			add_location(div9, file, 149, 3, 4024);
			attr_dev(p7, "class", "svelte-1tn62vn");
			add_location(p7, file, 153, 4, 4120);
			attr_dev(p8, "class", "svelte-1tn62vn");
			add_location(p8, file, 156, 4, 4195);
			attr_dev(p9, "class", "svelte-1tn62vn");
			add_location(p9, file, 159, 4, 4262);
			attr_dev(div10, "class", "projectBody svelte-1tn62vn");
			add_location(div10, file, 152, 3, 4090);
			attr_dev(div11, "class", "projectTile svelte-1tn62vn");
			add_location(div11, file, 148, 2, 3995);
			attr_dev(a3, "href", "https://coopscodes.github.io/that-cat-page/");
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "class", "svelte-1tn62vn");
			add_location(a3, file, 147, 1, 3922);
			attr_dev(h14, "class", "svelte-1tn62vn");
			add_location(h14, file, 169, 4, 4448);
			attr_dev(div12, "class", "projectTitle svelte-1tn62vn");
			add_location(div12, file, 168, 3, 4417);
			attr_dev(p10, "class", "svelte-1tn62vn");
			add_location(p10, file, 172, 4, 4507);
			attr_dev(p11, "class", "svelte-1tn62vn");
			add_location(p11, file, 176, 4, 4637);
			attr_dev(div13, "class", "projectBody svelte-1tn62vn");
			add_location(div13, file, 171, 3, 4477);
			attr_dev(div14, "class", "projectTile svelte-1tn62vn");
			add_location(div14, file, 167, 2, 4388);
			attr_dev(a4, "href", "https://coopscodes.github.io/Tetris/");
			attr_dev(a4, "target", "_blank");
			attr_dev(a4, "class", "svelte-1tn62vn");
			add_location(a4, file, 166, 1, 4322);
			attr_dev(h15, "class", "svelte-1tn62vn");
			add_location(h15, file, 189, 4, 4854);
			attr_dev(div15, "class", "projectTitle svelte-1tn62vn");
			add_location(div15, file, 188, 3, 4823);
			attr_dev(p12, "class", "svelte-1tn62vn");
			add_location(p12, file, 192, 4, 4938);
			attr_dev(p13, "class", "svelte-1tn62vn");
			add_location(p13, file, 196, 4, 5044);
			attr_dev(div16, "class", "projectBody svelte-1tn62vn");
			add_location(div16, file, 191, 3, 4908);
			attr_dev(div17, "class", "projectTile svelte-1tn62vn");
			add_location(div17, file, 187, 2, 4794);
			attr_dev(a5, "href", "https://coopscodes.github.io/Compounding-Interest-Calculator/");
			attr_dev(a5, "target", "_blank");
			attr_dev(a5, "class", "svelte-1tn62vn");
			add_location(a5, file, 183, 1, 4697);
			attr_dev(body, "class", "projectsContainer svelte-1tn62vn");
			add_location(body, file, 68, 0, 2096);
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
			append_dev(body, t6);
			append_dev(body, a1);
			append_dev(a1, div5);
			append_dev(div5, div3);
			append_dev(div3, h11);
			append_dev(h11, t7);
			append_dev(div5, t8);
			append_dev(div5, div4);
			append_dev(div4, p2);
			append_dev(p2, t9);
			append_dev(div4, t10);
			append_dev(div4, p3);
			append_dev(p3, t11);
			append_dev(div4, t12);
			append_dev(div4, p4);
			append_dev(p4, t13);
			append_dev(body, t14);
			append_dev(body, a2);
			append_dev(a2, div8);
			append_dev(div8, div6);
			append_dev(div6, h12);
			append_dev(h12, t15);
			append_dev(div8, t16);
			append_dev(div8, div7);
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
			append_dev(div10, t26);
			append_dev(div10, p9);
			append_dev(p9, t27);
			append_dev(body, t28);
			append_dev(body, a4);
			append_dev(a4, div14);
			append_dev(div14, div12);
			append_dev(div12, h14);
			append_dev(h14, t29);
			append_dev(div14, t30);
			append_dev(div14, div13);
			append_dev(div13, p10);
			append_dev(p10, t31);
			append_dev(div13, t32);
			append_dev(div13, p11);
			append_dev(p11, t33);
			append_dev(body, t34);
			append_dev(body, a5);
			append_dev(a5, div17);
			append_dev(div17, div15);
			append_dev(div15, h15);
			append_dev(h15, t35);
			append_dev(div17, t36);
			append_dev(div17, div16);
			append_dev(div16, p12);
			append_dev(p12, t37);
			append_dev(div16, t38);
			append_dev(div16, p13);
			append_dev(p13, t39);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuNWMzYjY4MmUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
