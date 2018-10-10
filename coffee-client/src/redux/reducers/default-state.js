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
      result: {}
    },
    addCoffee: {
      result: {}    // should be like this?
    }
  }
};

export default defaultState;
