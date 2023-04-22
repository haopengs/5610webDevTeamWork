import { createSlice } from "@reduxjs/toolkit";
import {
  findAllAccountsThunk,
  findAccountByIdThunk,
  findAllAccountsByDishIdThunk,
  createAccountThunk,
  deleteAccountThunk,
  updateAccountThunk,
} from "../services/accounts/accounts-thunks";

import { loginThunk } from "../services/auth/auth-thunks";

const initialState = {
  accounts: [],
  accountsByDish: [],
  loading: false,
  error: null,
  currentAccount: null,
  oneAccount: null,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllAccountsThunk.pending]: (state) => {
      state.loading = true;
      state.accounts = [];
    },
    [findAllAccountsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.accounts = payload;
    },
    [findAllAccountsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findAccountByIdThunk.pending]: (state) => {
      state.loading = true;
    },
    [findAccountByIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.oneAccount = payload;
    },
    [findAccountByIdThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [findAllAccountsByDishIdThunk.pending]: (state) => {
      state.loading = true;
      state.accountsByDish = [];
    },
    [findAllAccountsByDishIdThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.accountsByDish = payload;
    },
    [createAccountThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.accounts.push(payload);
    },
    [deleteAccountThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.accounts = state.accounts.filter(
        (account) => account._id !== payload
      );
    },
    [updateAccountThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.currentAccount = payload;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.currentAccount = payload;
    },
  },
});

export default accountsSlice.reducer;
