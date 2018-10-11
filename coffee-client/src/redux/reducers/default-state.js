const defaultState = {
  entities: {
    coffees: {},
    producers: {},
    coffeeShops: {},
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
