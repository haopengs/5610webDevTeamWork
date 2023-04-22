import { createSlice } from "@reduxjs/toolkit";
import {
  createOrderThunk,
  findOrdersByUserIdThunk,
  deleteOrderThunk,
  findAllOrdersThunk,
} from "../services/orders/order-thunks";

const initialState = {
  orders: [],
  curOrders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [createOrderThunk.fulfilled]: (state, action) => {
      state.orders.push(action.payload);
    },
    [findOrdersByUserIdThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findOrdersByUserIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.curOrders = action.payload;
    },
    [deleteOrderThunk.fulfilled]: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
  },
});
export default ordersSlice.reducer;
