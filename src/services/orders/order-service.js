import axios from "axios";
const ORDERS_API_URL = `${process.env.REACT_APP_SERVER_API_URL}/orders`;

export const findAllOrders = async () => {
  const response = await axios.get(ORDERS_API_URL);
  return response.data;
};

export const findOrdersByUserId = async (id) => {
  const response = await axios.get(`${ORDERS_API_URL}/user/${id}`);
  return response.data;
};

export const createOrder = (order) => {
  return axios.post(ORDERS_API_URL, order);
};

export const deleteOrder = (id) => {
  return axios.delete(`${ORDERS_API_URL}/${id}`);
};
