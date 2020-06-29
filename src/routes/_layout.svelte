<script>
  import Nav from "../components/Nav.svelte";

  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style lang="scss"></style>

<Nav {segment}/>

<Footer {segment}/>

<main>
  <slot></slot>
</main>
