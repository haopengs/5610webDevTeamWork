import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
} from "../services/auth/auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentAccount: null , isLogged: false},
  reducers: {},
  extraReducers: {
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentAccount = payload;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentAccount = payload;
      state.isLogged = true;
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentAccount = null;
      state.isLogged = false;

    },
  },
});
export default authSlice.reducer;
