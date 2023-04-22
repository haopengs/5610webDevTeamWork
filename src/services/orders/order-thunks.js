import * as orderService from "./order-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteOrder } from "./order-service";

export const createOrderThunk = createAsyncThunk(
  "orders/createOrder",
  async (order) => {
    await orderService.createOrder(order);
    return order;
  }
);

export const findAllOrdersThunk = createAsyncThunk(
  "orders/findAllOrders",
  async () => {
    const orders = await orderService.findAllOrders();
    return orders;
  }
);

export const findOrdersByUserIdThunk = createAsyncThunk(
  "orders/findUserById",
  async (id) => {
    const orders = await orderService.findOrdersByUserId(id);
    return orders;
  }
);

export const deleteOrderThunk = createAsyncThunk(
  "orders/delete",
  async (id) => {
    await deleteOrder(id);
    return id;
  }
);
