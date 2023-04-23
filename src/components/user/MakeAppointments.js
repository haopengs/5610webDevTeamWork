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
  const [showAppointmentSuccess, setShowAppointmentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const [inputHours, inputMinutes] = time.split(":");
    const localDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      parseInt(inputHours, 10),
      parseInt(inputMinutes, 10)
    );
    createAppointment({
      name: `${currentAccount.firstname} ${currentAccount.lastname}`,
      table,
      time: localDate.toISOString(),
      user_id: currentAccount._id,
    });
    setShowAppointmentSuccess(true);
    setTimeout(() => setShowAppointmentSuccess(false), 1000);
    setTable("");
    setTime("");
  };

  return (
    <div className="container p-5">
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
      {showAppointmentSuccess && (
        <div className="alert alert-success mt-2" role="alert">
          Appointment successfully booked!
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="col-4 mb-3">
          <label htmlFor="table" className="form-label">
            Table
          </label>
          <input
            type="number"
            id="table"
            className="form-control"
            placeholder="Table"
            value={table}
            onChange={(e) => setTable(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="col-4 mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}
