import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAppointmentThunk } from "../../services/appointments/appointments-thunks";

export default function MakeAppointments() {
  const { currentAccount } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const createAppointment = (appointment) => {
    dispatch(createAppointmentThunk(appointment));
  };

  const [table, setTable] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment({
      name: `${currentAccount.firstname} ${currentAccount.lastname}`,
      table,
      time,
      user_id: currentAccount._id,
    });
    setTable("");
    setTime("");
  };

  return (
    <div className="p-5">
      <div>
        <h2>
          Make Appointments
          <Link
            to={"/user"}
            className="col-1 rounded-pill btn border float-end"
          >
            <b>Back</b>
          </Link>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Table"
          value={table}
          onChange={(e) => setTable(parseInt(e.target.value, 10))}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">{"Add"} Appointment</button>
      </form>
    </div>
  );
}
