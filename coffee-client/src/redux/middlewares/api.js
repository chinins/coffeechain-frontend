import { normalize } from 'normalizr';
import { BASE_URL } from '../../constants/connections';

export const API = 'api';

export default store => next => action => {
  const api = action[API];
  if (!api) return next(action);

  const fetchOptions = {
    method: api.method || 'GET',
  };
  if (api.body) {
    fetchOptions.body = JSON.stringify(api.body);
  }
  if (api.header) {
    fetchOptions.header = api.header;
  }
  fetch(BASE_URL + api.path, fetchOptions)
    .then(res => res.json())
    .then(data => {
      //SUCCESS
      const successAction = {
        type: action.type + '_SUCCESS',
      }
      if (api.schema) {
        successAction.data = normalize(data, api.schema);
      }
      console.log(successAction);
      store.dispatch(successAction);
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
    type: action.type + '_REQUEST'
  })
};