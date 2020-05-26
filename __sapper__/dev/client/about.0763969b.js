import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks, r as globals } from './client.96dc3811.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */

const { document: document_1 } = globals;
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let canvas_1;
	let t1;
	let br0;
	let t2;
	let br1;
	let t3;
	let br2;
	let t4;
	let h10;
	let t5;
	let t6;
	let br3;
	let t7;
	let h11;
	let t8;
	let t9;
	let br4;
	let t10;
	let h12;
	let t11;
	let t12;
	let br5;
	let t13;
	let h13;
	let t14;
	let t15;
	let br6;
	let t16;
	let h14;
	let t17;
	let t18;
	let br7;
	let t19;
	let h15;
	let t20;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			canvas_1 = element("canvas");
			t1 = space();
			br0 = element("br");
			t2 = space();
			br1 = element("br");
			t3 = space();
			br2 = element("br");
			t4 = space();
			h10 = element("h1");
			t5 = text("This");
			t6 = space();
			br3 = element("br");
			t7 = space();
			h11 = element("h1");
			t8 = text("sexy");
			t9 = space();
			br4 = element("br");
			t10 = space();
			h12 = element("h1");
			t11 = text("page");
			t12 = space();
			br5 = element("br");
			t13 = space();
			h13 = element("h1");
			t14 = text("is");
			t15 = space();
			br6 = element("br");
			t16 = space();
			h14 = element("h1");
			t17 = text("coming");
			t18 = space();
			br7 = element("br");
			t19 = space();
			h15 = element("h1");
			t20 = text("very soon");
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
			br0 = claim_element(body_nodes, "BR", { class: true });
			t2 = claim_space(body_nodes);
			br1 = claim_element(body_nodes, "BR", { class: true });
			t3 = claim_space(body_nodes);
			br2 = claim_element(body_nodes, "BR", { class: true });
			t4 = claim_space(body_nodes);
			h10 = claim_element(body_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t5 = claim_text(h10_nodes, "This");
			h10_nodes.forEach(detach_dev);
			t6 = claim_space(body_nodes);
			br3 = claim_element(body_nodes, "BR", { class: true });
			t7 = claim_space(body_nodes);
			h11 = claim_element(body_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t8 = claim_text(h11_nodes, "sexy");
			h11_nodes.forEach(detach_dev);
			t9 = claim_space(body_nodes);
			br4 = claim_element(body_nodes, "BR", { class: true });
			t10 = claim_space(body_nodes);
			h12 = claim_element(body_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t11 = claim_text(h12_nodes, "page");
			h12_nodes.forEach(detach_dev);
			t12 = claim_space(body_nodes);
			br5 = claim_element(body_nodes, "BR", { class: true });
			t13 = claim_space(body_nodes);
			h13 = claim_element(body_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t14 = claim_text(h13_nodes, "is");
			h13_nodes.forEach(detach_dev);
			t15 = claim_space(body_nodes);
			br6 = claim_element(body_nodes, "BR", { class: true });
			t16 = claim_space(body_nodes);
			h14 = claim_element(body_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t17 = claim_text(h14_nodes, "coming");
			h14_nodes.forEach(detach_dev);
			t18 = claim_space(body_nodes);
			br7 = claim_element(body_nodes, "BR", { class: true });
			t19 = claim_space(body_nodes);
			h15 = claim_element(body_nodes, "H1", { class: true });
			var h15_nodes = children(h15);
			t20 = claim_text(h15_nodes, "very soon");
			h15_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "About";
			attr_dev(canvas_1, "id", "canvas");
			attr_dev(canvas_1, "class", "svelte-ogczsn");
			add_location(canvas_1, file, 191, 1, 4078);
			attr_dev(br0, "class", "svelte-ogczsn");
			add_location(br0, file, 192, 1, 4130);
			attr_dev(br1, "class", "svelte-ogczsn");
			add_location(br1, file, 193, 1, 4138);
			attr_dev(br2, "class", "svelte-ogczsn");
			add_location(br2, file, 194, 1, 4146);
			attr_dev(h10, "class", "svelte-ogczsn");
			add_location(h10, file, 195, 1, 4154);
			attr_dev(br3, "class", "svelte-ogczsn");
			add_location(br3, file, 196, 1, 4169);
			attr_dev(h11, "class", "svelte-ogczsn");
			add_location(h11, file, 197, 1, 4177);
			attr_dev(br4, "class", "svelte-ogczsn");
			add_location(br4, file, 198, 1, 4192);
			attr_dev(h12, "class", "svelte-ogczsn");
			add_location(h12, file, 199, 1, 4200);
			attr_dev(br5, "class", "svelte-ogczsn");
			add_location(br5, file, 200, 1, 4215);
			attr_dev(h13, "class", "svelte-ogczsn");
			add_location(h13, file, 201, 1, 4223);
			attr_dev(br6, "class", "svelte-ogczsn");
			add_location(br6, file, 202, 1, 4236);
			attr_dev(h14, "class", "svelte-ogczsn");
			add_location(h14, file, 203, 1, 4244);
			attr_dev(br7, "class", "svelte-ogczsn");
			add_location(br7, file, 204, 1, 4261);
			attr_dev(h15, "class", "svelte-ogczsn");
			add_location(h15, file, 205, 1, 4269);
			attr_dev(body, "class", "svelte-ogczsn");
			add_location(body, file, 190, 0, 4070);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, canvas_1);
			/*canvas_1_binding*/ ctx[1](canvas_1);
			append_dev(body, t1);
			append_dev(body, br0);
			append_dev(body, t2);
			append_dev(body, br1);
			append_dev(body, t3);
			append_dev(body, br2);
			append_dev(body, t4);
			append_dev(body, h10);
			append_dev(h10, t5);
			append_dev(body, t6);
			append_dev(body, br3);
			append_dev(body, t7);
			append_dev(body, h11);
			append_dev(h11, t8);
			append_dev(body, t9);
			append_dev(body, br4);
			append_dev(body, t10);
			append_dev(body, h12);
			append_dev(h12, t11);
			append_dev(body, t12);
			append_dev(body, br5);
			append_dev(body, t13);
			append_dev(body, h13);
			append_dev(h13, t14);
			append_dev(body, t15);
			append_dev(body, br6);
			append_dev(body, t16);
			append_dev(body, h14);
			append_dev(h14, t17);
			append_dev(body, t18);
			append_dev(body, br7);
			append_dev(body, t19);
			append_dev(body, h15);
			append_dev(h15, t20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuMDc2Mzk2OWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0bGV0IGZyYW1lO1xuXHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuXHRcdGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXHRcdH1cblxuXHRcdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHZhciBYID0gKGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcblx0XHR2YXIgWSA9IChjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR2YXIgbW91c2VYID0gbnVsbDtcblx0XHR2YXIgbW91c2VZID0gbnVsbDtcblxuXHRcdHZhciBwYXJ0aWNsZU51bSA9IDE1MDtcblx0XHR2YXIgcGFydGljbGVzID0gW107XG5cdFx0dmFyIGNvbG9ycyA9IFtcblx0XHRcdFwicmdiKDE1NywgMTk1LCAyMjYpXCIsXG5cdFx0XHRcInJnYigxNTcsIDIxMCwgMjE2KVwiLFxuXHRcdFx0XCJyZ2IoMjU1LCAxODEsIDIwNClcIixcblx0XHRcdFwicmdiKDIyNiwgMTM3LCAyMTkpXCIsXG5cdFx0XTtcblxuXHRcdGlmIChYIDwgNzY4KSB7XG5cdFx0XHRwYXJ0aWNsZU51bSA9IDUwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIFBhcnRpY2xlKGN0eCwgeCwgeSwgcikge1xuXHRcdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0XHR0aGlzLmluaXQoeCwgeSwgcik7XG5cdFx0fVxuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0dGhpcy54MSA9IHRoaXMueDtcblx0XHRcdHRoaXMueTEgPSB0aGlzLnk7XG5cdFx0XHR0aGlzLnIgPSByO1xuXHRcdFx0dGhpcy52ID0ge1xuXHRcdFx0XHR4OiByYW5kKC0yLCAyKSAqIE1hdGgucmFuZG9tKCksXG5cdFx0XHRcdHk6IHJhbmQoLTIsIDIpICogTWF0aC5yYW5kb20oKSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLmMgPSB7XG5cdFx0XHRcdGNpcmNsZTogY29sb3JzW3JhbmQoMCwgY29sb3JzLmxlbmd0aCAtIDEpXSxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jLmNpcmNsZTtcblx0XHRcdGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHRcdGN0eC5maWxsKCk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMudi54O1xuXHRcdFx0dGhpcy55ICs9IHRoaXMudi55O1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLm5lYXJQYXJ0aWNsZSA9IGZ1bmN0aW9uIChpKSB7XG5cdFx0XHR2YXIgaiA9IGk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaiAhPT0gaSkge1xuXHRcdFx0XHRcdHZhciB4ID0gdGhpcy54IC0gcGFydGljbGVzW2ldLng7XG5cdFx0XHRcdFx0dmFyIHkgPSB0aGlzLnkgLSBwYXJ0aWNsZXNbaV0ueTtcblx0XHRcdFx0XHR2YXIgZCA9IHggKiB4ICsgeSAqIHk7XG5cdFx0XHRcdFx0dmFyIGRpc3QgPSBNYXRoLmZsb29yKE1hdGguc3FydChkKSk7XG5cdFx0XHRcdFx0aWYgKGRpc3QgPCAxMDApIHtcblx0XHRcdFx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRcdFx0XHRjdHguZ2xvYmFsQWxwaGEgPSAwLjM7XG5cdFx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBcInJnYigxNjEsIDIxNCwgMjI2KVwiO1xuXHRcdFx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0XHRcdFx0Y3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cdFx0XHRcdFx0XHRjdHgubGluZVRvKHBhcnRpY2xlc1tpXS54LCBwYXJ0aWNsZXNbaV0ueSk7XG5cdFx0XHRcdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0XHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLndyYXBQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0aGlzLnggLSB0aGlzLnIgPCAwKSB7XG5cdFx0XHRcdHRoaXMudi54ICo9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMueCArIHRoaXMuciA+IFgpIHtcblx0XHRcdFx0dGhpcy52LnggKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy55IC0gdGhpcy5yIDwgMCkge1xuXHRcdFx0XHR0aGlzLnYueSAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnkgKyB0aGlzLnIgPiBZKSB7XG5cdFx0XHRcdHRoaXMudi55ICo9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMueCA9IHJhbmQoMCArIDUsIFggLSA1KTtcblx0XHRcdHRoaXMueSA9IHJhbmQoMCArIDUsIFkgLSA1KTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaSkge1xuXHRcdFx0dGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXHRcdFx0dGhpcy53cmFwUG9zaXRpb24oKTtcblx0XHRcdHRoaXMubmVhclBhcnRpY2xlKGkpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGljbGVOdW07IGkrKykge1xuXHRcdFx0dmFyIHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKFxuXHRcdFx0XHRjdHgsXG5cdFx0XHRcdHJhbmQoMCArIDUsIFggLSA1KSxcblx0XHRcdFx0cmFuZCgwICsgNSwgWSAtIDUpLFxuXHRcdFx0XHQ1XG5cdFx0XHQpO1xuXHRcdFx0cGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKlxuICAgICAgXHRSZW5kZXJcbiAgICBcdCoqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBYLCBZKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHBhcnRpY2xlc1tpXS5yZW5kZXIoaSk7XG5cdFx0XHR9XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblx0XHR9XG5cblx0XHRyZW5kZXIoKTtcblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKlxuXHRcdEV2ZW50XG4gICAgXHQqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXHRcdFx0WCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0WSA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwYXJ0aWNsZXNbaV0ucmVzaXplKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0b25SZXNpemUoKTtcblx0XHR9KTtcblxuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0bW91c2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRtb3VzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdHZhciBudW0gPSByYW5kKDEsIDEwKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xuXHRcdFx0XHRcdHZhciBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShcblx0XHRcdFx0XHRcdGN0eCxcblx0XHRcdFx0XHRcdHJhbmQobW91c2VYIC0gNSwgbW91c2VYICsgNSksXG5cdFx0XHRcdFx0XHRyYW5kKG1vdXNlWSAtIDUsIG1vdXNlWSArIDUpLFxuXHRcdFx0XHRcdFx0NVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHR9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4uL3N0eWxlcy90aGVtZS5zY3NzXCI7XG5cdCoge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuXHR9XG5cdGNhbnZhcyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNlOGVmZjM7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keT5cblx0PGNhbnZhcyBpZD1cImNhbnZhc1wiIGJpbmQ6dGhpcz1cIntjYW52YXN9XCI+PC9jYW52YXM+XG5cdDxiciAvPlxuXHQ8YnIgLz5cblx0PGJyIC8+XG5cdDxoMT5UaGlzPC9oMT5cblx0PGJyIC8+XG5cdDxoMT5zZXh5PC9oMT5cblx0PGJyIC8+XG5cdDxoMT5wYWdlPC9oMT5cblx0PGJyIC8+XG5cdDxoMT5pczwvaDE+XG5cdDxiciAvPlxuXHQ8aDE+Y29taW5nPC9oMT5cblx0PGJyIC8+XG5cdDxoMT52ZXJ5IHNvb248L2gxPlxuPC9ib2R5PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBR0ssTUFBTTs7Q0FDVixPQUFPO01BRUYsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUTs7V0FFcEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHO1VBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUc7OztNQUdwRCxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJO01BQzVCLENBQUMsR0FBSSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVO01BQ3JDLENBQUMsR0FBSSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXO01BQ3ZDLE1BQU0sR0FBRyxJQUFJO01BQ2IsTUFBTSxHQUFHLElBQUk7TUFFYixXQUFXLEdBQUcsR0FBRztNQUNqQixTQUFTOztNQUNULE1BQU07R0FDVCxvQkFBb0I7R0FDcEIsb0JBQW9CO0dBQ3BCLG9CQUFvQjtHQUNwQixvQkFBb0I7OztNQUdqQixDQUFDLEdBQUcsR0FBRztHQUNWLFdBQVcsR0FBRyxFQUFFOzs7V0FHUixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7R0FDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7O0VBRWxCLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUMxQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7R0FDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7R0FDVixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0dBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7R0FDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDOztHQUNWLElBQUksQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNO0lBQzVCLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTTs7O0dBRTdCLElBQUksQ0FBQyxDQUFDO0lBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQzs7OztFQUcxQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUk7T0FDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO0dBQ2xCLEdBQUcsQ0FBQyxJQUFJO0dBQ1IsR0FBRyxDQUFDLFNBQVM7R0FDYixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTTtHQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLO0dBQ3JELEdBQUcsQ0FBQyxJQUFJO0dBQ1IsR0FBRyxDQUFDLE9BQU87OztFQUVaLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYztHQUNoQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0VBRW5CLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxhQUFhLENBQUM7T0FDeEMsQ0FBQyxHQUFHLENBQUM7O1lBQ0EsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLENBQUMsS0FBSyxDQUFDO1NBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1NBQzdCLElBQUksR0FBRyxHQUFHO01BQ2IsR0FBRyxDQUFDLElBQUk7TUFDUixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUc7TUFDckIsR0FBRyxDQUFDLFdBQVcsR0FBRyxvQkFBb0I7TUFDdEMsR0FBRyxDQUFDLFNBQVM7TUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDekMsR0FBRyxDQUFDLE1BQU07TUFDVixHQUFHLENBQUMsT0FBTzs7Ozs7O0VBS2YsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZO09BQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7OztPQUVYLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7OztPQUVYLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7OztPQUVYLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Ozs7RUFHaEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO0dBQ3hCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7R0FDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQzs7O0VBRTNCLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxhQUFhLENBQUM7R0FDdEMsSUFBSSxDQUFDLGNBQWM7R0FDbkIsSUFBSSxDQUFDLFlBQVk7R0FDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ25CLElBQUksQ0FBQyxJQUFJOzs7V0FHRCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQztPQUM3QixRQUFRLE9BQU8sUUFBUSxDQUMxQixHQUFHLEVBQ0gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FDakIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FDakIsQ0FBQztHQUVGLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTs7Ozs7O1dBT2YsTUFBTTtHQUNkLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7WUFDZixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7O0dBRXRCLHFCQUFxQixDQUFDLE1BQU07OztFQUc3QixNQUFNOzs7OztXQU1HLFFBQVE7R0FDaEIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVU7R0FDcEMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVc7O1lBQzdCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU07Ozs7RUFJckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7R0FDL0IsUUFBUTs7O0VBR1QsTUFBTSxDQUFDLGdCQUFnQjtHQUN0QixPQUFPO2FBQ0csQ0FBQztJQUNWLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTztJQUNsQixNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU87UUFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFOzthQUNYLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ3JCLFFBQVEsT0FBTyxRQUFRLENBQzFCLEdBQUcsRUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxHQUMzQixDQUFDO0tBRUYsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFROzs7R0FHekIsS0FBSzs7Ozs7O21CQTJCeUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
