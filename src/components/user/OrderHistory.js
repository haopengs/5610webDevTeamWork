import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  findOrdersByUserIdThunk,
  deleteOrderThunk,
} from "../../services/orders/order-thunks";
import { Link } from "react-router-dom";

export default function OrderHistory() {
  const { curOrders } = useSelector((state) => state.orders);
  const { currentAccount } = useSelector((state) => state.accounts);

  const dispatch = useDispatch();
  const [deletedOrder, setDeletedOrder] = useState(null);

  const handleDeleteOrder = async (orderId) => {
    await dispatch(deleteOrderThunk(orderId));
    setDeletedOrder(orderId);
  };

  useEffect(() => {
    dispatch(findOrdersByUserIdThunk(currentAccount._id));
  }, [dispatch, deletedOrder]);

  return (
    <div className="p-5">
      <div>
        <h2>
          Orders History
          <Link
            to={"/user"}
            className="col-1 rounded-pill btn border float-end"
          >
            <b>Back</b>
          </Link>
        </h2>
      </div>
      <ul className="list-group">
        {curOrders &&
          curOrders.map((curOrder) => {
            if (curOrder._id === deletedOrder) {
              return null;
            }
            return (
              <li className="list-group-item">
                {curOrder.dish_name}
                <button
                  onClick={() => handleDeleteOrder(curOrder._id)}
                  className="btn btn-warning float-end"
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
