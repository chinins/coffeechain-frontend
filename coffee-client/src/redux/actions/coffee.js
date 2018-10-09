import { namespace } from '../../constants/namespace';

export const getCoffee = (coffeeId) => ({
  type: namespace.GET_COFFEE,
  api: {
    path: '/coffee/' + coffeeId,
    method: 'GET'
  }
});

export const createCoffee = () => ({
  type: namespace.CREATE_COFFEE,
  api: {
    path: '/coffee',
    method: 'POST'
  }
});

export const getAllCoffees = () => ({
  type: namespace.GET_ALLCOFFEES,
  api: {
    path: '/coffee',
    method: 'GET'
  }
});