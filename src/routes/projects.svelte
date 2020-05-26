<style lang="scss">
	@import "../styles/projects.scss";
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<body class="projectsContainer">
	<!-- 
    <a href="https://coopscodes.github.io/CCWebpage/" target="_blank">
      <div class="projectTile">
        <div class="projectTitle">
          <h1>Original Webpage</h1>
        </div>
        <div class="projectBody">
          <p>
            My first website.
          </p>
          <p>
            Built as a project while a student at Coder Academy.
          </p>
          <p>
            Click on me to see.
          </p>
        </div>
      </div>
    </a>
   -->

	<a href="This Website" onclick="return false" target="_blank">
		<div class="projectTile">
			<div class="projectTitle">
				<h1>This Portfolio</h1>
			</div>
			<div class="projectBody">
				<p>
					Website rebuilt in Svelte, will change with my style.
				</p>
				<p>
					Pages like this one aren't final and it will constantly
					update.
				</p>
			</div>
		</div>
	</a>

	<a href="https://coopscodes.github.io/resume/" target="_blank">
		<div class="projectTile">
			<div class="projectTitle">
				<h1>Resume</h1>
			</div>
			<div class="projectBody">
				<p>
					A resume webpage page.
				</p>
				<p>
					If you 'Command+P' me I can be saved as an A4 sized PDF (or
					printed) for all you curious recruiters out there.
				</p>
				<p>
					Click on me to see.
				</p>
			</div>
		</div>
	</a>

	<a href="https://github.com/CoopsCodes/CSharpRobot" target="_blank">
		<div class="projectTile">
			<div class="projectTitle">
				<h1>Toy Robot Coding Challenge</h1>
			</div>
			<div class="projectBody">
				<p>
					The Toy Robot Coding Challenge built in C# as an attempt to
					learn the fundamentals.
				</p>
				<!-- <p>
          My take away, C# is awesome and I don't ever want to leave it.
        </p> -->
				<p>
					I'm clickable.
				</p>
			</div>
		</div>
	</a>

	<a href="https://coopscodes.github.io/that-cat-page/" target="_blank">
		<div class="projectTile">
			<div class="projectTitle">
				<h1>that 🐈 page</h1>
			</div>
			<div class="projectBody">
				<p>
					A project built to test my initial skills with SASS.
				</p>
				<p>
					Just calls an API to display images of cats.
				</p>
				<p>
					I'm clickable.
				</p>
			</div>
		</div>
	</a>

	<a href="https://coopscodes.github.io/Tetris/" target="_blank">
		<div class="projectTile">
			<div class="projectTitle">
				<h1>Tetris</h1>
			</div>
			<div class="projectBody">
				<p>
					Building Tetris with support from a Tutorial, the goal was
					to learn JavasScript logic for development.
				</p>
				<p>
					I'm clickable.
				</p>
			</div>
		</div>
	</a>

	<a
		href="https://coopscodes.github.io/Compounding-Interest-Calculator/"
		target="_blank"
	>
		<div class="projectTile">
			<div class="projectTitle">
				<h1>Compounding interest calculator</h1>
			</div>
			<div class="projectBody">
				<p>
					Interest Calculator I built while at Coder Academy to test
					my VanillaJS skills
				</p>
				<p>
					I'm clickable.
				</p>
			</div>
		</div>
	</a>

	<!-- template for more projects
    <a href="" target="_blank">
      < class="projectTile">
        <div class="projectTitle">
          <h1>this is a really long title</h1>
        </div>
        <div class="projectBody">
          <p></p>
        </div>
      </>
    </a>
     -->
</body>
