import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks, r as globals } from './client.fa856208.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */

const { document: document_1 } = globals;
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let canvas_1;
	let t1;
	let div2;
	let div0;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let p3;
	let t8;
	let t9;
	let p4;
	let t10;
	let t11;
	let p5;
	let t12;
	let t13;
	let div1;
	let t14;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			canvas_1 = element("canvas");
			t1 = space();
			div2 = element("div");
			div0 = element("div");
			p0 = element("p");
			t2 = text("Welcome fam!");
			t3 = space();
			p1 = element("p");
			t4 = text("This is a story all about how my life got flipped and turned\n\t\t\t\tupside down, I'd like to take a minute, just sit right there,\n\t\t\t\tI'll tell you how I became a dev in a town called Melbin.");
			t5 = space();
			p2 = element("p");
			t6 = text("Recently, I realised, after 7 years working for Westpac in\n\t\t\t\tBanking and Customer service roles that I just didn’t belong in\n\t\t\t\tthat industry anymore.");
			t7 = space();
			p3 = element("p");
			t8 = text("So I packed my bags, moved from Sydney to Melbourne, quit\n\t\t\t\tWestpac, and completed in a Diploma of IT on Full-Stack web\n\t\t\t\tdevelopment and I’m now looking for that team looking for an\n\t\t\t\teager learner.");
			t9 = space();
			p4 = element("p");
			t10 = text("While I am language agnostic, I gravitate towards all things\n\t\t\t\tJavaScript, but having spent some time in .NET and C# I\n\t\t\t\tgravitate towards the developer-friendly environment.");
			t11 = space();
			p5 = element("p");
			t12 = text("My passions lie within the user experience, and it motivates me\n\t\t\t\tto design and build great experiences, with my background of\n\t\t\t\tuser analysis and testing I enjoy various forms of\n\t\t\t\tclient/customer interaction on ways to improve their experience\n\t\t\t\tthrough system education or system improvements.");
			t13 = space();
			div1 = element("div");
			t14 = text("socials");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			canvas_1 = claim_element(body_nodes, "CANVAS", { id: true, class: true });
			children(canvas_1).forEach(detach_dev);
			t1 = claim_space(body_nodes);
			div2 = claim_element(body_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Welcome fam!");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "This is a story all about how my life got flipped and turned\n\t\t\t\tupside down, I'd like to take a minute, just sit right there,\n\t\t\t\tI'll tell you how I became a dev in a town called Melbin.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Recently, I realised, after 7 years working for Westpac in\n\t\t\t\tBanking and Customer service roles that I just didn’t belong in\n\t\t\t\tthat industry anymore.");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "So I packed my bags, moved from Sydney to Melbourne, quit\n\t\t\t\tWestpac, and completed in a Diploma of IT on Full-Stack web\n\t\t\t\tdevelopment and I’m now looking for that team looking for an\n\t\t\t\teager learner.");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			p4 = claim_element(div0_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t10 = claim_text(p4_nodes, "While I am language agnostic, I gravitate towards all things\n\t\t\t\tJavaScript, but having spent some time in .NET and C# I\n\t\t\t\tgravitate towards the developer-friendly environment.");
			p4_nodes.forEach(detach_dev);
			t11 = claim_space(div0_nodes);
			p5 = claim_element(div0_nodes, "P", { class: true });
			var p5_nodes = children(p5);
			t12 = claim_text(p5_nodes, "My passions lie within the user experience, and it motivates me\n\t\t\t\tto design and build great experiences, with my background of\n\t\t\t\tuser analysis and testing I enjoy various forms of\n\t\t\t\tclient/customer interaction on ways to improve their experience\n\t\t\t\tthrough system education or system improvements.");
			p5_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t13 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t14 = claim_text(div1_nodes, "socials");
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "About";
			attr_dev(canvas_1, "id", "canvas");
			attr_dev(canvas_1, "class", "svelte-1d0j06d");
			add_location(canvas_1, file, 217, 1, 4525);
			attr_dev(p0, "class", "svelte-1d0j06d");
			add_location(p0, file, 220, 3, 4630);
			attr_dev(p1, "class", "svelte-1d0j06d");
			add_location(p1, file, 221, 3, 4653);
			attr_dev(p2, "class", "svelte-1d0j06d");
			add_location(p2, file, 226, 3, 4861);
			attr_dev(p3, "class", "svelte-1d0j06d");
			add_location(p3, file, 231, 3, 5034);
			attr_dev(p4, "class", "svelte-1d0j06d");
			add_location(p4, file, 237, 3, 5259);
			attr_dev(p5, "class", "svelte-1d0j06d");
			add_location(p5, file, 242, 3, 5457);
			attr_dev(div0, "class", "main svelte-1d0j06d");
			add_location(div0, file, 219, 2, 4608);
			attr_dev(div1, "class", "socials svelte-1d0j06d");
			add_location(div1, file, 250, 2, 5789);
			attr_dev(div2, "class", "grid-container svelte-1d0j06d");
			add_location(div2, file, 218, 1, 4577);
			attr_dev(body, "class", "svelte-1d0j06d");
			add_location(body, file, 216, 0, 4517);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, canvas_1);
			/*canvas_1_binding*/ ctx[1](canvas_1);
			append_dev(body, t1);
			append_dev(body, div2);
			append_dev(div2, div0);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(div0, t3);
			append_dev(div0, p1);
			append_dev(p1, t4);
			append_dev(div0, t5);
			append_dev(div0, p2);
			append_dev(p2, t6);
			append_dev(div0, t7);
			append_dev(div0, p3);
			append_dev(p3, t8);
			append_dev(div0, t9);
			append_dev(div0, p4);
			append_dev(p4, t10);
			append_dev(div0, t11);
			append_dev(div0, p5);
			append_dev(p5, t12);
			append_dev(div2, t13);
			append_dev(div2, div1);
			append_dev(div1, t14);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(body);
			/*canvas_1_binding*/ ctx[1](null);
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

