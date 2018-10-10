import { namespace } from '../../constants/namespace';
import { producerSchema } from './schemas';


export const getProducer = () => ({
  type: namespace.GET_PRODUCER,
  api: {
    path: '/producer',
    method: 'GET',
    schema: [producerSchema]
  }
});

export const createProducer = (producer) => ({
  type: namespace.CREATE_PRODUCER,
  api: {
    path: '/producer',
    method: 'POST',
    body: producer
  }
});

export const updateProducer = (producer) => ({
  type: namespace.UPDATE_PRODUCER,
  api: {
    path: '/producer',
    method: 'PUT',
    body: producer
  }
});