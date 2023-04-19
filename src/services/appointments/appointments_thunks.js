import * as appointmentsService from './appointments_service';  
import { createAsyncThunk } from '@reduxjs/toolkit';

export const findAllAppointmentsThunk = createAsyncThunk(
  'appointments/findAll',
  async () => {
    const appointments = await appointmentsService.findAllAppointments();
    return appointments;
  }
);

export const findAppointmentByIdThunk = createAsyncThunk(
  'appointments/findById',
  async (id) => {
    const appointment = await appointmentsService.findAppointmentById(id);
    return appointment;
  }
);

export const updateAppointmentThunk = createAsyncThunk(
  'appointments/update',
  async (appointment) => {
    await appointmentsService.updateAppointment(appointment);
    return appointment;
  }
);

export const deleteAppointmentThunk = createAsyncThunk(
  'appointments/delete',
  async (id) => {
    await appointmentsService.deleteAppointment(id);
    return id;
  }
);

export const createAppointmentThunk = createAsyncThunk(
  'appointments/create',
  async (appointment) => {
    await appointmentsService.createAppointment(appointment);
    return appointment;
  }
);

export const makeAppointmentThunk = createAsyncThunk(
  'appointments/make',
  async (booking) => {
    await appointmentsService.makeAppointment(booking);
    return booking;
  }
);


// import { makeAppointment } from './appointments_service';

// export const makeAppointmentThunk = (booking) => (dispatch) => {
//   dispatch(makeAppointment(booking));
// };
