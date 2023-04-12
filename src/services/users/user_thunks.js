import * as userService from "./user_service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllUsersThunk = createAsyncThunk(
    "users/findAll", async () => {
    const users = await userService.findAllUsers();
    return users;
});

export const updateUserThunk = createAsyncThunk(
    "users/update",
    async (user) => {
        await userService.updateUser(user);
        return user;
    }
);

export const deleteUserThunk = createAsyncThunk(
    "users/delete", async (id) => {
    await userService.deleteUser(id);
    return id;
});

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user) => {
    await userService.createUser(user);
    return user;
  }
);
export const loginThunk = createAsyncThunk(
    "users/login", async (user) => {
    const response = await userService.login(user);
    return response.data;
});