import { namespace } from '../../constants/namespace';
import { coffeeShopSchema, coffeeShopArraySchema } from './schemas';


export const getCoffeeShop = (coffeeShopId) => ({
  type: namespace.GET_COFFEESHOP,
  api: {
    path: '/customers/' + coffeeShopId,
    method: 'GET',
    schema: coffeeShopSchema
  }
});

export const getAllCoffeeShops = () => ({
  type: namespace.GET_ALL_COFFEESHOPS,
  api: {
    path: '/customers',
    method: 'GET',
    schema: coffeeShopArraySchema
  }
});
