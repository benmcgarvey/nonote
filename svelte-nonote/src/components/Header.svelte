<script>
  import { dbStore } from "../stores/store";
  import { local } from "../stores/localStore";
  import { onMount } from "svelte";

  let maybeDbAddress = null;
  let maybeDbToken = null;

  onMount(async () => {
    local.useLocalStorage();
    maybeDbAddress = $local.dbAddress || null;
    maybeDbToken = $local.dbToken || null;
  });

  const handleClick = () => {
    const dbAddress = document.querySelector(".DB").value;
    const dbToken = document.querySelector(".Token").value;
    $local["dbAddress"] = dbAddress;
    $local["dbToken"] = dbToken;
    dbStore.setCredentials(dbAddress, dbToken);
  };
</script>

<style>
  .Header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  .HeaderContent {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .Title {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .DbAddress {
    display: flex;
    flex: 2;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: center;
  }

  .DbAddress > input {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 25px;
    outline: none;
    margin: 5px;
    padding: 0 15px;
    font-size: 16px;
  }

  .Fetch {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .Fetch > button {
    margin-left: 20px;
  }
</style>

<div class="Header">
  <div class="HeaderContent">
    <div class="Title">
      <img src="ghost.svg" alt="cartoon ghost logo" height="55" width="55" />
      <h1>no-note</h1>
    </div>
    <div class="DbAddress">
      <input
        class="DB"
        type="text"
        placeholder="database key"
        value={maybeDbAddress || null} />
      <input
        class="Token"
        type="text"
        placeholder="database token"
        value={maybeDbToken || null} />
    </div>
    <div class="Fetch">
      <button on:click={handleClick}>Go</button>
    </div>

  </div>
</div>
