import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  findAllAccountsThunk,
  deleteAccountThunk,
} from "../../services/accounts/accounts-thunks.js";
import { useNavigate } from "react-router-dom";

export default function ManageUsers() {
  const { accounts } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findAllAccountsThunk("user"));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const handleDeleteUserClick = (userId) => {
    dispatch(deleteAccountThunk(userId));
  };

  return (
    <div className="container">
      <h2>Users Dashboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>
                {user.firstname} {user.lastname}
              </td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleUserClick(user._id)}>
                  Check Info
                </button>
                <button className="btn btn-danger" onClick={() => handleDeleteUserClick(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
