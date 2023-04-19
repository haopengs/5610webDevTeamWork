export const MAKE_APPOINTMENT = 'MAKE_APPOINTMENT';

export const makeAppointment = (booking) => ({
    type: MAKE_APPOINTMENT,
    payload: booking,
  });