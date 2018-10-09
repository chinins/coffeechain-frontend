import defaultState from './default-state';
import { namespace } from '../../constants/namespace';

export default (state = defaultState.pages, action) => {
  if (!action.entities) return state;

  switch (action.type) {
    case namespace.GET_COFFEE + '_SACCESS':
    return {
      ...state,
      coffeeDetail: {
        ...state.coffeeDetail,
        ...action.data.pages.coffeeDetail
      }
    };

    default:
    return state;
  }


  // return {
  //   ...state,
  //   dashboard: {
  //     ...state.dashboard,
  //     ...action.data.pages.dashboard
  //   },
  //   coffeeDetail: {
  //     ...state.coffeeDetail,
  //     ...action.data.pages.coffeeDetail
  //   }
  // }
};
