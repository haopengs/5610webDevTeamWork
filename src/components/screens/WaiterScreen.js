import React from "react";
import { useSelector } from "react-redux";
import BookingSystem from "./AppointmentScreen";

export default function WaiterScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);

  return (
    <div>
      <h1>Waiter Dashboard</h1>
      <div>
        {currentAccount && (
          <div>
            <h2>
              Welcome Waiter {currentAccount.firstname}{" "}
              {currentAccount.lastname}
            </h2>
            <div className="row">
              <div className="col-3">
                <h4>My Information</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    First Name: {currentAccount.firstname}
                  </li>
                  <li className="list-group-item">
                    Last Name: {currentAccount.lastname}
                  </li>
                  <li className="list-group-item">
                    Birthday:{" "}
                    {new Date(currentAccount.birthday)
                      .toISOString()
                      .substr(0, 10)}
                  </li>
                  <li className="list-group-item">
                    Phone: {currentAccount.phone}
                  </li>
                  <li className="list-group-item">
                    Email: {currentAccount.email}
                  </li>
                </ul>
              </div>
              <div className="col-9">
                <h4> Appointments</h4>
                <BookingSystem />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
