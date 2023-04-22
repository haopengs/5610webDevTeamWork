import axios from "axios";
const APPOINTMENTS_API_URL = "http://localhost:4000/api/appointments";

export const findAllAppointments = async () => {
  const response = await axios.get(APPOINTMENTS_API_URL);
  return response.data;
};

export const findAppointmentsByUserId = async (userId) => {
  const response = await axios.get(`${APPOINTMENTS_API_URL}/user/${userId}`);
  return response.data;
};

export const updateAppointment = (appointment) => {
  return axios.put(`${APPOINTMENTS_API_URL}/${appointment._id}`, appointment);
};

export const deleteAppointment = (id) => {
  return axios.delete(`${APPOINTMENTS_API_URL}/${id}`);
};

export const createAppointment = (appointment) => {
  return axios.post(APPOINTMENTS_API_URL, appointment);
};
