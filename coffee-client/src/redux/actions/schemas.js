import {  schema } from 'normalizr';

const coffeeSchema = new schema.Entity('coffees', {}, { idAttribute: '_id'});
const coffeeArraySchema = new schema.Array(coffeeSchema);
const producerSchema = new schema.Entity('producers');
const coffeeShopSchema = new schema.Entity('coffeeShops');

export { coffeeSchema, coffeeArraySchema, producerSchema, coffeeShopSchema };