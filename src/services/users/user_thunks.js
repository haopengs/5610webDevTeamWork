import axios from "axios";
import * as userService from "./user_service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserByIdRequest,
  fetchUserByIdSuccess,
  fetchUserByIdFailure,
} from './user_actions';

export const findAllUsersThunk = createAsyncThunk(
  "users/findAll", 
  async () => {
    const users = await userService.findAllUsers();
    return users;
  }
);

export const findUserByIdThunk = createAsyncThunk(
  "users/findById",
  async (id) => {
    const user = await userService.findUserById(id);
    return user;
  }
);


export const updateUserThunk = createAsyncThunk(
    "users/update",
  async (user) => {
    console.log(user)
    // evertthing is good except the following
    // we can wait backend finsh to figure out

    // await userService.updateUser(user)
    return user;
  }
);

export const deleteUserThunk = createAsyncThunk(
  "users/delete", 
  async (id) => {
    await userService.deleteUser(id);
    return id;
  }
);

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user) => {
    await userService.createUser(user);
    return user;
  }
);

export const createOrderThunk = createAsyncThunk(
  "users/createOrder",
    async (order) => {
      await userService.createOrder(order);
    return order;
  }
);

export const findAllOrdersThunk = createAsyncThunk(
    "users/findAllOrders", async () => {
    const orders = await userService.findAllOrders();
    return orders;
});

export const findAllUsersByDishIdThunk = createAsyncThunk(
    "users/dishes", async (id) => {
    const users = await userService.findAllUsersByDishId(id);
    return users;
});

export const loginThunk = createAsyncThunk(
  "users/login", 
  async (user) => {
    const response = await userService.login(user);
    return response.data;
  }
);


export const fetchUserById = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUserByIdRequest());

    try {
      const response = await axios.get(`/api/users/${userId}`);
      dispatch(fetchUserByIdSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserByIdFailure(error.message));
    }
  };
};
