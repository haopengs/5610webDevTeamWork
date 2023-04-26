import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  findAllAppointmentsThunk,
  createAppointmentThunk,
  updateAppointmentThunk,
  deleteAppointmentThunk,
} from "../../services/appointments/appointments-thunks";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

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
    <Container>
      <h1 className="text-center my-5">Restaurant Booking System</h1>
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
    </Container>
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
    <Row className="mb-5">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-2" variant="warning" type="submit">
            {editing ? "Update" : "Add"} Appointment
          </Button>
          {editing && (
            <Button variant="secondary" onClick={clearForm} className="ml-2">
              Cancel
            </Button>
          )}
        </Form>
      </Col>
    </Row>
  );
}

function BookingList({ appointments, onDelete, onEdit }) {
  return (
    <Row>
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        <ListGroup>
          {appointments.map((appointment) => (
            <ListGroup.Item key={appointment._id}>
              <div>{appointment.name}</div>
              <div>Table: {appointment.table}</div>
              <div>Time: {formatTime(appointment.time)}</div>
              <Button
                variant="warning"
                onClick={() => onEdit(appointment)}
                className="mt-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(appointment._id)}
                className="mr-2 mt-2 ms-2"
              >
                Delete
              </Button>
   
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
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

