import { combineReducers } from 'redux';

import entitiesReducer from './entities';
import pagesReducer from './entities';

const reducers = combineReducers({
  entitiesReducer,
  pagesReducer
});

export default reducers;
