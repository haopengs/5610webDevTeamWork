import { MAKE_APPOINTMENT } from './appointment_service';

const initialState = {
  bookings: [
    { id: 1, name: 'John Doe', table: 1, time: '7:00 PM' },
    { id: 2, name: 'Jane Smith', table: 2, time: '8:30 PM' },
  ],
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_APPOINTMENT:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    default:
      return state;
  }
};

export default appointmentReducer;
