import {
  EOSIO_HTTP_ENDPOINT,
  EOSIO_CONTRACT_ACCOUNT
} from '../../constants/connections';
const eosjs = require('eosjs');

const EOSIO_ACCOUNT_NAME = 'leonh';
const EOSIO_ACCOUNT_PRIVATE_KEY =
  '5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5';

const config = {
  chainId: null,
  keyProvider: [EOSIO_ACCOUNT_PRIVATE_KEY],
  httpEndpoint: EOSIO_HTTP_ENDPOINT,
  expireInSeconds: 60,
  broadcast: true,
  verbose: false,
  sign: true
};

const EOS = eosjs(config);

export default store => next => action => {
  if (!action.eos) return next(action);
  const { eosAction, data } = action.eos;
  Object.keys(data).forEach(key => {
    const int = parseInt(data[key]);
    if (!isNaN(int)) data[key] = int;
  });
  EOS.transaction(
    {
      actions: [
        {
          account: EOSIO_CONTRACT_ACCOUNT,
          name: eosAction,
          authorization: [
            {
              actor: EOSIO_ACCOUNT_NAME,
              permission: 'active'
            }
          ],
          data
        }
      ]
    },
    {
      blocksBehind: 3,
      expireSeconds: 30
    }
  )
    .then(answer => {
      // little trick to get the processed data frpm the transaction
      // TODO: parse JSON
      const data = JSON.parse(answer.processed.action_traces[0].console);
      store.dispatch({
        type: `${action.type}_SUCCESS`,
        data
      });
    })
    .catch(data => {
      //eslint-disable-next-line
      console.error(data);
      store.dispatch({
        type: `${action.type}_FAILURE`,
        data
      });
    });

  next({
    ...action,
    type: `${action.type}_REQUEST`
  });
};
