import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  findAllAccountsThunk,
  deleteAccountThunk,
} from "../../services/accounts/accounts-thunks.js";
import { useNavigate } from "react-router-dom";

export default function ManageWaiters() {
  const { accounts } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findAllAccountsThunk("waiter"));
  }, []);

  const handleWaiterClick = (waiterId) => {
    navigate(`/profile/${waiterId}`);
  };

  const handleDeleteWaiterClick = (waiterId) => {
    dispatch(deleteAccountThunk(waiterId));
  };

  return (
    <div>
      <h2>Waiters DashBoard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((waiter) => (
            <tr key={waiter._id}>
              <td>{waiter._id}</td>
              <td>
                {waiter.firstname} {waiter.lastname}
              </td>
              <td>
                <button onClick={() => handleWaiterClick(waiter._id)}>
                  Check Info
                </button>
                <button onClick={() => handleDeleteWaiterClick(waiter._id)}>
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
