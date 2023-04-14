import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import AdminScreen from './AdminScreen';
import CookScreen from './CookScreen'
import WaiterScreen from './WaiterScreen'
import UserScreen from './UserScreen'
import Login from './Login';

export default function Profile() {
    // const { currentUser } = useSelector((state) => state.currentUser)
    
  const { currentUser, login } = useSelector((state) => state.users);
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!currentUser) {
      alert("Please Login")
      navigate('/login')
    }
  }, [currentUser, navigate])

  if (!currentUser) {
      navigate('/login')
      return null
  }
  
  return (
    <div>
      <div>
              {currentUser.role == "ADMIN" && (<AdminScreen/>)}
              {currentUser.role == "USER" && (<UserScreen/>)}
              {currentUser.role == "COOK" && (<CookScreen/>)}
              {currentUser.role == "WAITER" && (<WaiterScreen/>)}
          </div>
    </div>
  )
}

