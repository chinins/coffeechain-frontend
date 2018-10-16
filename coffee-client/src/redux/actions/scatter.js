import { namespace } from '../../constants/namespace';

const EOSIO_ACCOUNT_NAME='leonh';

export const scatterLogin = (role, hash) => ({
  type: namespace.EOS_USER_UPSERT,
  eos: {
    eosAction: 'upsertuser',
    data: {
      user: EOSIO_ACCOUNT_NAME, // user account
      role, // 'consumer' or 'producer'
      hash  // hash of the user data
    }
  }
});
