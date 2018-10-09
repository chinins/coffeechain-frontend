import defaultState from './default-state';

export default entitiesReducer = (state = defaultState.entities, action) => {
  if (!action.data.entities) return state;

  return {
    ...state,
    producer: {
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
