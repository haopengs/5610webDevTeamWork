import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllDishesThunk } from "../../services/dishes/dishes-thunks";
import "./index.css";

function HomePage() {
  const { dishes } = useSelector((state) => state.dishes);
  const { currentAccount } = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllDishesThunk());
  }, [dispatch]);

  const hours = {
    Sunday: "10:00 AM - 10:00 PM",
    Monday: "11:30 AM - 09:00 PM",
    Tuesday: "11:30 AM - 09:00 PM",
    Wednesday: "11:30 AM - 09:00 PM",
    Thursday: "11:30 AM - 09:00 PM",
    Friday: "10:00 AM - 10:00 PM",
    Saturday: "10:00 AM - 10:00 PM",
  };

  const userInfo = () => {
    return (
      <div className="ms-5">
        <h3>Your Info</h3>
        <ul className="list-group ms-3">
          {currentAccount && (
            <>
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
              <li className="list-group-item">Phone: {currentAccount.phone}</li>
              <li className="list-group-item">Email: {currentAccount.email}</li>
            </>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1 className="mb-4">5610 Restaurant</h1>
      <div className="row">
        <div className="col-md-9">
          <h2>New Dishes</h2>
          <ul>
            {dishes
              .slice(-3)
              .reverse()
              .map((dish) => (
                <li key={dish.name}>
                  {dish.name} - ${dish.price}
                </li>
              ))}
          </ul>
          <h2>Open Hours</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(hours).map((day) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{hours[day]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-3">{userInfo()}</div>
      </div>
    </div>
  );
}

export default HomePage;
