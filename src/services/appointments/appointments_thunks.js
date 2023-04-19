import { makeAppointment } from './appointments_service';

export const makeAppointmentThunk = (booking) => (dispatch) => {
  dispatch(makeAppointment(booking));
};
