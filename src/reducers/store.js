
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user_reducer";
import dishesReducer from "./dishes-reducer";
import ordersReducer from "./orders-reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    dishes: dishesReducer,
    orders: ordersReducer,
  },
});

export default store;