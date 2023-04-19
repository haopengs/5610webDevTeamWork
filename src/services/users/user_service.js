import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data;
};

export const findUserById = (id) => {
  return axios.get(`${USERS_API_URL}/${id}`).then((response) => response.data);
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

export const createOrder = (order) => {
    return axios.post(`${USERS_API_URL}/createOrder`, order)
  
};

export const findOrdersByUserId = (id) => {
  return axios.get(`${USERS_API_URL}/Orders/${id}`).then((response) => response.data);
};

//not find this method was used
export const findAllOrders = async () => {
  const response = await axios.get(`${USERS_API_URL}/findAllOrders`);
  return response.data;
};

// find all users that their orders include this dish
export const findAllUsersByDishId = (id) => {
  return axios.get(`${USERS_API_URL}/Dishes/${id}`).then((response) => response.data);
};

export const login = (user) => {
    return axios.post(`${USERS_API_URL}/login`, user)
}