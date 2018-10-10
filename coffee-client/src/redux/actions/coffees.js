import { namespace } from '../../constants/namespace';
import { coffeeSchema, coffeeArraySchema } from './schemas';

export const getCoffee = (coffeeId) => ({
  type: namespace.GET_COFFEE,
  api: {
    path: '/coffee/' + coffeeId,
    method: 'GET'
  }
});

export const createCoffee = (coffee) => ({
  type: namespace.CREATE_COFFEE,
  api: {
    path: '/coffee',
    method: 'POST',
    body: coffee,
  }
});

export const getAllCoffees = () => ({
  type: namespace.GET_ALLCOFFEES,
  api: {
    path: '/coffee',
    method: 'GET',
    schema: coffeeArraySchema
  }
});