import axios from "axios";
const ORDERS_API_URL = "http://localhost:4000/api/orders";


export const createOrder = (order) => {
  return axios.post(`${ORDERS_API_URL}/createOrder`, order)
};

export const findOrdersByUserId = (id) => {
  return axios.get(`${ORDERS_API_URL}/${id}`).then((response) => response.data);
};

export const findAllOrders = async () => {
  const response = await axios.get(`${ORDERS_API_URL}/findAllOrders`);
  return response.data;
};

export const deleteOrder = (id) => {
  return axios.delete(`${ORDERS_API_URL}/${id}`);
};