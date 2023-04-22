import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllDishesThunk } from "../../services/dishes/dishes-thunks";
import { createOrderThunk } from "../../services/orders/order-thunks";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function OrderDishes() {
  const { dishes } = useSelector((state) => state.dishes);
  const { currentAccount } = useSelector((state) => state.accounts);

  const [order, setOrder] = useState({});
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = async (dish) => {
    if (!currentAccount) {
      alert("Please log in first!");
      return;
    }
    try {
      const newOrder = {
        user_id: currentAccount._id,
        dish_id: dish._id,
        dish_name: dish.name,
      };
      await dispatch(createOrderThunk(newOrder));
      setOrder(newOrder);
      setShowOrderSuccess(true);
      setTimeout(() => setShowOrderSuccess(false), 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(findAllDishesThunk());
  }, [dispatch]);

  return (
    <div className="p-5">
      <div>
        <h2>
          Dishes
          <Link
            to={"/user"}
            className="col-1 rounded-pill btn border float-end"
          >
            <b>Back</b>
          </Link>
        </h2>
      </div>
      {showOrderSuccess && (
        <div className="alert alert-success mt-2" role="alert">
          Order successfully placed!
        </div>
      )}
      <ul className="list-group mt-2">
        {dishes &&
          dishes.map((dish) => {
            return (
              <li className="list-group-item">
                {dish.name}
                <button
                  onClick={() => handleOrder(dish)}
                  className="btn btn-warning float-end"
                >
                  Order
                </button>
                <button
                  onClick={() => navigate(`details/dish/${dish._id}`)}
                  className="btn btn-warning me-2 float-end"
                >
                  Detail
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
