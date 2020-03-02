<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  main {
    flex: 1;
  }
</style>

<Header />

<main>
  <slot />
</main>

<Footer />
