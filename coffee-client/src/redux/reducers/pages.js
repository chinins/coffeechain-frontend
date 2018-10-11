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

    // page update user
    case namespace.UPDATE_USER + '_SUCCESS':
      return {
        ...state,
        loading: false,
        updateUSer: {
          ...state.updateUser,
          result: action.data.result
        }
      }
    case namespace.UPDATE_USER + '_REQUEST':
      return {
        ...state,
        loading: true
      };

    // page display user
    case namespace.GET_USER + '_SUCCESS':
      return {
        ...state,
        loading: false,
        displayUser: {
          ...state.displayUser,
          result: action.data.result
        }
      }
    case namespace.GET_USER + '_REQUEST':
      return {
        ...state,
        loading: true
      };

    // page CREATE USER
    case namespace.CREATE_COFFEESHOP + '_SUCCESS':
    case namespace.CREATE_PRODUCER + '_SUCCESS':
      return {
        ...state,
        loading: false,
        createUSer: {
          ...state.createUser,
          result: action.data.result
        }
      }
    case namespace.CREATE_COFFEESHOP + '_REQUEST':
    case namespace.CREATE_PRODUCER + '_REQUEST':
    return {
        ...state,
        loading: true
      };

    // FAILURES
    case namespace.GET_COFFEE + '_FAILURE':
    case namespace.GET_ALL_COFFEES + '_FAILURE':
    case namespace.CREATE_COFFEE + '_FAILURE':
    case namespace.UPDATE_USER + '_FAILURE':
    case namespace.CREATE_COFFEESHOP + '_FAILURE':
    case namespace.CREATE_PRODUCER + '_FAILURE':
    return {
        ...state,
        loading: false
      };

    default:
    return state;
  }

};
