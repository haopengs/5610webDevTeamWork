import React from 'react'
import { useSelector } from 'react-redux';
import DishesList from '../data/dish';

export default function AdminScreen() {
  const { currentUser } = useSelector((state) => state.users);

  return (
    <div>
          <h1>Cook Dashboard</h1>
          {/* <div>
              {currentUser && (
                <div>
                    <h2>Welcome {currentUser.firstName} {currentUser.lastName}</h2>
                </div>
              )} */}
          {/* </div> */}
          <DishesList/>
    </div>
  )
}
