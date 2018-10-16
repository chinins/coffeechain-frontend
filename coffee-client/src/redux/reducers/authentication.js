import defaultState from './default-state';
import { namespace } from '../../constants/namespace';

export default (state = defaultState.authentication, action) => {
  if (!action.data) return state;

  switch (action.type) {
  case namespace.SCATTER_STORE_EOS_CLIENT:
    return {
      ...state,
      eosClient: action.data
    };
  case namespace.SCATTER_STORE_IDENTITY:
    return {
      ...state,
      identity: action.data
    };
  case namespace.SCATTER_STORE_SCATTER:
    return {
      ...state,
      scatter: action.data
    };
  case namespace.SCATTER_LOGIN:
    return {
      ...state,
      authenticated: action.data
    };
  default:
    return {
      ...state
    };
  }
};
