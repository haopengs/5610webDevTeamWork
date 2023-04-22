import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllDishesThunk } from "../../services/dishes/dishes-thunks";
import "./index.css";

function HomePage() {
  const { dishes } = useSelector((state) => state.dishes);
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

  return (
    <div>
      <h1>5610 Restaurant</h1>
      <h2>New Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.name}>
            {dish.name} - ${dish.price}
          </li>
        ))}
      </ul>
      <h2>Open Hours</h2>
      <table>
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
  );
}

export default HomePage;
