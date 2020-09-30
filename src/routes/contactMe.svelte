<style lang="scss">
  @import "../styles/contactMe.scss";
</style>

<svelte:head>
  <title>Contact Me</title>
</svelte:head>

<body class="formContainer">
  <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8"  action="https://formspree.io/im.cooperviktor@gmail.com" method="POST">
    <div class="formTitle">
      <h2>Want to speak to me about dev stuff?</h2>
      <label for="name">
        <input type="text" placeholder="Name" name="name" id="name" required />
      </label>
      <label for="email-address">
        <input type="email" name="_replyto" id="email-address" placeholder="Email Address" required />
      </label>
      <label for="message">
        <textarea type="text" placeholder="Say Hi" name="message" id="message" required />
      </label>
      <button class="red" type="submit" value="Submit">Send Message</button>
    </div>
  </form>
</body>
