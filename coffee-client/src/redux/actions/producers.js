import namespace from '../../constants/namespace';

export const getProducer = () => ({
  type: namespace.GET_PRODUCER,
  api: {
    endpoint: '/producer',
    requestType: 'GET'
  }
});

export const createProducer = () => ({
  type: namespace.CREATE_PRODUCER,
  api: {
    endpoint: '/producer',
    requestType: 'POST'
  }
});

export const updateProducer = () => ({
  type: namespace.UPDATE_PRODUCER,
  api: {
    endpoint: '/producer',
    requestType: 'PUT'
  }
});