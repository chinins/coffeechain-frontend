import { namespace } from '../../constants/namespace';
import { coffeeShopSchema, producerSchema } from './schemas';


export const createCoffeeShop = (coffeeShop) => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    path: '/customers',
    method: 'POST',
    body: coffeeShop,
    schema: coffeeShopSchema
  }
});

export const updateCoffeeShop = (coffeeShop) => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    path: '/me',
    method: 'PUT',
    body: coffeeShop
  }
});

export const createProducer = (producer) => ({
  type: namespace.CREATE_PRODUCER,
  api: {
    path: '/producers',
    method: 'POST',
    body: producer,
    schema: producerSchema
  }
});

export const updateProducer = (producer) => ({
  type: namespace.UPDATE_PRODUCER,
  api: {
    path: '/me',
    method: 'PUT',
    body: producer,
    schema: producerSchema
  }
});