import defaultState from './default-state';
import { namespace } from '../../constants/namespace';

export default (state = defaultState.pages, action) => {
  if (!action.data) return state;

  switch (action.type) {
    // page coffeeDetail
    case namespace.GET_COFFEE + '_SUCCESS':
      return {
        ...state,
        loading: false,
        coffeeDetail: {
          ...state.coffeeDetail,
          result: action.data.result
        }
      };
    case namespace.GET_COFFEE + '_REQUEST':
      return {
        ...state,
        loading: true
      };
      case namespace.GET_COFFEE + '_FAILURE':
      return {
        ...state,
        loading: false
      };

    // page dashboard
    case namespace.GET_ALL_COFFEES + '_SUCCESS':
      return {
        ...state,
        loading: false,
          dashboard: {
            ...state.dashboard,
            result: action.data.result
          }
      };
    case namespace.GET_ALL_COFFEES + '_REQUEST':
      return {
        ...state,
        loading: true
      };
    case namespace.GET_ALL_COFFEES + '_FAILURE':
      return {
        ...state,
        loading: false
      };

    // page addCoffee
    case namespace.CREATE_COFFEE + '_SUCCESS':
      return {
        ...state,
        loading: false,
        addCoffee: {
          ...state.addCoffee,
          result: action.data.result
        }
      };
    case namespace.CREATE_COFFEE + '_REQUEST':
      return {
        ...state,
        loading: true
      };
    case namespace.CREATE_COFFEE + '_FAILURE':
      return {
        ...state,
        loading: false
      };


    default:
    return state;
  }

};
