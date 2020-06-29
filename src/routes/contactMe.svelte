<style lang="scss">
  @import "../styles/contactMe.scss";
</style>

<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<body class="formContainer">
  <form action="https://formspree.io/im.cooperviktor@gmail.com" method="POST">
    <div class="formTitle">
      <h2>Want to speak to me about dev stuff?</h2>
      <label>
        <input type="text" placeholder="Name" required />
      </label>
      <label>
        <input type="email" placeholder="Email Address" required />
      </label>
      <label>
        <textarea type="text" placeholder="Say Hi" required />
      </label>
      <button class="red" type="submit" value="Submit">Send Message</button>
    </div>
  </form>
</body>
