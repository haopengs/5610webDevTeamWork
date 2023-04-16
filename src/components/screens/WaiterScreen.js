import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookingSystem from '../admin/Appointment';


export default function WaiterScreen() {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
          <h1>Waiter Dashboard</h1>
          <div>
              {currentUser && (
                <div>
                    <h2>Welcome Waiter {currentUser.firstName} {currentUser.lastName}</h2>
                    <div className='row'>
                        <div className='col-3'>
                            <h4>My Information</h4>
                            <ul className='list-group'>
                                <li className='list-group-item'>First Name: {currentUser.firstName}</li>
                                <li className='list-group-item'>Last Name: {currentUser.lastName}</li>  
                                <li className='list-group-item'>Birthday: {currentUser.birthday}</li>
                                <li className='list-group-item'>Phone: {currentUser.phone}</li>
                                <li className='list-group-item'>Email: {currentUser.email}</li>
                            </ul>
                </div>
                <div className='col-9'>
                    <h4> Appointments</h4>
                    <BookingSystem/>
                </div>
            </div>
        </div>
              )}
          </div>
    </div>
  )
}
