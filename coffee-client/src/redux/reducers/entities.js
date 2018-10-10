import defaultState from './default-state';

export default (state = defaultState.entities, action) => {
  if (!action.data || !action.data.entities) return state;

  return {
    producers: {
      ...state.producer,
      ...action.data.entities.producer
    },
    coffees: {
      ...state.coffees,
      ...action.data.entities.coffees
    },
    coffeeShops: {
      ...state.coffeeShop,
      ...action.data.entities.coffeeShop
    }
  }
};
