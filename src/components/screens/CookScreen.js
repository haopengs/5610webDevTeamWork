import React from "react";
import { useSelector } from "react-redux";
import EditDishesScreen from "./EditDishesScreen";

export default function CookScreen() {
  const { currentAccount } = useSelector((state) => state.accounts);

  return (
    <div>
      <h1>Cook Dashboard</h1>
      <div>
        {currentAccount && (
          <div>
            <h2>
              Welcome Chef {currentAccount.firstName} {currentAccount.lastName}
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
                  <li className="list-group-item">
                    Specialty: {currentAccount.attributes.specialty}
                  </li>
                </ul>
              </div>
              <div className="col-9">
                <EditDishesScreen />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
