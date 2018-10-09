import { normalize, schema } from 'normalizr';

export const API = 'api';

const BASE_URL = 'http://private-c1deb-coffeechain.apiary-mock.com';

export default store => next => action => {
  const api = action[API];
  if (!api) return next(action);

  const fetchOptions = {
    method: api.method,
  };
  if (api.body) {
    fetchOptions.body = api.body;
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
      store.dispatch(successAction)
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