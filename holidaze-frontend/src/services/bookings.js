import api from './api';

export const createBooking = async (booking) => {
  const response = await api.post('/bookings', booking);
  return response.data;
};

export const getUserBookings = async () => {
  const response = await api.get('/bookings/user');
  return response.data;
};

export const getVenueBookings = async (venueId) => {
  const response = await api.get(`/bookings/venue/${venueId}`);
  return response.data;
};