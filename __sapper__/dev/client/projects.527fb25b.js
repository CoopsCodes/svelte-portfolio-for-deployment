import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.59ebb28b.js';

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
	let p5;
	let t15;
	let t16;
	let a2;
	let div8;
	let div6;
	let h12;
	let t17;
	let t18;
	let div7;
	let p6;
	let t19;
	let t20;
	let p7;
	let t21;
	let t22;
	let a3;
	let div11;
	let div9;
	let h13;
	let t23;
	let t24;
	let div10;
	let p8;
	let t25;
	let t26;
	let p9;
	let t27;
	let t28;
	let p10;
	let t29;
	let t30;
	let a4;
	let div14;
	let div12;
	let h14;
	let t31;
	let t32;
	let div13;
	let p11;
	let t33;
	let t34;
	let p12;
	let t35;
	let t36;
	let a5;
	let div17;
	let div15;
	let h15;
	let t37;
	let t38;
	let div16;
	let p13;
	let t39;
	let t40;
	let p14;
	let t41;

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
			t9 = text("My first website.");
			t10 = space();
			p3 = element("p");
			t11 = text("A page built specifically to display my Resume for potential\n\t\t\t\t\trecruiters.");
			t12 = space();
			p4 = element("p");
			t13 = text("If you 'Command+P' me I can be saved as an A4 sized PDF (or\n\t\t\t\t\tprinted) for all you curious recruiters out there.");
			t14 = space();
			p5 = element("p");
			t15 = text("Click on me to see.");
			t16 = space();
			a2 = element("a");
			div8 = element("div");
			div6 = element("div");
			h12 = element("h1");
			t17 = text("Toy Robot Coding Challenge");
			t18 = space();
			div7 = element("div");
			p6 = element("p");
			t19 = text("The Toy Robot Coding Challenge built in C# as an attempt to\n\t\t\t\t\tlearn the fundamentals.");
			t20 = space();
			p7 = element("p");
			t21 = text("I'm clickable.");
			t22 = space();
			a3 = element("a");
			div11 = element("div");
			div9 = element("div");
			h13 = element("h1");
			t23 = text("that 🐈 page");
			t24 = space();
			div10 = element("div");
			p8 = element("p");
			t25 = text("A project built to test my initial skills with SASS.");
			t26 = space();
			p9 = element("p");
			t27 = text("Just calls an API to display images of cats.");
			t28 = space();
			p10 = element("p");
			t29 = text("I'm clickable.");
			t30 = space();
			a4 = element("a");
			div14 = element("div");
			div12 = element("div");
			h14 = element("h1");
			t31 = text("Tetris");
			t32 = space();
			div13 = element("div");
			p11 = element("p");
			t33 = text("Building Tetris with support from a Tutorial, the goal was\n\t\t\t\t\tto learn JavasScript logic for development.");
			t34 = space();
			p12 = element("p");
			t35 = text("I'm clickable.");
			t36 = space();
			a5 = element("a");
			div17 = element("div");
			div15 = element("div");
			h15 = element("h1");
			t37 = text("Compounding interest calculator");
			t38 = space();
			div16 = element("div");
			p13 = element("p");
			t39 = text("Interest Calculator I built while at Coder Academy to test\n\t\t\t\t\tmy VanillaJS skills");
			t40 = space();
			p14 = element("p");
			t41 = text("I'm clickable.");
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
			t9 = claim_text(p2_nodes, "My first website.");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "A page built specifically to display my Resume for potential\n\t\t\t\t\trecruiters.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div4_nodes);
			p4 = claim_element(div4_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "If you 'Command+P' me I can be saved as an A4 sized PDF (or\n\t\t\t\t\tprinted) for all you curious recruiters out there.");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(div4_nodes);
			p5 = claim_element(div4_nodes, "P", { class: true });
			var p5_nodes = children(p5);
			t15 = claim_text(p5_nodes, "Click on me to see.");
			p5_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			t16 = claim_space(body_nodes);
			a2 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a2_nodes = children(a2);
			div8 = claim_element(a2_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div6 = claim_element(div8_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h12 = claim_element(div6_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t17 = claim_text(h12_nodes, "Toy Robot Coding Challenge");
			h12_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t18 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p6 = claim_element(div7_nodes, "P", { class: true });
			var p6_nodes = children(p6);
			t19 = claim_text(p6_nodes, "The Toy Robot Coding Challenge built in C# as an attempt to\n\t\t\t\t\tlearn the fundamentals.");
			p6_nodes.forEach(detach_dev);
			t20 = claim_space(div7_nodes);
			p7 = claim_element(div7_nodes, "P", { class: true });
			var p7_nodes = children(p7);
			t21 = claim_text(p7_nodes, "I'm clickable.");
			p7_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			a2_nodes.forEach(detach_dev);
			t22 = claim_space(body_nodes);
			a3 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a3_nodes = children(a3);
			div11 = claim_element(a3_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div9 = claim_element(div11_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			h13 = claim_element(div9_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t23 = claim_text(h13_nodes, "that 🐈 page");
			h13_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t24 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p8 = claim_element(div10_nodes, "P", { class: true });
			var p8_nodes = children(p8);
			t25 = claim_text(p8_nodes, "A project built to test my initial skills with SASS.");
			p8_nodes.forEach(detach_dev);
			t26 = claim_space(div10_nodes);
			p9 = claim_element(div10_nodes, "P", { class: true });
			var p9_nodes = children(p9);
			t27 = claim_text(p9_nodes, "Just calls an API to display images of cats.");
			p9_nodes.forEach(detach_dev);
			t28 = claim_space(div10_nodes);
			p10 = claim_element(div10_nodes, "P", { class: true });
			var p10_nodes = children(p10);
			t29 = claim_text(p10_nodes, "I'm clickable.");
			p10_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			t30 = claim_space(body_nodes);
			a4 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a4_nodes = children(a4);
			div14 = claim_element(a4_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div12 = claim_element(div14_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			h14 = claim_element(div12_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t31 = claim_text(h14_nodes, "Tetris");
			h14_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			t32 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			p11 = claim_element(div13_nodes, "P", { class: true });
			var p11_nodes = children(p11);
			t33 = claim_text(p11_nodes, "Building Tetris with support from a Tutorial, the goal was\n\t\t\t\t\tto learn JavasScript logic for development.");
			p11_nodes.forEach(detach_dev);
			t34 = claim_space(div13_nodes);
			p12 = claim_element(div13_nodes, "P", { class: true });
			var p12_nodes = children(p12);
			t35 = claim_text(p12_nodes, "I'm clickable.");
			p12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			a4_nodes.forEach(detach_dev);
			t36 = claim_space(body_nodes);
			a5 = claim_element(body_nodes, "A", { href: true, target: true, class: true });
			var a5_nodes = children(a5);
			div17 = claim_element(a5_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div15 = claim_element(div17_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			h15 = claim_element(div15_nodes, "H1", { class: true });
			var h15_nodes = children(h15);
			t37 = claim_text(h15_nodes, "Compounding interest calculator");
			h15_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			t38 = claim_space(div17_nodes);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			p13 = claim_element(div16_nodes, "P", { class: true });
			var p13_nodes = children(p13);
			t39 = claim_text(p13_nodes, "Interest Calculator I built while at Coder Academy to test\n\t\t\t\t\tmy VanillaJS skills");
			p13_nodes.forEach(detach_dev);
			t40 = claim_space(div16_nodes);
			p14 = claim_element(div16_nodes, "P", { class: true });
			var p14_nodes = children(p14);
			t41 = claim_text(p14_nodes, "I'm clickable.");
			p14_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			a5_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projects";
			attr_dev(h10, "class", "svelte-ik8gv2");
			add_location(h10, file, 91, 4, 2593);
			attr_dev(div0, "class", "projectTitle svelte-ik8gv2");
			add_location(div0, file, 90, 3, 2562);
			attr_dev(p0, "class", "svelte-ik8gv2");
			add_location(p0, file, 94, 4, 2658);
			attr_dev(p1, "class", "svelte-ik8gv2");
			add_location(p1, file, 97, 4, 2740);
			attr_dev(div1, "class", "projectBody svelte-ik8gv2");
			add_location(div1, file, 93, 3, 2628);
			attr_dev(div2, "class", "projectTile svelte-ik8gv2");
			add_location(div2, file, 89, 2, 2533);
			attr_dev(a0, "href", "This Website");
			attr_dev(a0, "onclick", "return false");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "class", "svelte-ik8gv2");
			add_location(a0, file, 88, 1, 2468);
			attr_dev(h11, "class", "svelte-ik8gv2");
			add_location(h11, file, 108, 4, 2980);
			attr_dev(div3, "class", "projectTitle svelte-ik8gv2");
			add_location(div3, file, 107, 3, 2949);
			attr_dev(p2, "class", "svelte-ik8gv2");
			add_location(p2, file, 111, 4, 3039);
			attr_dev(p3, "class", "svelte-ik8gv2");
			add_location(p3, file, 114, 4, 3079);
			attr_dev(p4, "class", "svelte-ik8gv2");
			add_location(p4, file, 118, 4, 3179);
			attr_dev(p5, "class", "svelte-ik8gv2");
			add_location(p5, file, 122, 4, 3317);
			attr_dev(div4, "class", "projectBody svelte-ik8gv2");
			add_location(div4, file, 110, 3, 3009);
			attr_dev(div5, "class", "projectTile svelte-ik8gv2");
			add_location(div5, file, 106, 2, 2920);
			attr_dev(a1, "href", "https://coopscodes.github.io/resume/");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "class", "svelte-ik8gv2");
			add_location(a1, file, 105, 1, 2854);
			attr_dev(h12, "class", "svelte-ik8gv2");
			add_location(h12, file, 132, 4, 3513);
			attr_dev(div6, "class", "projectTitle svelte-ik8gv2");
			add_location(div6, file, 131, 3, 3482);
			attr_dev(p6, "class", "svelte-ik8gv2");
			add_location(p6, file, 135, 4, 3592);
			attr_dev(p7, "class", "svelte-ik8gv2");
			add_location(p7, file, 142, 4, 3806);
			attr_dev(div7, "class", "projectBody svelte-ik8gv2");
			add_location(div7, file, 134, 3, 3562);
			attr_dev(div8, "class", "projectTile svelte-ik8gv2");
			add_location(div8, file, 130, 2, 3453);
			attr_dev(a2, "href", "https://github.com/CoopsCodes/CSharpRobot");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "class", "svelte-ik8gv2");
			add_location(a2, file, 129, 1, 3382);
			attr_dev(h13, "class", "svelte-ik8gv2");
			add_location(h13, file, 152, 4, 3999);
			attr_dev(div9, "class", "projectTitle svelte-ik8gv2");
			add_location(div9, file, 151, 3, 3968);
			attr_dev(p8, "class", "svelte-ik8gv2");
			add_location(p8, file, 155, 4, 4064);
			attr_dev(p9, "class", "svelte-ik8gv2");
			add_location(p9, file, 158, 4, 4139);
			attr_dev(p10, "class", "svelte-ik8gv2");
			add_location(p10, file, 161, 4, 4206);
			attr_dev(div10, "class", "projectBody svelte-ik8gv2");
			add_location(div10, file, 154, 3, 4034);
			attr_dev(div11, "class", "projectTile svelte-ik8gv2");
			add_location(div11, file, 150, 2, 3939);
			attr_dev(a3, "href", "https://coopscodes.github.io/that-cat-page/");
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "class", "svelte-ik8gv2");
			add_location(a3, file, 149, 1, 3866);
			attr_dev(h14, "class", "svelte-ik8gv2");
			add_location(h14, file, 171, 4, 4392);
			attr_dev(div12, "class", "projectTitle svelte-ik8gv2");
			add_location(div12, file, 170, 3, 4361);
			attr_dev(p11, "class", "svelte-ik8gv2");
			add_location(p11, file, 174, 4, 4451);
			attr_dev(p12, "class", "svelte-ik8gv2");
			add_location(p12, file, 178, 4, 4581);
			attr_dev(div13, "class", "projectBody svelte-ik8gv2");
			add_location(div13, file, 173, 3, 4421);
			attr_dev(div14, "class", "projectTile svelte-ik8gv2");
			add_location(div14, file, 169, 2, 4332);
			attr_dev(a4, "href", "https://coopscodes.github.io/Tetris/");
			attr_dev(a4, "target", "_blank");
			attr_dev(a4, "class", "svelte-ik8gv2");
			add_location(a4, file, 168, 1, 4266);
			attr_dev(h15, "class", "svelte-ik8gv2");
			add_location(h15, file, 191, 4, 4798);
			attr_dev(div15, "class", "projectTitle svelte-ik8gv2");
			add_location(div15, file, 190, 3, 4767);
			attr_dev(p13, "class", "svelte-ik8gv2");
			add_location(p13, file, 194, 4, 4882);
			attr_dev(p14, "class", "svelte-ik8gv2");
			add_location(p14, file, 198, 4, 4988);
			attr_dev(div16, "class", "projectBody svelte-ik8gv2");
			add_location(div16, file, 193, 3, 4852);
			attr_dev(div17, "class", "projectTile svelte-ik8gv2");
			add_location(div17, file, 189, 2, 4738);
			attr_dev(a5, "href", "https://coopscodes.github.io/Compounding-Interest-Calculator/");
			attr_dev(a5, "target", "_blank");
			attr_dev(a5, "class", "svelte-ik8gv2");
			add_location(a5, file, 185, 1, 4641);
			attr_dev(body, "class", "projectsContainer svelte-ik8gv2");
			add_location(body, file, 66, 0, 1945);
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
			append_dev(div4, t14);
			append_dev(div4, p5);
			append_dev(p5, t15);
			append_dev(body, t16);
			append_dev(body, a2);
			append_dev(a2, div8);
			append_dev(div8, div6);
			append_dev(div6, h12);
			append_dev(h12, t17);
			append_dev(div8, t18);
			append_dev(div8, div7);
			append_dev(div7, p6);
			append_dev(p6, t19);
			append_dev(div7, t20);
			append_dev(div7, p7);
			append_dev(p7, t21);
			append_dev(body, t22);
			append_dev(body, a3);
			append_dev(a3, div11);
			append_dev(div11, div9);
			append_dev(div9, h13);
			append_dev(h13, t23);
			append_dev(div11, t24);
			append_dev(div11, div10);
			append_dev(div10, p8);
			append_dev(p8, t25);
			append_dev(div10, t26);
			append_dev(div10, p9);
			append_dev(p9, t27);
			append_dev(div10, t28);
			append_dev(div10, p10);
			append_dev(p10, t29);
			append_dev(body, t30);
			append_dev(body, a4);
			append_dev(a4, div14);
			append_dev(div14, div12);
			append_dev(div12, h14);
			append_dev(h14, t31);
			append_dev(div14, t32);
			append_dev(div14, div13);
			append_dev(div13, p11);
			append_dev(p11, t33);
			append_dev(div13, t34);
			append_dev(div13, p12);
			append_dev(p12, t35);
			append_dev(body, t36);
			append_dev(body, a5);
			append_dev(a5, div17);
			append_dev(div17, div15);
			append_dev(div15, h15);
			append_dev(h15, t37);
			append_dev(div17, t38);
			append_dev(div17, div16);
			append_dev(div16, p13);
			append_dev(p13, t39);
			append_dev(div16, t40);
			append_dev(div16, p14);
			append_dev(p14, t41);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuNTI3ZmIyNWIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
