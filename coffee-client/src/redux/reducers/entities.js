import defaultState from './default-state';

export default (state = defaultState.entities, action) => {
  if (!action.data || !action.data.entities) return state;

  return {
    producers: {
      ...state.producers,
      ...action.data.entities.producers
    },
    coffees: {
      ...state.coffees,
      ...action.data.entities.coffees
    },
    coffeeShops: {
      ...state.coffeeShops,
      ...action.data.entities.coffeeShops
    }
  };
};
