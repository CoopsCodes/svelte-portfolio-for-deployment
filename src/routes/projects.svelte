<style lang="scss">
  @import "../styles/projects.scss";
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<body class="projectsContainer">
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

  <a href="This Website" onclick="return false" target="_blank">
    <div class="projectTile">
      <div class="projectTitle">
        <h1>This Website</h1>
      </div>
      <div class="projectBody">
        <p>
          Built a year after Bootcamp after the Internship at JB HiFi concluded.
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
          Click on me to see.
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
          Building Tetris with support from a Tutorial, the goal was to learn
          JavasScript logic for development.
        </p>
        <p>
          Click on me to see.
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
          Interest Calculator I built while at Coder Academy to test my
          VanillaJS skills
        </p>
        <p>
          Click on me to see.
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
