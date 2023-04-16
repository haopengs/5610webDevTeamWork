import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AdminScreen() {
    const { currentUser } = useSelector((state) => state.users);
    
    const adminLinks = () => {
        return (
            <div>
                <h4>Admin Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/dishes"}>
                            Manage Dishes
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/dishes"}>
                            Manage Appointments
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/dishes"}>
                            Manage Employees
                        </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to={"/dishes"}>
                            Manage Users
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminInfo = () => {
        return (
            <div className='ms-5'>
                <h3>User Information</h3>
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
          <h1>Admin Dashboard</h1>
          <div>
              {currentUser && (
                <div>
                    <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                    <div className='row'>
                        <div className='col-3'>{adminLinks()}</div>
                        <div className='col-9'>{adminInfo()}</div>
                    </div>
                </div>
              )}
          </div>
    </div>
  )
}
