<script>
  import { db } from "../stores/store.js";
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
      {:then result}
        <p>{JSON.stringify(result)}</p>
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    {:else}Enter your db credentials...{/if}
  </div>
</div>
