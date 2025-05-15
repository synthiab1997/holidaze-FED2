/*const BASE_URL = "https://api.noroff.dev/api/v2/holidaze";*/
const api = axios.create({
  baseURL: 'https://api.noroff.dev/api/v2/holidaze',
});

export default api;

// 🔹 VENUES
export const fetchVenues = async () => {
  const res = await fetch(`${BASE_URL}/venues`);
  return (await res.json()).data;
};

export const fetchVenueDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/venues/${id}`);
  return (await res.json()).data;
};

// 🔹 BOOKINGS
export const fetchBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`);
  return (await res.json()).data;
};

export const createBooking = async (bookingData) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  return (await res.json()).data;
};

// 🔹 PROFILES
export const fetchProfile = async (name) => {
  const res = await fetch(`${BASE_URL}/profiles/${name}`);
  return (await res.json()).data;
};

export const fetchProfileBookings = async (name) => {
  const res = await fetch(`${BASE_URL}/profiles/${name}/bookings`);
  return (await res.json()).data;
};

export const fetchProfileVenues = async (name) => {
  const res = await fetch(`${BASE_URL}/profiles/${name}/venues`);
  return (await res.json()).data;
};
