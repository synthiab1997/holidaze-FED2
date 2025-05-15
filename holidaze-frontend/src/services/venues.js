import api from './api';

export const fetchVenues = async (filters = {}) => {
  const response = await api.get('/venues', { params: filters });
  return response.data;
};

export const fetchVenueById = async (id) => {
  const response = await api.get(`/venues/${id}`);
  return response.data;
};

export const createVenue = async (data) => {
  const response = await api.post('/venues', data);
  return response.data;
};

export const updateVenue = async (id, data) => {
  const response = await api.put(`/venues/${id}`, data);
  return response.data;
};

export const deleteVenue = async (id) => {
  const response = await api.delete(`/venues/${id}`);
  return response.data;
};

export const fetchUserVenues = async () => {
  const response = await api.get('/venues/owner');
  return response.data;
};
