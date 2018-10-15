import { namespace } from '../../constants/namespace';

export const eosUserUpsert = () => ({
  type: namespace.EOS_USER_UPSERT,
  eos: {
    eosAction: 'upsertuser',
    actor: 'adriapalleja',
    data: transaction
  }
});

export const eosCoffeeUpsert = () => ({
  type: namespace.EOS_COFFEE_UPSERT,
  eos: {
    eosAction: 'upsertuser',
    actor: 'adriapalleja',
    data: transaction
  }
});

export const eosSaleInitiate = () => ({
  type: namespace.EOS_SALE_INITIATE,
  eos: {
    eosAction: 'upsertuser',
    actor: 'adriapalleja',
    data: transaction
  }
});

export const eosSaleShipped = () => ({
  type: namespace.EOS_SALE_SHIPPED,
  eos: {
    eosAction: 'upsertuser',
    actor: 'adriapalleja',
    data: transaction
  }
});

export const eosSaleDelivered = () => ({
  type: namespace.EOS_SALE_DELIVERED,
  eos: {
    eosAction: 'upsertuser',
    actor: 'adriapalleja',
    data: transaction
  }
});
