import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AdminScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);

  const adminLinks = () => {
    return (
      <div>
        <h4>Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to={"/dishes"}>
              Manage Dishes
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/appointment"}>
              Manage Appointments
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/manage-cooks"}>
              Manage Cooks
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/manage-waiters"}>
              Manage Waiters
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/manage-users"}>
              Manage Users
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="ms-5">
        <h3>User Information</h3>
        <ul className="list-group ms-3">
          <li> First Name : {currentAccount.firstname}</li>
          <li> Last Name : {currentAccount.lastname}</li>
          <li>
            {" "}
            Birthday :{" "}
            {new Date(currentAccount.birthday).toISOString().substr(0, 10)}
          </li>
          <li> Phone : {currentAccount.phone} </li>
          <li> Email : {currentAccount.email} </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="p-5">
      <h1>Admin Dashboard</h1>
      <div>
        {currentAccount && (
          <div>
            <h2>
              Welcome {currentAccount.firstName} {currentAccount.lastName}
            </h2>
            <div className="row">
              <div className="col-3">{adminLinks()}</div>
              <div className="col-9">{adminInfo()}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
