import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentCalendar from '../data/calendar.js';

export default function AdminScreen() {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
          <h1>User Dashboard</h1>
          <div>
              {currentUser && (
                <div>
                    <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                </div>
              )}
          </div>
          <AppointmentCalendar/>
    </div>
  )
}
