import { namespace } from '../../constants/namespace';

export const eosUserUpsert = (role, hash) => ({
  type: namespace.EOS_USER_UPSERT,
  eos: {
    eosAction: 'upsertuser',
    data: {
      account_name: process.env.EOSIO_ACCOUNT_NAME, // user account
      role, // 'consumer' or 'producer'
      hash  // hash of the user data
    }
  }
});

export const eosCoffeeUpsert = (uuid, hash, price, quantity) => ({
  type: namespace.EOS_COFFEE_UPSERT,
  eos: {
    eosAction: 'upsertcoffee',
    data: {
      account_name: process.env.EOSIO_ACCOUNT_NAME, // user account
      uuid, // unique id type int
      hash,  // hash of the coffee data
      price, // int
      quantity // int
    }
  }
});

export const eosSaleInitiate = (uuid, uuid_coffee, quantity) => ({
  type: namespace.EOS_SALE_INITIATE,
  eos: {
    eosAction: 'initiatesale',
    data: {
      uuid, // unique id type int
      uuid_coffee,  // id of the coffee
      account_name: process.env.EOSIO_ACCOUNT_NAME, // user account
      quantity // int
    }
  }
});

export const eosSaleShipped = (uuid) => ({
  type: namespace.EOS_SALE_SHIPPED,
  eos: {
    eosAction: 'shipsale',
    data: {
      account_name: process.env.EOSIO_ACCOUNT_NAME, // user account
      uuid // unique id type int
    }
  }
});

export const eosSaleDelivered = (uuid) => ({
  type: namespace.EOS_SALE_DELIVERED,
  eos: {
    eosAction: 'fulfillsale',
    data: {
      account_name: process.env.EOSIO_ACCOUNT_NAME, // user account
      uuid // unique id type int
    }
  }
});
