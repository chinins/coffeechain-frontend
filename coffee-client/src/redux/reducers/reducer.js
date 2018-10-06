import * as Actions from '../actions/actions';

const defaultState = {
  producers: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Actions.SET_PRODUCERS: {
      return {
        ...state,
        producers: action.producers
      }
    }
  }
  return state;
}