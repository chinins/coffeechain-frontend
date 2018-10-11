import { namespace } from '../../constants/namespace';
import { producerSchema, producerArraySchema } from './schemas';


export const getProducer = (producerId) => ({
  type: namespace.GET_PRODUCER,
  api: {
    path: '/producers' + producerId,
    method: 'GET',
    schema: producerSchema
  }
});

export const getAllProducers = () => ({
  type: namespace.GET_ALL_PRODUCER,
  api: {
    path: '/producers',
    method: 'GET',
    schema: producerArraySchema
  }
});
