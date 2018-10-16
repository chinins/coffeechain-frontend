const defaultState = {
  authentication: {
    authenticated: false,
    eosClient: {},
    scatter: {},
    identity: {}
  },
  entities: {
    coffees: {},
    producers: {},
    coffeeShops: {},
    transactions: {}
  },
  pages: {
    loading: false,
    dashboard: {
      result: [],
    },
    coffeeDetail: {
      result: undefined
    },
    addCoffee: {
      result: undefined
    },
    createUser: {
      result: undefined
    },
    updateUser: {
      result: undefined
    },
    displayUser: {
      result: undefined
    }
  }
};

export default defaultState;
