import { defineStore } from 'pinia';

export const usecurrencyStore=defineStore('currency', {
    state: () => {
        return {
          // all these properties will have their type inferred automatically
          count: 0,
          name: 'Eduardo',
          isAdmin: true,
          items: [],
          hasChanged: true,
        }
      },
}

)