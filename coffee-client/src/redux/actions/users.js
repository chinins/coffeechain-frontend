import { namespace } from '../../constants/namespace';
import { coffeeShopSchema, producerSchema, userSchema } from './schemas';


export const createCoffeeShop = (coffeeShop) => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    path: '/customers',
    method: 'POST',
    body: coffeeShop,
    schema: coffeeShopSchema
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

export const getUser = (userId) => ({
  type: namespace.GET_USER,
  api: {
    path: '/me',
    method: 'GET',
    schema: userSchema
  }
});

export const updateUser = (user) => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    path: '/me',
    method: 'PUT',
    body: user,
    schema: userSchema
  }
});
