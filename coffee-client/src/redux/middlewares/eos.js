import { normalize } from 'normalizr';
import { EOSIO_HTTP_ENDPOINT, EOSIO_CONTRACT_ACCOUNT } from '../../constants/connections';
const eosjs = require('eosjs');

const config = {
  chainId: null,
  keyProvider: [process.env.EOSIO_ACCOUNT_PRIVATE_KEY],
  httpEndpoint: EOSIO_HTTP_ENDPOINT,
  expireInSeconds: 60,
  broadcast: true,
  verbose: false,
  sign: true
};

const EOS = eosjs(config);

export default store => next => action => {
  if (!action.eos) return next(action);

  const { eosAction, actor, data } = action.eos;

  EOS.transaction(
    {
      actions: [
        {
          account: EOSIO_CONTRACT_ACCOUNT,
          name: action,
          authorization: [
            {
              actor: process.env.EOSIO_ACCOUNT_NAME,
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
  ).then(result => {
    //eslint-disable-next-line
    console.log(result);
  }).catch(err => {
    //eslint-disable-next-line
    console.error(err);
  });

  next({
    ...action,
    type: `${action.type}_REQUEST`
  });
};
