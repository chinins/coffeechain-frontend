import { namespace } from '../../constants/namespace';
import { coffeeShopSchema } from './schemas';


export const getCoffeeShop = () => ({
  type: namespace.GET_COFFEESHOP,
  api: {
    path: '/customers',
    method: 'GET',
    schema: [coffeeShopSchema]
  }
});

export const createCoffeeShop = (coffeeShop) => ({
  type: namespace.CREATE_COFFEESHOP,
  api: {
    path: '/customers',
    method: 'POST',
    body: coffeeShop
  }
});

export const updateCoffeeShop = (coffeeShop) => ({
  type: namespace.UPDATE_COFFEESHOP,
  api: {
    path: '/customers',
    method: 'PUT',
    body: coffeeShop
  }
});