import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks, r as globals } from './client.25828081.js';

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
	let h10;
	let t4;
	let t5;
	let br2;
	let t6;
	let h11;
	let t7;
	let t8;
	let br3;
	let t9;
	let h12;
	let t10;
	let t11;
	let br4;
	let t12;
	let h13;
	let t13;
	let t14;
	let br5;
	let t15;
	let h14;
	let t16;
	let t17;
	let br6;
	let t18;
	let h15;
	let t19;

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
			h10 = element("h1");
			t4 = text("This");
			t5 = space();
			br2 = element("br");
			t6 = space();
			h11 = element("h1");
			t7 = text("sexy");
			t8 = space();
			br3 = element("br");
			t9 = space();
			h12 = element("h1");
			t10 = text("page");
			t11 = space();
			br4 = element("br");
			t12 = space();
			h13 = element("h1");
			t13 = text("is");
			t14 = space();
			br5 = element("br");
			t15 = space();
			h14 = element("h1");
			t16 = text("coming");
			t17 = space();
			br6 = element("br");
			t18 = space();
			h15 = element("h1");
			t19 = text("very soon");
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
			h10 = claim_element(body_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t4 = claim_text(h10_nodes, "This");
			h10_nodes.forEach(detach_dev);
			t5 = claim_space(body_nodes);
			br2 = claim_element(body_nodes, "BR", { class: true });
			t6 = claim_space(body_nodes);
			h11 = claim_element(body_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t7 = claim_text(h11_nodes, "sexy");
			h11_nodes.forEach(detach_dev);
			t8 = claim_space(body_nodes);
			br3 = claim_element(body_nodes, "BR", { class: true });
			t9 = claim_space(body_nodes);
			h12 = claim_element(body_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t10 = claim_text(h12_nodes, "page");
			h12_nodes.forEach(detach_dev);
			t11 = claim_space(body_nodes);
			br4 = claim_element(body_nodes, "BR", { class: true });
			t12 = claim_space(body_nodes);
			h13 = claim_element(body_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t13 = claim_text(h13_nodes, "is");
			h13_nodes.forEach(detach_dev);
			t14 = claim_space(body_nodes);
			br5 = claim_element(body_nodes, "BR", { class: true });
			t15 = claim_space(body_nodes);
			h14 = claim_element(body_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t16 = claim_text(h14_nodes, "coming");
			h14_nodes.forEach(detach_dev);
			t17 = claim_space(body_nodes);
			br6 = claim_element(body_nodes, "BR", { class: true });
			t18 = claim_space(body_nodes);
			h15 = claim_element(body_nodes, "H1", { class: true });
			var h15_nodes = children(h15);
			t19 = claim_text(h15_nodes, "very soon");
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
			attr_dev(h10, "class", "svelte-ogczsn");
			add_location(h10, file, 194, 1, 4146);
			attr_dev(br2, "class", "svelte-ogczsn");
			add_location(br2, file, 195, 1, 4161);
			attr_dev(h11, "class", "svelte-ogczsn");
			add_location(h11, file, 196, 1, 4169);
			attr_dev(br3, "class", "svelte-ogczsn");
			add_location(br3, file, 197, 1, 4184);
			attr_dev(h12, "class", "svelte-ogczsn");
			add_location(h12, file, 198, 1, 4192);
			attr_dev(br4, "class", "svelte-ogczsn");
			add_location(br4, file, 199, 1, 4207);
			attr_dev(h13, "class", "svelte-ogczsn");
			add_location(h13, file, 200, 1, 4215);
			attr_dev(br5, "class", "svelte-ogczsn");
			add_location(br5, file, 201, 1, 4228);
			attr_dev(h14, "class", "svelte-ogczsn");
			add_location(h14, file, 202, 1, 4236);
			attr_dev(br6, "class", "svelte-ogczsn");
			add_location(br6, file, 203, 1, 4253);
			attr_dev(h15, "class", "svelte-ogczsn");
			add_location(h15, file, 204, 1, 4261);
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
			append_dev(body, h10);
			append_dev(h10, t4);
			append_dev(body, t5);
			append_dev(body, br2);
			append_dev(body, t6);
			append_dev(body, h11);
			append_dev(h11, t7);
			append_dev(body, t8);
			append_dev(body, br3);
			append_dev(body, t9);
			append_dev(body, h12);
			append_dev(h12, t10);
			append_dev(body, t11);
			append_dev(body, br4);
			append_dev(body, t12);
			append_dev(body, h13);
			append_dev(h13, t13);
			append_dev(body, t14);
			append_dev(body, br5);
			append_dev(body, t15);
			append_dev(body, h14);
			append_dev(h14, t16);
			append_dev(body, t17);
			append_dev(body, br6);
			append_dev(body, t18);
			append_dev(body, h15);
			append_dev(h15, t19);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuM2U3OTI0MmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0bGV0IGNhbnZhcztcblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0bGV0IGZyYW1lO1xuXHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcblxuXHRcdGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuXHRcdH1cblxuXHRcdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHZhciBYID0gKGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcblx0XHR2YXIgWSA9IChjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHR2YXIgbW91c2VYID0gbnVsbDtcblx0XHR2YXIgbW91c2VZID0gbnVsbDtcblxuXHRcdHZhciBwYXJ0aWNsZU51bSA9IDE1MDtcblx0XHR2YXIgcGFydGljbGVzID0gW107XG5cdFx0dmFyIGNvbG9ycyA9IFtcblx0XHRcdFwicmdiKDE1NywgMTk1LCAyMjYpXCIsXG5cdFx0XHRcInJnYigxNTcsIDIxMCwgMjE2KVwiLFxuXHRcdFx0XCJyZ2IoMjU1LCAxODEsIDIwNClcIixcblx0XHRcdFwicmdiKDIyNiwgMTM3LCAyMTkpXCIsXG5cdFx0XTtcblxuXHRcdGlmIChYIDwgNzY4KSB7XG5cdFx0XHRwYXJ0aWNsZU51bSA9IDUwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIFBhcnRpY2xlKGN0eCwgeCwgeSwgcikge1xuXHRcdFx0dGhpcy5jdHggPSBjdHg7XG5cdFx0XHR0aGlzLmluaXQoeCwgeSwgcik7XG5cdFx0fVxuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0dGhpcy54MSA9IHRoaXMueDtcblx0XHRcdHRoaXMueTEgPSB0aGlzLnk7XG5cdFx0XHR0aGlzLnIgPSByO1xuXHRcdFx0dGhpcy52ID0ge1xuXHRcdFx0XHR4OiByYW5kKC0yLCAyKSAqIE1hdGgucmFuZG9tKCksXG5cdFx0XHRcdHk6IHJhbmQoLTIsIDIpICogTWF0aC5yYW5kb20oKSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLmMgPSB7XG5cdFx0XHRcdGNpcmNsZTogY29sb3JzW3JhbmQoMCwgY29sb3JzLmxlbmd0aCAtIDEpXSxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjdHggPSB0aGlzLmN0eDtcblx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jLmNpcmNsZTtcblx0XHRcdGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcblx0XHRcdGN0eC5maWxsKCk7XG5cdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy54ICs9IHRoaXMudi54O1xuXHRcdFx0dGhpcy55ICs9IHRoaXMudi55O1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLm5lYXJQYXJ0aWNsZSA9IGZ1bmN0aW9uIChpKSB7XG5cdFx0XHR2YXIgaiA9IGk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaiAhPT0gaSkge1xuXHRcdFx0XHRcdHZhciB4ID0gdGhpcy54IC0gcGFydGljbGVzW2ldLng7XG5cdFx0XHRcdFx0dmFyIHkgPSB0aGlzLnkgLSBwYXJ0aWNsZXNbaV0ueTtcblx0XHRcdFx0XHR2YXIgZCA9IHggKiB4ICsgeSAqIHk7XG5cdFx0XHRcdFx0dmFyIGRpc3QgPSBNYXRoLmZsb29yKE1hdGguc3FydChkKSk7XG5cdFx0XHRcdFx0aWYgKGRpc3QgPCAxMDApIHtcblx0XHRcdFx0XHRcdGN0eC5zYXZlKCk7XG5cdFx0XHRcdFx0XHRjdHguZ2xvYmFsQWxwaGEgPSAwLjM7XG5cdFx0XHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBcInJnYigxNjEsIDIxNCwgMjI2KVwiO1xuXHRcdFx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0XHRcdFx0Y3R4Lm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XG5cdFx0XHRcdFx0XHRjdHgubGluZVRvKHBhcnRpY2xlc1tpXS54LCBwYXJ0aWNsZXNbaV0ueSk7XG5cdFx0XHRcdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0XHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLndyYXBQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0aGlzLnggLSB0aGlzLnIgPCAwKSB7XG5cdFx0XHRcdHRoaXMudi54ICo9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMueCArIHRoaXMuciA+IFgpIHtcblx0XHRcdFx0dGhpcy52LnggKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy55IC0gdGhpcy5yIDwgMCkge1xuXHRcdFx0XHR0aGlzLnYueSAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnkgKyB0aGlzLnIgPiBZKSB7XG5cdFx0XHRcdHRoaXMudi55ICo9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMueCA9IHJhbmQoMCArIDUsIFggLSA1KTtcblx0XHRcdHRoaXMueSA9IHJhbmQoMCArIDUsIFkgLSA1KTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaSkge1xuXHRcdFx0dGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXHRcdFx0dGhpcy53cmFwUG9zaXRpb24oKTtcblx0XHRcdHRoaXMubmVhclBhcnRpY2xlKGkpO1xuXHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0fTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGljbGVOdW07IGkrKykge1xuXHRcdFx0dmFyIHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKFxuXHRcdFx0XHRjdHgsXG5cdFx0XHRcdHJhbmQoMCArIDUsIFggLSA1KSxcblx0XHRcdFx0cmFuZCgwICsgNSwgWSAtIDUpLFxuXHRcdFx0XHQ1XG5cdFx0XHQpO1xuXHRcdFx0cGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKlxuICAgICAgXHRSZW5kZXJcbiAgICBcdCoqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBYLCBZKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHBhcnRpY2xlc1tpXS5yZW5kZXIoaSk7XG5cdFx0XHR9XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblx0XHR9XG5cblx0XHRyZW5kZXIoKTtcblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKlxuXHRcdEV2ZW50XG4gICAgXHQqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuXHRcdFx0WCA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0WSA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwYXJ0aWNsZXNbaV0ucmVzaXplKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0b25SZXNpemUoKTtcblx0XHR9KTtcblxuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0bW91c2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRtb3VzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdHZhciBudW0gPSByYW5kKDEsIDEwKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW07IGkrKykge1xuXHRcdFx0XHRcdHZhciBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShcblx0XHRcdFx0XHRcdGN0eCxcblx0XHRcdFx0XHRcdHJhbmQobW91c2VYIC0gNSwgbW91c2VYICsgNSksXG5cdFx0XHRcdFx0XHRyYW5kKG1vdXNlWSAtIDUsIG1vdXNlWSArIDUpLFxuXHRcdFx0XHRcdFx0NVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cGFydGljbGVzLnB1c2gocGFydGljbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHR9KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblx0QGltcG9ydCBcIi4uL3N0eWxlcy90aGVtZS5zY3NzXCI7XG5cdCoge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuXHR9XG5cdGNhbnZhcyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNlOGVmZjM7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keT5cblx0PGNhbnZhcyBpZD1cImNhbnZhc1wiIGJpbmQ6dGhpcz1cIntjYW52YXN9XCI+PC9jYW52YXM+XG5cdDxiciAvPlxuXHQ8YnIgLz5cblx0PGgxPlRoaXM8L2gxPlxuXHQ8YnIgLz5cblx0PGgxPnNleHk8L2gxPlxuXHQ8YnIgLz5cblx0PGgxPnBhZ2U8L2gxPlxuXHQ8YnIgLz5cblx0PGgxPmlzPC9oMT5cblx0PGJyIC8+XG5cdDxoMT5jb21pbmc8L2gxPlxuXHQ8YnIgLz5cblx0PGgxPnZlcnkgc29vbjwvaDE+XG48L2JvZHk+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdLLE1BQU07O0NBQ1YsT0FBTztNQUVGLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVE7O1dBRXBDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRztVQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHOzs7TUFHcEQsR0FBRyxHQUFHLE1BQU0s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
