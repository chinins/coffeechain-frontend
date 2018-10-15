import { normalize } from 'normalizr';
const eosjs = require('eosjs');

const config = {
  chainId: null, // 32 byte (64 char) hex string
  keyProvider: ['5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg'], // WIF string or array of keys..
  httpEndpoint: 'http://localhost:7777',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
};

const eos = eosjs(config);

export default store => next => action => {
  if (!action.eos) return next(action);

  next({
    ...action,
    type: `${action.type}_REQUEST`
  });

  this.sendEOSAction(store, action.eos.schema, action.eos.action, action.eos.actor, action.eos.data);

};

sendEOSAction = (async (store, schema, action, actor, data) => {
  try {
    const result = await eos.transaction({
      actions: [
        {
          account: 'beancoin',
          name: action,
          authorization: [
            {
              actor: actor,
              permission: 'active'
            }
          ],
          data: data,
        }
      ]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    console.log(result);
    console.log(result.processed.action_traces);
    //SUCCESS
    const successAction = {
      type: action.type + '_SUCCESS'
    };
    if (schema) {
      successAction.data = normalize(data, schema);
    }
    store.dispatch(successAction);
  } catch (e) {
    console.log('Caught exception: ' + e);
    // FAILURE
    store.dispatch({
      type: action.type + '_FAILURE',
      data
    });
  }
})();