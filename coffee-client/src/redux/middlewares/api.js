import { normalize, schema } from 'normalizr';

export const API = 'api';

const BASE_URL = 'http://polls.apiblueprint.org';

export default store => next => action => {
  const api = action[API];
  if (!api) return next(action);


  fetch(BASE_URL + api.path, {
    method: api.method,
  })
    .then(res => res.json())
    .then(data => {
      //SUCCESS
      store.dispatch({
        type: action.type + '_SUCCESS',
        data: Object.assign({},
          normalize(data, schema))
      })
    })
    .catch(data => {
      // FAILURE
      store.dispatch({
        type: action.type + '_FAILURE',
        data
      })
    })

  // REQUEST
  next({
    type: action.type + '_PENDING'
  })
};