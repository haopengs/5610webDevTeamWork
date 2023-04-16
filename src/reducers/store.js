
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user_reducer";
import dishesReducer from "./dishes-reducer";
import ordersReducer from "./orders-reducer";
import cooks_reducer from "./cooks_reducer";
import waiters_reducer from "./waiters_reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    dishes: dishesReducer,
    orders: ordersReducer,
    cooks: cooks_reducer,
    waiters: waiters_reducer,
  },
});

export default store;