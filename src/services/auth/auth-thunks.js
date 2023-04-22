import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const account = await authService.register(credentials);
    return account;
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const account = await authService.login(credentials);
    return account;
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});
