import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.00856757.js';

/* src/routes/contactMe.svelte generated by Svelte v3.18.2 */

const file = "src/routes/contactMe.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let form;
	let div;
	let h1;
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
			h1 = element("h1");
			t1 = text("Want to speak to me about Dev stuff?");
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
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Want to speak to me about Dev stuff?");
			h1_nodes.forEach(detach_dev);
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
			attr_dev(h1, "class", "svelte-1xrnza6");
			add_location(h1, file, 102, 6, 2803);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name");
			input0.required = true;
			attr_dev(input0, "class", "svelte-1xrnza6");
			add_location(input0, file, 104, 8, 2871);
			attr_dev(label0, "class", "svelte-1xrnza6");
			add_location(label0, file, 103, 6, 2855);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "placeholder", "Email Address");
			input1.required = true;
			attr_dev(input1, "class", "svelte-1xrnza6");
			add_location(input1, file, 107, 8, 2958);
			attr_dev(label1, "class", "svelte-1xrnza6");
			add_location(label1, file, 106, 6, 2942);
			attr_dev(textarea, "type", "text");
			attr_dev(textarea, "placeholder", "Say Hi");
			textarea.required = true;
			attr_dev(textarea, "class", "svelte-1xrnza6");
			add_location(textarea, file, 110, 8, 3055);
			attr_dev(label2, "class", "svelte-1xrnza6");
			add_location(label2, file, 109, 6, 3039);
			attr_dev(button, "class", "red svelte-1xrnza6");
			attr_dev(button, "type", "submit");
			button.value = "Submit";
			add_location(button, file, 112, 6, 3131);
			attr_dev(div, "class", "formTitle svelte-1xrnza6");
			add_location(div, file, 101, 4, 2773);
			attr_dev(form, "action", "https://formspree.io/im.cooperviktor@gmail.com");
			attr_dev(form, "method", "POST");
			attr_dev(form, "class", "svelte-1xrnza6");
			add_location(form, file, 100, 2, 2692);
			attr_dev(body, "class", "formContainer svelte-1xrnza6");
			add_location(body, file, 99, 0, 2661);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, form);
			append_dev(form, div);
			append_dev(div, h1);
			append_dev(h1, t1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdE1lLmIyYzEyMjQ0LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
