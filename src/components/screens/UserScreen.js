import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function UserScreen() {
    const { currentUser } = useSelector((state) => state.users);
    
    const userLinks = () => {
        return (
            <div>
                <h4>User Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/user/orderDishes"}>
                            Order Dishes
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/user/makeAppointment"}>
                            Make Appointments
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/user/orderHistory"}>
                            Order History
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/user/appointmentHistory"}>
                            Appointment History
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    const userInfo = () => {
        return (
            <div className='ms-5'>
                <div className='row'>
                    <h3 className='col-4'>User Information</h3>
                    <Link className='col-8' to="/user/editProfile">
                            <b className={"wd-button col-3 rounded-pill btn border"}>Edit Profile</b>
                    </Link>
                </div>
                
                <ul className='list-group ms-3'>
                    <li className='list-group-tem'> First Name : {currentUser.firstName} </li>
                    <li className='list-group-tem'> Last Name : {currentUser.lastName} </li>
                    <li className='list-group-tem'> Birthday : {currentUser.birthday} </li>
                    <li className='list-group-tem'> Phone : {currentUser.phone} </li>
                    <li className='list-group-tem'> Email : {currentUser.email} </li>
                </ul>
            </div>
        )
    }
  return (
    <div>
          <h1>User Dashboard</h1>
          <div>
              { 
                  currentUser  && (
                <div>
                  <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                  <div className='row'>
                        <div className='col-3'>{userLinks()}</div>
                        <div className='col-9'>{userInfo()}</div>
                    </div>
                </div>
              )}
          </div>
    </div>
  )
}