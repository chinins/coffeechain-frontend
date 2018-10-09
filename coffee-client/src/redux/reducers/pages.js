import defaultState from './default-state';

export default pagesReducer = (state = defaultState.pages, action) => {
  if (!action.entities) return state;

  return {
    ...state,
    dashboard: {
      ...state.dashboard,
      ...action.pages.dashboard
    },
    coffeeDetail: {
      ...state.coffeeDetail,
      ...action.pages.coffeeDetail
    }
  }
};
