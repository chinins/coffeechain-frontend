import defaultState from './default-state';
import { namespace } from '../../constants/namespace';

export default (state = defaultState.authentication, action) => {
  if (!action.data) return state;

  switch (action.type) {
  case namespace.SCATTER_LOGIN_REQUEST:
    return {
      ...state
    };
  case namespace.SCATTER_LOGIN_SUCCESS:
    return {
      ...state
    };
  case namespace.SCATTER_LOGIN_FAILURE:
    return {
      ...state
    };
  default:
    return {
      ...state
    };
  }
};
