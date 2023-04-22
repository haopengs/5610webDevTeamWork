import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAppointmentsByUserIdThunk } from "../../services/appointments/appointments-thunks";

export default function AppointmentHistory() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAppointmentsByUserIdThunk(currentAccount._id));
  }, [dispatch]);

  const renderAppointments = () => {
    if (!appointments || appointments.length === 0) {
      return <div>You have no appointments.</div>;
    }

    if (!appointments || appointments.length === 0) {
      return <div>You have no appointments.</div>;
    }

    return (
      <ul className="list-group">
        {appointments.map((appointment) => (
          <li className="list-group-item" key={appointment._id}>
            <div>Table: {appointment.table}</div>
            <div>Date and Time: {formatDateTime(appointment.time)}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-5">
      <h2>Appointment History</h2>
      {renderAppointments()}
    </div>
  );
}

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
