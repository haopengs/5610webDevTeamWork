import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);

  const userLinks = () => {
    return (
      <div>
        <ul className="mt-2 list-group">
          <li className="list-group-item">User Links</li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/user/order-dishes"}>
              Order Dishes
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/user/order-history"}>
              Order History
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/user/make-appointments"}>
              Make Appointments
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={"/user/appointment-history"}>
              Appointment History
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const userInfo = () => {
    return (
      <div className="ms-5">
        <div className="row">
          <h3>
            Welcome {currentAccount.firstName} {currentAccount.lastName}
          </h3>
          <h4 className="col-4">User Information</h4>
          <Link className="col-8" to="/user/edit-profile">
            <b className={"col-3 rounded-pill btn border float-end"}>
              Edit Profile
            </b>
          </Link>
        </div>
        <ul className="list-group ms-3">
          <li className="list-group-tem">
            First Name : {currentAccount.firstname}
          </li>
          <li className="list-group-tem">
            Last Name : {currentAccount.lastname}
          </li>
          <li className="list-group-tem">
            Birthday:{" "}
            {new Date(currentAccount.birthday).toISOString().substr(0, 10)}
          </li>
          <li className="list-group-tem"> Phone : {currentAccount.phone} </li>
          <li className="list-group-tem"> Email : {currentAccount.email} </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="p-5">
      <div className="row">
        <h2 className="mt-4 ">User Dashboard</h2>
        <img
          alt="#"
          height={160}
          src="https://images.pexels.com/photos/3683109/pexels-photo-3683109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="mt-5">
        {currentAccount && (
          <div>
            <div className="row">
              <div className="col-3">{userLinks()}</div>
              <div className="col-9">{userInfo()}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
