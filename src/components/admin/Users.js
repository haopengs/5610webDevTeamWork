import React from 'react'

export default function Dishes() {
  const {users} = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findAllUsersThunk())
  },[])

  const handleUserClick = (userId) => {
    console.log(`Displaying information for user with id: ${userId}`)
  }

  const handleDeleteUserClick = (userId) => {
    dispatch(deleteUserThunk(userId))
  }

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleUserClick(user.id)}>Check User Info</button>
                <button onClick={() => handleDeleteUserClick(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
