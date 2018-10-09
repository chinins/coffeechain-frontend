import namespace from '../../constants/namespace';

export const getCoffee = () => ({
  type: namespace.GET_COFFEE,
  api: {
    endpoint: '/customer',
    requestType: 'GET'
  }
});

export const createCoffee = () => ({
  type: namespace.CREATE_COFFEE,
  api: {
    endpoint: '/customer',
    requestType: 'POST'
  }
});

export const getAllCoffees = () => ({
  type: namespace.GET_ALLCOFFEES,
  api: {
    endpoint: '/customer',
    requestType: 'GET'
  }
});