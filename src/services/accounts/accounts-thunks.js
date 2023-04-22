import * as accountsService from "./accounts-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllAccountsThunk = createAsyncThunk(
  "accounts/findAll",
  async (type) => {
    const accounts = await accountsService.findAllAccounts(type);
    return accounts;
  }
);

export const findAccountByIdThunk = createAsyncThunk(
  "accounts/findById",
  async (id) => {
    const account = await accountsService.findAccountById(id);
    return account;
  }
);

export const findAllAccountsByDishIdThunk = createAsyncThunk(
  "accounts/findAllByDishId",
  async (id) => {
    const accounts = await accountsService.findAllAccountsByDishId(id);
    return accounts;
  }
);

export const createAccountThunk = createAsyncThunk(
  "accounts/create",
  async (account) => {
    await accountsService.createAccount(account);
    return account;
  }
);

export const deleteAccountThunk = createAsyncThunk(
  "accounts/delete",
  async (id) => {
    await accountsService.deleteAccount(id);
    return id;
  }
);

export const updateAccountThunk = createAsyncThunk(
  "accounts/update",
  async (newAccount) => {
    await accountsService.updateAccount(newAccount);
    return newAccount;
  }
);
