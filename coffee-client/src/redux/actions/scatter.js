import { namespace } from '../../constants/namespace';

export const storeEOSClient = (data) => ({
  type: namespace.SCATTER_STORE_EOS_CLIENT,
  data
});

export const storeScatter = (data) => ({
  type: namespace.SCATTER_STORE_SCATTER,
  data
});

export const scatterLogin = (role, hash) => ({
  type: namespace.SCATTER_LOGIN,
  // ...
});
