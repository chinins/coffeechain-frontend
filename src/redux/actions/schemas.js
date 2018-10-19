import { schema } from 'normalizr';

const coffeeSchema = new schema.Entity('coffees', {}, { idAttribute: 'id'});
const coffeeArraySchema = new schema.Array(coffeeSchema);

const producerSchema = new schema.Entity('producers', {}, { idAttribute: 'id'});
const producerArraySchema = new schema.Array(producerSchema);

const coffeeShopSchema = new schema.Entity('coffeeShops', {}, { idAttribute: 'id'});
const coffeeShopArraySchema = new schema.Array(coffeeShopSchema);

const userSchema = new schema.Entity('users', {}, { idAttribute: 'id'});
const userArraySchema = new schema.Array(userSchema);

const transactionSchema = new schema.Entity('transactions', {}, {});
const transactionArraySchema = new schema.Array(transactionSchema);

export { coffeeSchema, coffeeArraySchema, producerSchema, producerArraySchema,
  coffeeShopSchema, coffeeShopArraySchema, userSchema, userArraySchema, transactionSchema, transactionArraySchema };
