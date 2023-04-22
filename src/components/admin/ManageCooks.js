import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  findAllAccountsThunk,
  deleteAccountThunk,
} from "../../services/accounts/accounts-thunks.js";
import { useNavigate } from "react-router-dom";

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
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
                <button onClick={() => handleCookClick(cook._id)}>
                  Check Info
                </button>
                <button onClick={() => handleDeleteCookClick(cook._id)}>
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
