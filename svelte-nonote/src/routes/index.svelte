<script>
  // import { db } from "../stores/store.js";
  import Notes from "../components/Notes.svelte";
  import { writable } from "svelte/store";
  const db = writable(fetch("http://www.mocky.io/v2/5e5fabce310000a9f8afde08"));
</script>

<style>
  .Wrapper {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .Content {
    width: 80%;
  }
</style>

<svelte:head>
  <title>No-note | Forget about it!</title>
</svelte:head>

<div class="Wrapper">
  <div class="Content">
    {#if $db}
      {#await $db}
        <p>...fetching contents</p>
      {:then response}
        {#await response.text()}
          <p>...fetching contents</p>
        {:then body}
          <Notes notes={JSON.parse(body)} />
        {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    {:else}Enter your db credentials...{/if}
  </div>
</div>
