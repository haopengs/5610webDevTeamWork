import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
} from "../services/auth/auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentAccount: null },
  reducers: {},
  extraReducers: {
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentAccount = payload;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentAccount = payload;
    },
    [logoutThunk.fulfilled]: (state) => {
      state.currentAccount = null;
    },
  },
});
export default authSlice.reducer;
