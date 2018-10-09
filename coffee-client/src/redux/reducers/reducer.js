import * as Actions from '../actions/producers';

const defaultState = {
  producers: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Actions.getProducer: {
      return {
        ...state,
        producers: action.producer
      }
    }
  }
  return state;
}