import axios from "axios";
const ACCOUNTS_API_URL = `${process.env.REACT_APP_SERVER_API_URL}/accounts`;

const api = axios.create({ withCredentials: true });

export const register = async ({ username, password }) => {
  const response = await api.post(`${ACCOUNTS_API_URL}/register`, {
    username,
    password,
  });
  const account = response.data;
  return account;
};

export const login = async ({ username, password }) => {
  const response = await api.post(`${ACCOUNTS_API_URL}/login`, {
    username,
    password,
  });
  const account = response.data;
  return account;
};

export const logout = async () => {
  const response = await api.post(`${ACCOUNTS_API_URL}/logout`);
  return response.data;
};
