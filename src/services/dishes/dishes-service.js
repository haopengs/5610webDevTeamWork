import axios from "axios";
const DISHES_API_URL = "http://localhost:4000/api/dishes";

export const findAllDishes = async () => {
  const response = await axios.get(DISHES_API_URL);
  return response.data;
};

export const findDishById = async (id) => {
  const response = await axios.get(`${DISHES_API_URL}/${id}`);
  return response.data;
};

export const findDishesByKeyword = async (keyword) => {
  const response = await axios.get(`${DISHES_API_URL}/search/${keyword}`);
  return response.data;
};

export const updateDish = (newDish) => {
  return axios.put(`${DISHES_API_URL}/${newDish._id}`, newDish);
};

export const deleteDish = (id) => {
  return axios.delete(`${DISHES_API_URL}/${id}`);
};

export const createDish = (Dish) => {
  return axios.post(DISHES_API_URL, Dish);
};
