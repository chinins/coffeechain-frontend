import { namespace } from '../../constants/namespace';
import { coffeeShopSchema } from './schemas';


export const getCoffeeShop = () => ({
  type: namespace.GET_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'GET',
    schema: [coffeeShopSchema]
  }
});

export const createCoffeeShop = (coffeeShop) => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'POST',
    body: coffeeShop
  }
});

export const updateCoffeeShop = (coffeeShop) => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    path: '/customer',
    method: 'PUT',
    body: coffeeShop
  }
});