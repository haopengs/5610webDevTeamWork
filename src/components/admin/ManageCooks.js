import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  findAllAccountsThunk,
  deleteAccountThunk,
} from "../../services/accounts/accounts-thunks.js";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ManageCooks() {
  const { accounts } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(findAllAccountsThunk("cook"));
  }, []);

  const handleCookClick = (cookId) => {
    navigate(`/profile/${cookId}`);
  };

  const handleDeleteCookClick = (cookId) => {
    dispatch(deleteAccountThunk(cookId));
  };

  return (
    <div>
      <h2>Cooks DashBoard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((cook) => (
            <tr key={cook._id}>
              <td>{cook._id}</td>
              <td>
                {cook.firstname} {cook.lastname}
              </td>
              <td>
                <Button variant="primary" onClick={() => handleCookClick(cook._id)}>Check Info</Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteCookClick(cook._id)}>Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
