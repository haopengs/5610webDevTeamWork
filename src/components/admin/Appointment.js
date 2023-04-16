import React, { useState } from 'react';

const initialBookings = [
  { id: 1, name: 'John Doe', table: 1, time: '7:00 PM' },
  { id: 2, name: 'Jane Smith', table: 2, time: '8:30 PM' },
];

function BookingSystem() {
  const [bookings, setBookings] = useState(initialBookings);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [editing, setEditing] = useState(false);

  const addBooking = (booking) => {
    booking.id = Date.now();
    setBookings([...bookings, booking]);
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const updateBooking = (updatedBooking) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking
      )
    );
  };

  const editBooking = (booking) => {
    setEditing(true);
    setCurrentBooking(booking);
  };

  const clearForm = () => {
    setEditing(false);
    setCurrentBooking(null);
  };

  return (
    <div>
      <h1>Restaurant Booking System</h1>
      <BookingForm
        onSubmit={editing ? updateBooking : addBooking}
        clearForm={clearForm}
        booking={currentBooking}
        editing={editing}
      />
      <BookingList
        bookings={bookings}
        onDelete={deleteBooking}
        onEdit={editBooking}
      />
    </div>
  );
}

function BookingForm({ onSubmit, clearForm, booking, editing }) {
  const [name, setName] = useState(booking?.name || '');
  const [table, setTable] = useState(booking?.table || '');
  const [time, setTime] = useState(booking?.time || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: booking?.id, name, table, time });
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
      <button type="submit">{editing ? 'Update' : 'Add'} Booking</button>
      {editing && <button onClick={clearForm}>Cancel</button>}
    </form>
  );
}

function BookingList({ bookings, onDelete, onEdit }) {
  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>
          <div>{booking.name}</div>
          <div>Table: {booking.table}</div>
          <div>Time: {booking.time}</div>
          <button onClick={() => onDelete(booking.id)}>Delete</button>
          <button onClick={() => onEdit(booking)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default BookingSystem;
