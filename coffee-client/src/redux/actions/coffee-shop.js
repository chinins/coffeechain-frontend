import { namespace } from '../../constants/namespace';

export const getCoffeeShop = () => ({
  type: namespace.GET_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'GET'
  }
});

export const createCoffeeShop = () => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'POST'
  }
});

export const updateCoffeeShop = () => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'PUT'
  }
});