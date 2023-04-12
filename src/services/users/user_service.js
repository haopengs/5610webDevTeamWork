import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};

export const updateUser = (newUser) => {
  return axios.put(`${USERS_API_URL}/${newUser.id}`, newUser);
};

export const deleteUser = (id) => {
  return axios.delete(`${USERS_API_URL}/${id}`);
};

export const createUser = (user) => {
  return axios.post(USERS_API_URL, user);
};

export const login = (user) => {
    return axios.post(`${USERS_API_URL}/login`, user)
}