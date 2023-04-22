import { createSlice } from "@reduxjs/toolkit";
import {
  findAllAppointmentsThunk,
  findAppointmentsByUserIdThunk,
  updateAppointmentThunk,
  deleteAppointmentThunk,
  createAppointmentThunk,
} from "../services/appointments/appointments-thunks";

const initialState = {
  appointments: [],
  loading: false,
  error: null,
  currentAppointment: null,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: {
    [updateAppointmentThunk.fulfilled]: (state, action) => {
      state.appointments = state.appointments.map((appointment) =>
        appointment._id === action.payload._id ? action.payload : appointment
      );
    },
    [createAppointmentThunk.fulfilled]: (state, action) => {
      state.appointments.push(action.payload);
    },
    [deleteAppointmentThunk.fulfilled]: (state, action) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment._id !== action.payload
      );
    },
    [findAllAppointmentsThunk.pending]: (state, action) => {
      state.loading = true;
      state.appointments = [];
    },
    [findAllAppointmentsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    },
    [findAllAppointmentsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [findAppointmentsByUserIdThunk.pending]: (state, action) => {
      state.loading = true;
      state.appointments = [];
    },
    [findAppointmentsByUserIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    },
    [findAppointmentsByUserIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default appointmentsSlice.reducer;
