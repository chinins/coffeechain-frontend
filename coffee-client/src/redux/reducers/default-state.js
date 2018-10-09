const defaultState = {
  entities: {
    coffees: {},
    producer: {},
    coffeeShop: {},
  },
  pages: {
    dashboard: {
      loading: true,
      results: [],
    },
    coffeeDetail: {
      loading: true,
    }
  }
};

export default defaultState;
