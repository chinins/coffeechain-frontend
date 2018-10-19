import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import entities from './entities';
import pages from './pages';

const reducers = combineReducers({
  entities,
  pages,
  loadingBar: loadingBarReducer
});

export default reducers;
