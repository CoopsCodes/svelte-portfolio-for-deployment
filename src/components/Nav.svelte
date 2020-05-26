<script>
	export let segment;
</script>

<style lang="scss">
	@import "../styles/nav.scss";
</style>

<div class="Nav">
	<nav>
		<ul>
			<li>
				<a class:selected="{segment === undefined}" href=".">home</a>
			</li>
			<li>
				<a class:selected='{segment === "projects"}' href="projects"
					>projects</a
				>
			</li>
			<!-- <li>
				<a class:selected='{segment === "resume"}' href="resume"
					>resume</a
				>
			</li> -->
			<li>
				<a class:selected="{segment === 'contactMe'}" href="contactMe"
					>contact me</a
				>
			</li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper pre-fetches
			   the blog data when we hover over the link or tap it on a touchscreen -->
			<!-- 
		  <li>
			<a rel="prefetch" class:selected='{segment === "blog"}' href="blog"
			  >blog</a
			>
		  </li>
		   -->
		</ul>
	</nav>
</div>
