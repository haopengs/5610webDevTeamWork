import { createSlice } from "@reduxjs/toolkit";
import { findAllAppointmentThunk, updateAppointmentThunk, deleteAppointmentThunk, createAppointmentThunk, makeAppointmentThunk } from "../services/appointments/appointments_thunks"; 

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
      state.appointments = state.appointments.map((appointment) => appointment.id === action.payload.id ? action.payload : appointment);
    },
    [createAppointmentThunk.fulfilled]: (state, action) => {
      state.appointments.push(action.payload);
    },
    [deleteAppointmentThunk.fulfilled]: (state, action) => {
      state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload);
    },
    [findAllAppointmentThunk.pending]: (state, action) => {
      state.loading = true;
      state.appointments = [];
    },
    [findAllAppointmentThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    },
    [findAllAppointmentThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
  }
})
export default appointmentsSlice.reducer;

// import { MAKE_APPOINTMENT } from './appointment_service';

// const initialState = {
//   bookings: [
//     { id: 1, name: 'John Doe', table: 1, time: '7:00 PM' },
//     { id: 2, name: 'Jane Smith', table: 2, time: '8:30 PM' },
//   ],
// };

// const appointmentReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case MAKE_APPOINTMENT:
//       return {
//         ...state,
//         bookings: [...state.bookings, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default appointmentReducer;
