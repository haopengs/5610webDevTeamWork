import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AdminScreen from './AdminScreen';
import CookScreen from './CookScreen'
import WaiterScreen from './WaiterScreen'
import UserScreen from './UserScreen'

export default function Profile() {
    // const { currentUser } = useSelector((state) => state.currentUser)
    
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
          <h1>Profile</h1>
          <div>
              {currentUser.role == "ADMIN" && (<AdminScreen/>)}
              {currentUser.role == "USER" && (<UserScreen/>)}
              {currentUser.role == "COOK" && (<CookScreen/>)}
              {currentUser.role == "WAITER" && (<WaiterScreen/>)}
          </div>
    </div>
  )
}

