import defaultState from './default-state';
import { namespace } from '../../constants/namespace';

export default (state = defaultState.entities, action) => {
  if (!action.data) return state;

  switch (action.type) {
    case namespace.GET_ALLCOFFEES + '_SUCCESS':
    return {
        ...state,
      coffees: {
        ...state.coffees,
        ...action.data.entities.coffees
      }
    }
    case namespace.GET_ALLCOFFEES + '_FAILURE':
    case namespace.GET_ALLCOFFEES + '_PENDING':
    return {
      ...state
    }

    default:
    return state;
  }

  // return {
  //   ...state,
  //   producer: {
  //     ...state.producer,
  //     ...action.data.entities.producer
  //   },
  //   coffees: {
  //     ...state.coffees,
  //     ...action.data.entities.coffees
  //   },
  //   coffeeShops: {
  //     ...state.coffeeShop,
  //     ...action.data.entities.coffeeShop
  //   }
  // }
};
