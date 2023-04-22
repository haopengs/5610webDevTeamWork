import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accounts-reducer";
import dishesReducer from "./dishes-reducer";
import ordersReducer from "./orders-reducer";
import appointmentsReducer from "./appointments-reducer";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    dishes: dishesReducer,
    orders: ordersReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
