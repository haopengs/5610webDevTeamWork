import * as appointmentsService from "./appointments-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllAppointmentsThunk = createAsyncThunk(
  "appointments/findAll",
  async () => {
    const appointments = await appointmentsService.findAllAppointments();
    return appointments;
  }
);

export const findAppointmentsByUserIdThunk = createAsyncThunk(
  "appointments/findByUserId",
  async (userId) => {
    const appointments = await appointmentsService.findAppointmentsByUserId(
      userId
    );
    return appointments;
  }
);

export const updateAppointmentThunk = createAsyncThunk(
  "appointments/update",
  async (appointment) => {
    await appointmentsService.updateAppointment(appointment);
    return appointment;
  }
);

export const deleteAppointmentThunk = createAsyncThunk(
  "appointments/delete",
  async (id) => {
    await appointmentsService.deleteAppointment(id);
    return id;
  }
);

export const createAppointmentThunk = createAsyncThunk(
  "appointments/create",
  async (appointment) => {
    await appointmentsService.createAppointment(appointment);
    return appointment;
  }
);
