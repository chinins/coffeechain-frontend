export const API = 'API';

export default store => next => action => {
  const API = action[API];
  if (!API) return next(action);


  fetch()
  .then(() => {
    //SUCCESS
  })
  .catch(() => {
    // FAILURE
  })

  // REQUEST
};