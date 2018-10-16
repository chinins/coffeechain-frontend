import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authentication from './authentication';
import entities from './entities';
import pages from './pages';

const reducers = combineReducers({
  authentication,
  entities,
  pages,
  loadingBar: loadingBarReducer
});

export default reducers;
