import easyDB from 'easydb-io'

import { writable, derived } from 'svelte/store';

const defaultDbStore = {
  address: null,
  token: null,
  db: null
}

function createDbStore() {
	const { subscribe, set } = writable(defaultDbStore);

	return {
    subscribe,
    setCredentials: (address, token) => set(
      {
        address,
        token,
        db: easyDB({
          database: address,
          token: token
        })
      })
	};
}

export const dbStore = createDbStore();

export const db = derived(
	dbStore,
  $dbStore => {
    return $dbStore.db ? $dbStore.db.list() : undefined;
  }
);