<style>
  main {
    height: 100%;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .Header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .Content {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .Content::after {
    content: "";
    flex: 1;
  }

  .Title {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .DbAddress {
    flex: 1;
    align-items: center;
  }

  .DbAddress > input {
    width: 100%;
  }
</style>

<div class="Header">
  <div class="Content">
    <div class="Title">
      <img src="ghost.svg" alt="cartoon ghost logo" height="55" width="55" />
      <h1>no-note</h1>
    </div>
    <div class="DbAddress">
      <input type="text" />
    </div>
  </div>

</div>

<main>
  <slot />
</main>
