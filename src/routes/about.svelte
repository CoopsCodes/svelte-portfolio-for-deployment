<script>
	import { onMount } from "svelte";

	let canvas;
	// onMount runs the background
	onMount(() => {
		let frame;
		var canvas = document.getElementById("canvas");

		function rand(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		var ctx = canvas.getContext("2d");
		var X = (canvas.width = window.innerWidth);
		var Y = (canvas.height = window.innerHeight);
		var mouseX = null;
		var mouseY = null;

		var particleNum = 150;
		var particles = [];
		var colors = [
			"rgb(157, 195, 226)",
			"rgb(157, 210, 216)",
			"rgb(255, 181, 204)",
			"rgb(226, 137, 219)",
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
				y: rand(-2, 2) * Math.random(),
			};
			this.c = {
				circle: colors[rand(0, colors.length - 1)],
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
			var particle = new Particle(
				ctx,
				rand(0 + 5, X - 5),
				rand(0 + 5, Y - 5),
				5
			);
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
					var particle = new Particle(
						ctx,
						rand(mouseX - 5, mouseX + 5),
						rand(mouseY - 5, mouseY + 5),
						5
					);
					particles.push(particle);
				}
			},
			false
		);
	});
</script>

<style lang="scss">
	@import "../styles/theme.scss";
	* {
		margin: 0;
		padding: 0;
		font-family: "Quicksand", sans-serif;
	}
	/* Canvas: for the background */
	canvas {
		width: 100vw;
		height: 100vh;
		background: #e8eff3;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}
	body {
		display: grid;
		place-items: center;
		height: 100vh;
		width: 100vw;
	}
	.main {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		padding: 5%;
		width: 70vw;
		height: 70vh;
		font-size: 1em;
		background: #e8eff3c5;
		border-radius: 20%;
	}
	.main p {
		font-size: calc(12px + (20 - 16) * (100vw - 400px) / (800 - 350));
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<body>
	<canvas id="canvas" bind:this="{canvas}"></canvas>
	<div class="background"></div>
	<div class="main">
		<p>Welcome fam!</p>
		<p>
			If you've come this far, you're probably wanting to know a little
			bit about me.
		</p>
		<p>
			Well this is a story all about how my life got flipped and turned
			upside down, I'd like to take a minute, just sit right there, I'll
			tell you how I became a dev in a town called Melbin.
		</p>
		<p>
			After a 7 year stint with Westpac working in Customer Service,
			Management, Coaching and Digital roles, I realised that my heart
			just wasn't in the industry.
		</p>
		<p>
			So I packed my bags, moved from Sydney to Melbourne, quit Westpac,
			completed in a Diploma of IT on Full-Stack web development and I’m
			now looking for that team looking for a team that will value the
			experience I can add to the team as they help me get up to speed.
		</p>
		<p>
			While I am language agnostic, I gravitate towards all things
			JavaScript, but having spent some time in .NET and C# I gravitate
			towards the developer-friendly environment.
		</p>
		<p>
			My passions lie within the user experience, and it motivates me to
			design and build great experiences, with my background of user
			analysis and testing I enjoy various forms of client/customer
			interaction on ways to improve their experience through system
			education or system improvements.
		</p>
	</div>
</body>
