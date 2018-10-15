// ACTION EXAMPLE
//
// const action = {
//   type: '...'
//   eos: {
//     action,
//     data
//   }
// }

import EOSIOClient from './eos-client.js';

const Client = new EOSIOClient(
  process.env.EOSIO_HTTP_ENDPOINT,
  process.env.EOSIO_CONTRACT_ACCOUNT,
  process.env.EOSIO_ACCOUNT_PRIVATE_KEY
);

export default store => next => action => {
  if (!action.eos) return next(action);

  next({
    ...action,
    type: `${action.type}_EOS_SENT`
  });

  Client.transaction(
    process.env.EOSIO_ACCOUNT_NAME,
    action.eos.action,
    action.eos.data
  );
};
