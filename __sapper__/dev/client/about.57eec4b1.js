import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as binding_callbacks, r as globals } from './client.712021ed.js';

/* src/routes/about.svelte generated by Svelte v3.18.2 */

const { document: document_1 } = globals;
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let body;
	let canvas_1;
	let t1;
	let div3;
	let div0;
	let t2;
	let t3;
	let div1;
	let t4;
	let t5;
	let div2;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			body = element("body");
			canvas_1 = element("canvas");
			t1 = space();
			div3 = element("div");
			div0 = element("div");
			t2 = text("about me");
			t3 = space();
			div1 = element("div");
			t4 = text("socials");
			t5 = space();
			div2 = element("div");
			t6 = text("skills");
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
			div3 = claim_element(body_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t2 = claim_text(div0_nodes, "about me");
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t4 = claim_text(div1_nodes, "socials");
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "skills");
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "About";
			attr_dev(canvas_1, "id", "canvas");
			attr_dev(canvas_1, "class", "svelte-y9f2ef");
			add_location(canvas_1, file, 220, 1, 4736);
			attr_dev(div0, "class", "main svelte-y9f2ef");
			add_location(div0, file, 222, 2, 4819);
			attr_dev(div1, "class", "socials svelte-y9f2ef");
			add_location(div1, file, 223, 2, 4854);
			attr_dev(div2, "class", "skills svelte-y9f2ef");
			add_location(div2, file, 224, 2, 4891);
			attr_dev(div3, "class", "grid-container svelte-y9f2ef");
			add_location(div3, file, 221, 1, 4788);
			attr_dev(body, "class", "aboutContainer svelte-y9f2ef");
			add_location(body, file, 219, 0, 4705);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, canvas_1);
			/*canvas_1_binding*/ ctx[1](canvas_1);
			append_dev(body, t1);
			append_dev(body, div3);
			append_dev(div3, div0);
			append_dev(div0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			append_dev(div1, t4);
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, t6);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNTdlZWM0YjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cblx0bGV0IGNhbnZhcztcblx0Ly8gb25Nb3VudCBydW5zIHRoZSBiYWNrZ3JvdW5kXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdGxldCBmcmFtZTtcblx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cblx0XHRmdW5jdGlvbiByYW5kKG1pbiwgbWF4KSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcblx0XHR9XG5cblx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHR2YXIgWCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5cdFx0dmFyIFkgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dmFyIG1vdXNlWCA9IG51bGw7XG5cdFx0dmFyIG1vdXNlWSA9IG51bGw7XG5cblx0XHR2YXIgcGFydGljbGVOdW0gPSAxNTA7XG5cdFx0dmFyIHBhcnRpY2xlcyA9IFtdO1xuXHRcdHZhciBjb2xvcnMgPSBbXG5cdFx0XHRcInJnYigxNTcsIDE5NSwgMjI2KVwiLFxuXHRcdFx0XCJyZ2IoMTU3LCAyMTAsIDIxNilcIixcblx0XHRcdFwicmdiKDI1NSwgMTgxLCAyMDQpXCIsXG5cdFx0XHRcInJnYigyMjYsIDEzNywgMjE5KVwiLFxuXHRcdF07XG5cblx0XHRpZiAoWCA8IDc2OCkge1xuXHRcdFx0cGFydGljbGVOdW0gPSA1MDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBQYXJ0aWNsZShjdHgsIHgsIHksIHIpIHtcblx0XHRcdHRoaXMuY3R4ID0gY3R4O1xuXHRcdFx0dGhpcy5pbml0KHgsIHksIHIpO1xuXHRcdH1cblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XG5cdFx0XHR0aGlzLnggPSB4O1xuXHRcdFx0dGhpcy55ID0geTtcblx0XHRcdHRoaXMueDEgPSB0aGlzLng7XG5cdFx0XHR0aGlzLnkxID0gdGhpcy55O1xuXHRcdFx0dGhpcy5yID0gcjtcblx0XHRcdHRoaXMudiA9IHtcblx0XHRcdFx0eDogcmFuZCgtMiwgMikgKiBNYXRoLnJhbmRvbSgpLFxuXHRcdFx0XHR5OiByYW5kKC0yLCAyKSAqIE1hdGgucmFuZG9tKCksXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5jID0ge1xuXHRcdFx0XHRjaXJjbGU6IGNvbG9yc1tyYW5kKDAsIGNvbG9ycy5sZW5ndGggLSAxKV0sXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0UGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY3R4ID0gdGhpcy5jdHg7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuYy5jaXJjbGU7XG5cdFx0XHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG5cdFx0XHRjdHguZmlsbCgpO1xuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMueCArPSB0aGlzLnYueDtcblx0XHRcdHRoaXMueSArPSB0aGlzLnYueTtcblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5uZWFyUGFydGljbGUgPSBmdW5jdGlvbiAoaSkge1xuXHRcdFx0dmFyIGogPSBpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGogIT09IGkpIHtcblx0XHRcdFx0XHR2YXIgeCA9IHRoaXMueCAtIHBhcnRpY2xlc1tpXS54O1xuXHRcdFx0XHRcdHZhciB5ID0gdGhpcy55IC0gcGFydGljbGVzW2ldLnk7XG5cdFx0XHRcdFx0dmFyIGQgPSB4ICogeCArIHkgKiB5O1xuXHRcdFx0XHRcdHZhciBkaXN0ID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoZCkpO1xuXHRcdFx0XHRcdGlmIChkaXN0IDwgMTAwKSB7XG5cdFx0XHRcdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gMC4zO1xuXHRcdFx0XHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoMTYxLCAyMTQsIDIyNilcIjtcblx0XHRcdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdFx0XHRcdGN0eC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuXHRcdFx0XHRcdFx0Y3R4LmxpbmVUbyhwYXJ0aWNsZXNbaV0ueCwgcGFydGljbGVzW2ldLnkpO1xuXHRcdFx0XHRcdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdFx0XHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS53cmFwUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodGhpcy54IC0gdGhpcy5yIDwgMCkge1xuXHRcdFx0XHR0aGlzLnYueCAqPSAtMTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnggKyB0aGlzLnIgPiBYKSB7XG5cdFx0XHRcdHRoaXMudi54ICo9IC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMueSAtIHRoaXMuciA8IDApIHtcblx0XHRcdFx0dGhpcy52LnkgKj0gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy55ICsgdGhpcy5yID4gWSkge1xuXHRcdFx0XHR0aGlzLnYueSAqPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdFBhcnRpY2xlLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnggPSByYW5kKDAgKyA1LCBYIC0gNSk7XG5cdFx0XHR0aGlzLnkgPSByYW5kKDAgKyA1LCBZIC0gNSk7XG5cdFx0fTtcblx0XHRQYXJ0aWNsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGkpIHtcblx0XHRcdHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblx0XHRcdHRoaXMud3JhcFBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLm5lYXJQYXJ0aWNsZShpKTtcblx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdH07XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyBpKyspIHtcblx0XHRcdHZhciBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShcblx0XHRcdFx0Y3R4LFxuXHRcdFx0XHRyYW5kKDAgKyA1LCBYIC0gNSksXG5cdFx0XHRcdHJhbmQoMCArIDUsIFkgLSA1KSxcblx0XHRcdFx0NVxuXHRcdFx0KTtcblx0XHRcdHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKipcbiAgICAgIFx0UmVuZGVyXG4gICAgXHQqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgWCwgWSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwYXJ0aWNsZXNbaV0ucmVuZGVyKGkpO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCk7XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKipcblx0XHRFdmVudFxuICAgIFx0KioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRmdW5jdGlvbiBvblJlc2l6ZSgpIHtcblx0XHRcdFggPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdFkgPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0cGFydGljbGVzW2ldLnJlc2l6ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdG9uUmVzaXplKCk7XG5cdFx0fSk7XG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFwiY2xpY2tcIixcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdG1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0bW91c2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHR2YXIgbnVtID0gcmFuZCgxLCAxMCk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgcGFydGljbGUgPSBuZXcgUGFydGljbGUoXG5cdFx0XHRcdFx0XHRjdHgsXG5cdFx0XHRcdFx0XHRyYW5kKG1vdXNlWCAtIDUsIG1vdXNlWCArIDUpLFxuXHRcdFx0XHRcdFx0cmFuZChtb3VzZVkgLSA1LCBtb3VzZVkgKyA1KSxcblx0XHRcdFx0XHRcdDVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgXCIuLi9zdHlsZXMvdGhlbWUuc2Nzc1wiO1xuXHQqIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcblx0fVxuXHQvKiBDYW52YXM6IGZvciB0aGUgYmFja2dyb3VuZCAqL1xuXHRjYW52YXMge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kOiAjZThlZmYzO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHR6LWluZGV4OiAtMTtcblx0fVxuXHRib2R5IHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdHdpZHRoOiAxMDB2dztcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblx0LmdyaWQtY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxLjFmciAwLjlmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjdmciAwLjNmcjtcblx0XHRnYXA6IDFweCAxcHg7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtYWluIG1haW4gbWFpbiBza2lsbHNcIiBcIm1haW4gbWFpbiBtYWluIHNraWxsc1wiIFwic29jaWFscyBzb2NpYWxzIHNvY2lhbHMgc29jaWFsc1wiO1xuXHR9XG5cblx0Lm1haW4ge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG5cdFx0Z2FwOiAxcHggMXB4O1xuXHRcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiAuIC5cIiBcIi4gLiAuXCI7XG5cdFx0Z3JpZC1hcmVhOiBtYWluO1xuXHR9XG5cblx0LnNvY2lhbHMge1xuXHRcdGdyaWQtYXJlYTogc29jaWFscztcblx0fVxuXG5cdC5za2lsbHMge1xuXHRcdGdyaWQtYXJlYTogc2tpbGxzO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48Ym9keSBjbGFzcz1cImFib3V0Q29udGFpbmVyXCI+XG5cdDxjYW52YXMgaWQ9XCJjYW52YXNcIiBiaW5kOnRoaXM9XCJ7Y2FudmFzfVwiPjwvY2FudmFzPlxuXHQ8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwibWFpblwiPmFib3V0IG1lPC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInNvY2lhbHNcIj5zb2NpYWxzPC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInNraWxsc1wiPnNraWxsczwvZGl2PlxuXHQ8L2Rpdj5cbjwvYm9keT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUdLLE1BQU07OztDQUVWLE9BQU87TUFFRixNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFROztXQUVwQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7VUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRzs7O01BR3BELEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7TUFDNUIsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVU7TUFDckMsQ0FBQyxHQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVc7TUFDdkMsTUFBTSxHQUFHLElBQUk7TUFDYixNQUFNLEdBQUcsSUFBSTtNQUViLFdBQVcsR0FBRyxHQUFHO01BQ2pCLFNBQVM7O01BQ1QsTUFBTTtHQUNULG9CQUFvQjtHQUNwQixvQkFBb0I7R0FDcEIsb0JBQW9CO0dBQ3BCLG9CQUFvQjs7O01BR2pCLENBQUMsR0FBRyxHQUFHO0dBQ1YsV0FBVyxHQUFHLEVBQUU7OztXQUdSLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztHQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7RUFFbEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQzFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztHQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztHQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7R0FDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztHQUNoQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7O0dBQ1YsSUFBSSxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU07SUFDNUIsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNOzs7R0FFN0IsSUFBSSxDQUFDLENBQUM7SUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDOzs7O0VBRzFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSTtPQUNsQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUc7R0FDbEIsR0FBRyxDQUFDLElBQUk7R0FDUixHQUFHLENBQUMsU0FBUztHQUNiLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO0dBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FB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
