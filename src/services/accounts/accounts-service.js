import axios from "axios";
const ACCOUNTS_API_URL = `${process.env.REACT_APP_SERVER_API_URL}/accounts`;

export const findAllAccounts = async (type) => {
  const response = await axios.get(`${ACCOUNTS_API_URL}?type=${type}`);
  return response.data;
};

export const findAccountById = async (id) => {
  const response = await axios.get(`${ACCOUNTS_API_URL}/${id}`);
  return response.data;
};

export const findAllAccountsByDishId = async (id) => {
  const response = await axios.get(`${ACCOUNTS_API_URL}/dish/${id}`);
  return response.data;
};

export const createAccount = (account) => {
  return axios.post(ACCOUNTS_API_URL, account);
};

export const deleteAccount = (id) => {
  return axios.delete(`${ACCOUNTS_API_URL}/${id}`);
};

export const updateAccount = (newAccount) => {
  return axios.put(`${ACCOUNTS_API_URL}/${newAccount.id}`, newAccount);
};
