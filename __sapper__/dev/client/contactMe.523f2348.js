import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.a447ddf6.js';

/* src/routes/contactMe.svelte generated by Svelte v3.18.2 */

const file = "src/routes/contactMe.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let form;
	let div;
	let h2;
	let t1;
	let t2;
	let label0;
	let input0;
	let t3;
	let label1;
	let input1;
	let t4;
	let label2;
	let textarea;
	let t5;
	let button;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			form = element("form");
			div = element("div");
			h2 = element("h2");
			t1 = text("Want to speak to me about dev stuff?");
			t2 = space();
			label0 = element("label");
			input0 = element("input");
			t3 = space();
			label1 = element("label");
			input1 = element("input");
			t4 = space();
			label2 = element("label");
			textarea = element("textarea");
			t5 = space();
			button = element("button");
			t6 = text("Send Message");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-s20oyr\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			form = claim_element(body_nodes, "FORM", { action: true, method: true, class: true });
			var form_nodes = children(form);
			div = claim_element(form_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Want to speak to me about dev stuff?");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			label0 = claim_element(div_nodes, "LABEL", { class: true });
			var label0_nodes = children(label0);

			input0 = claim_element(label0_nodes, "INPUT", {
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			label0_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			label1 = claim_element(div_nodes, "LABEL", { class: true });
			var label1_nodes = children(label1);

			input1 = claim_element(label1_nodes, "INPUT", {
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			label1_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			label2 = claim_element(div_nodes, "LABEL", { class: true });
			var label2_nodes = children(label2);

			textarea = claim_element(label2_nodes, "TEXTAREA", {
				type: true,
				placeholder: true,
				required: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			label2_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true, type: true, value: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Send Message");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contact Me";
			attr_dev(h2, "class", "svelte-2odk4l");
			add_location(h2, file, 103, 6, 2850);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			attr_dev(input0, "class", "svelte-2odk4l");
			add_location(input0, file, 105, 8, 2918);
			attr_dev(label0, "class", "svelte-2odk4l");
			add_location(label0, file, 104, 6, 2902);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "placeholder", "Email Address");
			input1.required = true;
			attr_dev(input1, "class", "svelte-2odk4l");
			add_location(input1, file, 108, 8, 3005);
			attr_dev(label1, "class", "svelte-2odk4l");
			add_location(label1, file, 107, 6, 2989);
			attr_dev(textarea, "type", "text");
			attr_dev(textarea, "placeholder", "Say Hi");
			textarea.required = true;
			attr_dev(textarea, "class", "svelte-2odk4l");
			add_location(textarea, file, 111, 8, 3102);
			attr_dev(label2, "class", "svelte-2odk4l");
			add_location(label2, file, 110, 6, 3086);
			attr_dev(button, "class", "red svelte-2odk4l");
			attr_dev(button, "type", "submit");
			button.value = "Submit";
			add_location(button, file, 113, 6, 3178);
			attr_dev(div, "class", "formTitle svelte-2odk4l");
			add_location(div, file, 102, 4, 2820);
			attr_dev(form, "action", "https://formspree.io/im.cooperviktor@gmail.com");
			attr_dev(form, "method", "POST");
			attr_dev(form, "class", "svelte-2odk4l");
			add_location(form, file, 101, 2, 2739);
			attr_dev(body, "class", "formContainer svelte-2odk4l");
			add_location(body, file, 100, 0, 2708);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, form);
			append_dev(form, div);
			append_dev(div, h2);
			append_dev(h2, t1);
			append_dev(div, t2);
			append_dev(div, label0);
			append_dev(label0, input0);
			append_dev(div, t3);
			append_dev(div, label1);
			append_dev(label1, input1);
			append_dev(div, t4);
			append_dev(div, label2);
			append_dev(label2, textarea);
			append_dev(div, t5);
			append_dev(div, button);
			append_dev(button, t6);
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

class ContactMe extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ContactMe",
			options,
			id: create_fragment.name
		});
	}
}

export default ContactMe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdE1lLjUyM2YyMzQ4LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
