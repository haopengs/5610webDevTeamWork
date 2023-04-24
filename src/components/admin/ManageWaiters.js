import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  findAllAccountsThunk,
  deleteAccountThunk,
} from "../../services/accounts/accounts-thunks.js";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
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
                <Button variant="warning" onClick={() => handleWaiterClick(waiter._id)}>Check Info</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteWaiterClick(waiter._id)}>Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
