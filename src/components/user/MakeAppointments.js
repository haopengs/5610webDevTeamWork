import React from 'react'
import { Link } from 'react-router-dom'

export default function MakeAppointments() {
  return (
    <div>
      <h1>Make Appointments</h1>
      <Link to={"/user"} className=''>Back</Link>
      
      <div>
        <label for="appointment" className='mt-4'>Please choose a date:</label>
      </div>
      <div className='mt-4'>
        <input type="date" id='appointment' />
        <button className='ms-4'>Summit</button>
      </div>
      
    </div>
  )
}