function instance($$self, $$props, $$invalidate) {
	let canvas;

	// onMount runs the background
	onMount(() => {
		var canvas = document.getElementById("canvas");

		function rand(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		var ctx = canvas.getContext("2d");
		var X = canvas.width = window.innerWidth;
		var Y = canvas.height = window.innerHeight;
		var mouseX = null;
		var mouseY = null;
		var particleNum = 150;
		var particles = [];

		var colors = [
			"rgb(157, 195, 226)",
			"rgb(157, 210, 216)",
			"rgb(255, 181, 204)",
			"rgb(226, 137, 219)"
		];

		if (X < 768) {
			particleNum = 50;
		}

		function Particle(ctx, x, y, r) {
			this.ctx = ctx;
			this.init(x, y, r);
		}

		Particle.prototype.init = function (x, y, r) {
			this.x = x;
			this.y = y;
			this.x1 = this.x;
			this.y1 = this.y;
			this.r = r;

			this.v = {
				x: rand(-2, 2) * Math.random(),
				y: rand(-2, 2) * Math.random()
			};

			this.c = {
				circle: colors[rand(0, colors.length - 1)]
			};
		};

		Particle.prototype.draw = function () {
			var ctx = this.ctx;
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.c.circle;
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.restore();
		};

		Particle.prototype.updatePosition = function () {
			this.x += this.v.x;
			this.y += this.v.y;
		};

		Particle.prototype.nearParticle = function (i) {
			var j = i;

			for (var i = 0; i < particles.length; i++) {
				if (j !== i) {
					var x = this.x - particles[i].x;
					var y = this.y - particles[i].y;
					var d = x * x + y * y;
					var dist = Math.floor(Math.sqrt(d));

					if (dist < 100) {
						ctx.save();
						ctx.globalAlpha = 0.3;
						ctx.strokeStyle = "rgb(161, 214, 226)";
						ctx.beginPath();
						ctx.moveTo(this.x, this.y);
						ctx.lineTo(particles[i].x, particles[i].y);
						ctx.stroke();
						ctx.restore();
					}
				}
			}
		};

		Particle.prototype.wrapPosition = function () {
			if (this.x - this.r < 0) {
				this.v.x *= -1;
			}

			if (this.x + this.r > X) {
				this.v.x *= -1;
			}

			if (this.y - this.r < 0) {
				this.v.y *= -1;
			}

			if (this.y + this.r > Y) {
				this.v.y *= -1;
			}
		};

		Particle.prototype.resize = function () {
			this.x = rand(0 + 5, X - 5);
			this.y = rand(0 + 5, Y - 5);
		};

		Particle.prototype.render = function (i) {
			this.updatePosition();
			this.wrapPosition();
			this.nearParticle(i);
			this.draw();
		};

		for (var i = 0; i < particleNum; i++) {
			var particle = new Particle(ctx, rand(0 + 5, X - 5), rand(0 + 5, Y - 5), 5);
			particles.push(particle);
		}

		/********************
      	Render
    	********************/
		function render() {
			ctx.clearRect(0, 0, X, Y);

			for (var i = 0; i < particles.length; i++) {
				particles[i].render(i);
			}

			requestAnimationFrame(render);
		}

		render();

		/********************
Event
    	********************/
		function onResize() {
			X = canvas.width = window.innerWidth;
			Y = canvas.height = window.innerHeight;

			for (var i = 0; i < particles.length; i++) {
				particles[i].resize();
			}
		}

		window.addEventListener("resize", function () {
			onResize();
		});

		canvas.addEventListener(
			"click",
			function (e) {
				mouseX = e.clientX;
				mouseY = e.clientY;
				var num = rand(1, 10);

				for (var i = 0; i < num; i++) {
					var particle = new Particle(ctx, rand(mouseX - 5, mouseX + 5), rand(mouseY - 5, mouseY + 5), 5);
					particles.push(particle);
				}
			},
			false
		);
	});

	function canvas_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, canvas = $$value);
		});
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
	};

	return [canvas, canvas_1_binding];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNjE0YTZlZDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0bGV0IGNhbnZhcztcblx0Ly8gb25Nb3VudCBydW5zIHRoZSBiYWNrZ3JvdW5kXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdGxldCBmcmFtZTtcblx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cblx0XHRmdW5jdGlvbiByYW5kKG1pbiwgbWF4KSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcblx0XHR9XG5cblx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHR2YXIgWCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5cdFx0dmFyIFkgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dmFyIG1vdXNlWCA9IG51bGw7XG5cdFx0dmFyIG1vdXNlWSA9IG51bGw7XG5cblx0XHR2YXIgcGFydGljbGVOdW0gPSAxNTA7XG5cdFx0dmFyIHBhcnRpY2xlcyA9IFtdO1xuXHRcdHZhciBjb2xvcnMgPSBbXG5cdFx0XHRcInJnYigxNTcsIDE5NSwgMjI2KVwiLFxuXHRcdFx0XCJyZ2IoMTU3LCAyMTAsIDIxNilcIixcblx0XHRcdFwicmdiKDI1NSwgMTgxLCAyMDQpXCIsXG5cdFx0XHRcInJnYigyMjYsIDEzNywgMjE5KVwiLFxuXHRcdF07XG5cblx0XHRpZiAoWCA8IDc2OCkge1xuXHRcdFx0cGFydGljbGVOdW0gPSA1MDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBQYXJ0aWNsZShjdHgsIHgsIHksIHIpIHtcblx0XHRcdHRoaXMuY3R4ID0gY3R4O1xuXHRcdFx0dGhpcy5pbml0KHgsIHksIHIpO1xuXHRcdH1cblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XG5cdFx0XHR0aGlzLnggPSB4O1xuXHRcdFx0dGhpcy55ID0geTtcblx0XHRcdHRoaXMueDEgPSB0aGlzLng7XG5cdFx0XHR0aGlzLnkxID0gdGhpcy55O1xuXHRcdFx0dGhpcy5yID0gcjtcblx0XHRcdHRoaXMudiA9IHtcblx0XHRcdFx0eDogcmFuZCgtMiwgMikgKiBNYXRoLnJhbmRvbSgpLFxuXHRcdFx0XHR5OiByYW5kKC0yLCAyKSAqIE1hdGgucmFuZG9tKCksXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5jID0ge1xuXHRcdFx0XHRjaXJjbGU6IGNvbG9yc1tyYW5kKDAsIGNvbG9ycy5sZW5ndGggLSAxKV0sXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYy5jaXJjbGU7XG5cdFx0XHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdFx0XHRjdHguZmlsbCgpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLnYueDtcblx0XHRcdHRoaXMueSArPSB0aGlzLnYueTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5uZWFyUGFydGljbGUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdFx0dmFyIGogPSBpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGogIT09IGkpIHtcblx0XHRcdFx0XHR2YXIgeCA9IHRoaXMueCAtIHBhcnRpY2xlc1tpXS54O1xuXHRcdFx0XHRcdHZhciB5ID0gdGhpcy55IC0gcGFydGljbGVzW2ldLnk7XG5cdFx0XHRcdFx0dmFyIGQgPSB4ICogeCArIHkgKiB5O1xuXHRcdFx0XHRcdHZhciBkaXN0ID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoZCkpO1xuXHRcdFx0XHRcdGlmIChkaXN0IDwgMTAwKSB7XG5cdFx0XHRcdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMC4zO1xuXHRcdFx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoMTYxLCAyMTQsIDIyNilcIjtcblx0XHRcdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdFx0XHRcdGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXHRcdFx0XHRcdFx0Y3R4LmxpbmVUbyhwYXJ0aWNsZXNbaV0ueCwgcGFydGljbGVzW2ldLnkpO1xuXHRcdFx0XHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdFx0XHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS53cmFwUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodGhpcy54IC0gdGhpcy5yIDwgMCkge1xuXHRcdFx0XHR0aGlzLnYueCAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnggKyB0aGlzLnIgPiBYKSB7XG5cdFx0XHRcdHRoaXMudi54ICo9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMueSAtIHRoaXMuciA8IDApIHtcblx0XHRcdFx0dGhpcy52LnkgKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy55ICsgdGhpcy5yID4gWSkge1xuXHRcdFx0XHR0aGlzLnYueSAqPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnggPSByYW5kKDAgKyA1LCBYIC0gNSk7XG5cdFx0XHR0aGlzLnkgPSByYW5kKDAgKyA1LCBZIC0gNSk7XG5cdFx0fTtcblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGkpIHtcblx0XHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0XHRcdHRoaXMud3JhcFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLm5lYXJQYXJ0aWNsZShpKTtcblx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdH07XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyBpKyspIHtcblx0XHRcdHZhciBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShcblx0XHRcdFx0Y3R4LFxuXHRcdFx0XHRyYW5kKDAgKyA1LCBYIC0gNSksXG5cdFx0XHRcdHJhbmQoMCArIDUsIFkgLSA1KSxcblx0XHRcdFx0NVxuXHRcdFx0KTtcblx0XHRcdHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKipcbiAgICAgIFx0UmVuZGVyXG4gICAgXHQqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgWCwgWSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwYXJ0aWNsZXNbaV0ucmVuZGVyKGkpO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCk7XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKipcblx0XHRFdmVudFxuICAgIFx0KioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRmdW5jdGlvbiBvblJlc2l6ZSgpIHtcblx0XHRcdFggPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdFkgPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cGFydGljbGVzW2ldLnJlc2l6ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdG9uUmVzaXplKCk7XG5cdFx0fSk7XG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY2xpY2tcIixcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0bW91c2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHR2YXIgbnVtID0gcmFuZCgxLCAxMCk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgcGFydGljbGUgPSBuZXcgUGFydGljbGUoXG5cdFx0XHRcdFx0XHRjdHgsXG5cdFx0XHRcdFx0XHRyYW5kKG1vdXNlWCAtIDUsIG1vdXNlWCArIDUpLFxuXHRcdFx0XHRcdFx0cmFuZChtb3VzZVkgLSA1LCBtb3VzZVkgKyA1KSxcblx0XHRcdFx0XHRcdDVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuLi9zdHlsZXMvdGhlbWUuc2Nzc1wiO1xuXHQqIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcblx0fVxuXHQvKiBDYW52YXM6IGZvciB0aGUgYmFja2dyb3VuZCAqL1xuXHRjYW52YXMge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kOiAjZThlZmYzO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHR6LWluZGV4OiAtMTtcblx0fVxuXHRib2R5IHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0Lm1haW4ge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuZ3JpZC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQubWFpbiB7XG5cdFx0Ym9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG5cdFx0Z3JpZC1hcmVhOiBtYWluO1xuXHR9XG5cdC5zb2NpYWxzIHtcblx0XHRib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcblx0XHRncmlkLWFyZWE6IHNvY2lhbHM7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkFib3V0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxib2R5PlxuXHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgYmluZDp0aGlzPVwie2NhbnZhc31cIj48L2NhbnZhcz5cblx0PGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cIm1haW5cIj5cblx0XHRcdDxwPldlbGNvbWUgZmFtITwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRUaGlzIGlzIGEgc3RvcnkgYWxsIGFib3V0IGhvdyBteSBsaWZlIGdvdCBmbGlwcGVkIGFuZCB0dXJuZWRcblx0XHRcdFx0dXBzaWRlIGRvd24sIEknZCBsaWtlIHRvIHRha2UgYSBtaW51dGUsIGp1c3Qgc2l0IHJpZ2h0IHRoZXJlLFxuXHRcdFx0XHRJJ2xsIHRlbGwgeW91IGhvdyBJIGJlY2FtZSBhIGRldiBpbiBhIHRvd24gY2FsbGVkIE1lbGJpbi5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRSZWNlbnRseSwgSSByZWFsaXNlZCwgYWZ0ZXIgNyB5ZWFycyB3b3JraW5nIGZvciBXZXN0cGFjIGluXG5cdFx0XHRcdEJhbmtpbmcgYW5kIEN1c3RvbWVyIHNlcnZpY2Ugcm9sZXMgdGhhdCBJIGp1c3QgZGlkbuKAmXQgYmVsb25nIGluXG5cdFx0XHRcdHRoYXQgaW5kdXN0cnkgYW55bW9yZS5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRTbyBJIHBhY2tlZCBteSBiYWdzLCBtb3ZlZCBmcm9tIFN5ZG5leSB0byBNZWxib3VybmUsIHF1aXRcblx0XHRcdFx0V2VzdHBhYywgYW5kIGNvbXBsZXRlZCBpbiBhIERpcGxvbWEgb2YgSVQgb24gRnVsbC1TdGFjayB3ZWJcblx0XHRcdFx0ZGV2ZWxvcG1lbnQgYW5kIEnigJltIG5vdyBsb29raW5nIGZvciB0aGF0IHRlYW0gbG9va2luZyBmb3IgYW5cblx0XHRcdFx0ZWFnZXIgbGVhcm5lci5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRXaGlsZSBJIGFtIGxhbmd1YWdlIGFnbm9zdGljLCBJIGdyYXZpdGF0ZSB0b3dhcmRzIGFsbCB0aGluZ3Ncblx0XHRcdFx0SmF2YVNjcmlwdCwgYnV0IGhhdmluZyBzcGVudCBzb21lIHRpbWUgaW4gLk5FVCBhbmQgQyMgSVxuXHRcdFx0XHRncmF2aXRhdGUgdG93YXJkcyB0aGUgZGV2ZWxvcGVyLWZyaWVuZGx5IGVudmlyb25tZW50LlxuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdE15IHBhc3Npb25zIGxpZSB3aXRoaW4gdGhlIHVzZXIgZXhwZXJpZW5jZSwgYW5kIGl0IG1vdGl2YXRlcyBtZVxuXHRcdFx0XHR0byBkZXNpZ24gYW5kIGJ1aWxkIGdyZWF0IGV4cGVyaWVuY2VzLCB3aXRoIG15IGJhY2tncm91bmQgb2Zcblx0XHRcdFx0dXNlciBhbmFseXNpcyBhbmQgdGVzdGluZyBJIGVuam95IHZhcmlvdXMgZm9ybXMgb2Zcblx0XHRcdFx0Y2xpZW50L2N1c3RvbWVyIGludGVyYWN0aW9uIG9uIHdheXMgdG8gaW1wcm92ZSB0aGVpciBleHBlcmllbmNlXG5cdFx0XHRcdHRocm91Z2ggc3lzdGVtIGVkdWNhdGlvbiBvciBzeXN0ZW0gaW1wcm92ZW1lbnRzLlxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+c29jaWFsczwvZGl2PlxuXHQ8L2Rpdj5cbjwvYm9keT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdLLE1BQU07OztDQUVWLE9BQU87TUFFRixNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFROztXQUVwQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7VUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRzs7O01BR3BELEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7TUFDNUIsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVU7TUFDckMsQ0FB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
