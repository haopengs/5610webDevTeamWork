import React from 'react'
import { Link } from 'react-router-dom'

export default function MakeAppointments() {
  return (
    <div className='p-5'>
      <div>
        <h2>
          Make Appointments
          <Link to={"/user"} className='col-1 rounded-pill btn border float-end'><b>Back</b></Link>
        </h2> 
      </div>

      
      <div>
        <label for="appointment" className='mt-4'>Please choose a date:</label>
      </div>
      <div className='mt-2'>
        <input type="date" id='appointment' />
      </div>
      <div className='mt-4'>
        <button className='btn btn-warning'>Summit</button>
      </div>
      
    </div>
  )
}

