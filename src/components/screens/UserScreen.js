import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function UserScreen() {
    const { currentUser } = useSelector((state) => state.users);
    
    const userLinks = () => {
        return (
            <div>
                <ul className='mt-2 list-group'>
                    <li className='list-group-item'>
                            User Links
                    </li>
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
                    <h3>Welcome {currentUser.firstName} {currentUser.lastName}</h3>
                    <h4 className='col-4'>User Information</h4>
                    <Link className='col-8' to="/user/editProfile">
                            <b className={"col-3 rounded-pill btn border float-end"}>Edit Profile</b>
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
      <div className='p-5'>
          <div className='row'>
            <h2 className='mt-4 '>User Dashboard</h2>
            <img height={160} src="https://images.pexels.com/photos/3683109/pexels-photo-3683109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </div>
        
          <div className='mt-5'>
              { 
                  currentUser  && (
                <div>
                  
                  <div className='row'>
                        <div className='col-3'>{userLinks()}</div>
                              <div className='col-9'>
                                  
                                  {userInfo()}
                              </div>
                    </div>
                </div>
              )}
          </div>
    </div>
  )
}
