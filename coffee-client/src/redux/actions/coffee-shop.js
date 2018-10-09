import namespace from '../../constants/namespace';

export const getCoffeeShop = () => ({
  type: namespace.GET_COFFEESHOP,
  api: {
    endpoint: '/coffee',
    requestType: 'GET'
  }
});

export const createCoffeeShop = () => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    endpoint: '/coffee',
    requestType: 'POST'
  }
});

export const updateCoffeeShop = () => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    endpoint: '/coffee',
    requestType: 'PUT'
  }
});