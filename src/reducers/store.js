
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user_reducer";
import dishesReducer from "./dishes-reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    dishes: dishesReducer,
  },
});

export default store;