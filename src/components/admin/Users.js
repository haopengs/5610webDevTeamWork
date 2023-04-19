import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {findAllUsersThunk, deleteUserThunk} from "../../services/users/user_thunks.js"
import {useNavigate} from 'react-router-dom';


export default function Users() {
  const {users} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findAllUsersThunk())
  },[])

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  }

  const handleDeleteUserClick = (userId) => {
    dispatch(deleteUserThunk(userId))
  }

  return (
    <div>
      <h2>Users DashBoard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}  {user.lastName}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleUserClick(user.id)}>Check Info</button>
                <button onClick={() => handleDeleteUserClick(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
