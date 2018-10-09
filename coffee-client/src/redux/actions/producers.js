import { namespace } from '../../constants/namespace';

export const getProducer = () => ({
  type: namespace.GET_PRODUCER,
  api: {
    path: '/producer',
    method: 'GET'
  }
});

export const createProducer = () => ({
  type: namespace.CREATE_PRODUCER,
  api: {
    path: '/producer',
    method: 'POST'
  }
});

export const updateProducer = () => ({
  type: namespace.UPDATE_PRODUCER,
  api: {
    path: '/producer',
    method: 'PUT'
  }
});