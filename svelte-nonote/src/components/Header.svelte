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
    align-items: center;
    justify-content: flex-start;
  }

  .DbAddress > input {
    width: 100%;
    height: 30px;
    border: 1px solid black;
    border-radius: 25px;
    outline: none;
    margin: 0;
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
    margin-left: 10px;
  }
</style>

<div class="Header">
  <div class="HeaderContent">
    <div class="Title">
      <img src="ghost.svg" alt="cartoon ghost logo" height="55" width="55" />
      <h1>no-note</h1>
    </div>
    <div class="DbAddress">
      <input type="text" />
    </div>
    <div class="Fetch">
      <button>Go</button>
    </div>

  </div>
</div>
