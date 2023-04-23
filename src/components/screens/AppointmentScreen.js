import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findAllAppointmentsThunk,
  createAppointmentThunk,
  updateAppointmentThunk,
  deleteAppointmentThunk,
} from "../../services/appointments/appointments-thunks";

function BookingSystem() {
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    dispatch(findAllAppointmentsThunk());
  }, [dispatch]);

  const addAppointment = (appointment) => {
    dispatch(createAppointmentThunk(appointment)).then(() => {
      dispatch(findAllAppointmentsThunk());
    });
  };

  const deleteAppointment = (id) => {
    dispatch(deleteAppointmentThunk(id)).then(() => {
      dispatch(findAllAppointmentsThunk());
    });
  };

  const updateAppointment = (updatedAppointment) => {
    dispatch(updateAppointmentThunk(updatedAppointment)).then(() => {
      dispatch(findAllAppointmentsThunk());
    });
  };

  const editAppointment = (appointment) => {
    setEditing(true);
    setCurrentAppointment(appointment);
  };

  const clearForm = () => {
    setEditing(false);
    setCurrentAppointment(null);
  };

  return (
    <div>
      <h1>Restaurant Booking System</h1>
      <BookingForm
        onSubmit={editing ? updateAppointment : addAppointment}
        clearForm={clearForm}
        appointment={currentAppointment}
        editing={editing}
      />
      {appointments && (
        <BookingList
          appointments={appointments}
          onDelete={deleteAppointment}
          onEdit={editAppointment}
        />
      )}
    </div>
  );
}

function BookingForm({ onSubmit, clearForm, appointment, editing }) {
  const [name, setName] = useState(appointment?.name || "");
  const [table, setTable] = useState(appointment?.table || "");
  const [time, setTime] = useState(appointment?.time || "");

  useEffect(() => {
    setName(appointment?.name || "");
    setTable(appointment?.table || "");
    setTime(appointment?.time || "");
  }, [appointment]);

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
    onSubmit({
      _id: appointment?._id,
      name,
      table,
      time: localDate.toISOString(),
    });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit">{editing ? "Update" : "Add"} Appointment</button>
      {editing && <button onClick={clearForm}>Cancel</button>}
    </form>
  );
}

function BookingList({ appointments, onDelete, onEdit }) {
  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment._id}>
          <div>{appointment.name}</div>
          <div>Table: {appointment.table}</div>
          <div>Time: {formatTime(appointment.time)}</div>
          <button onClick={() => onDelete(appointment._id)}>Delete</button>
          <button onClick={() => onEdit(appointment)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

function formatTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
}

export default BookingSystem;
