import axios from "axios";
const APPOINTMENTS_API_URL = "http://localhost:4000/api/appointments";

export const findAllAppointments = async () => {
    const response = await axios.get(APPOINTMENTS_API_URL);
    return response.data;
    }

export const findAppointmentById = (id) => {
    return axios.get(`${APPOINTMENTS_API_URL}/${id}`).then((response) => response.data);
    }

export const updateAppointment = (newAppointment) => {
    return axios.put(`${APPOINTMENTS_API_URL}/${newAppointment.id}`, newAppointment);
    }

export const deleteAppointment = (id) => {
    return axios.delete(`${APPOINTMENTS_API_URL}/${id}`);
    }

export const createAppointment = (Appointment) => {
    return axios.post(APPOINTMENTS_API_URL, Appointment);
    }

export const makeAppointment = (booking) => {
    return axios.post(`${APPOINTMENTS_API_URL}/make`, booking);
    }

export const editAppointment = (booking) => {
    return axios.put(`${APPOINTMENTS_API_URL}/edit`, booking);
    }

export const fetchAppointments = (appointments) => {
    return axios.get(`${APPOINTMENTS_API_URL}/fetch`, appointments);
    }




// export const makeAppointment = (booking) => ({
//     type: MAKE_APPOINTMENT,
//     payload: booking,
//   });

//   export const editAppointment = (booking) => ({
//     type: EDIT_APPOINTMENT,
//     payload: booking,
//   });

//   export const deleteAppointment = (booking) => ({
//     type: DELETE_APPOINTMENT,
//     payload: booking,
//   });

//   export const fetchAppointments = (appointments) => ({
//     type: FETCH_APPOINTMENTS,
//     payload: appointments,
//   });


