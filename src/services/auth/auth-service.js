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
  localStorage.removeItem('jwt');
  const response = await api.post(`${ACCOUNTS_API_URL}/logout`);
  return response.data;
};

export const authenticate = (data) => {
    // local storage is a property of brower window object
    // so we need to check it first
    if (typeof window !== 'undefined') {
        // key : value, value need to be json string
        localStorage.setItem('jwt', JSON.stringify(data));
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        //JSON.parse is to convert from json to data(token and user information)
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};