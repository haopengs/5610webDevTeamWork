import axios from "axios";
const DISHES_API_URL = "http://localhost:4000/api/dishes";

export const findAllDishes = async () => {
  const response = await axios.get(DISHES_API_URL);
  return response.data;
};

export const findDishById = (id) => {
  return axios.get(`${DISHES_API_URL}/${id}`).then((response) => response.data);
};

export const findDishesByKeyWord = (keyWord) => {
  return axios.get(`${DISHES_API_URL}/search/${keyWord}`).then((response) => response.data);
};


export const updateDish = (newDish) => {
  return axios.put(`${DISHES_API_URL}/${newDish.id}`, newDish);
};

export const deleteDish = (id) => {
  return axios.delete(`${DISHES_API_URL}/${id}`);
};

export const createDish = (Dish) => {
  return axios.post(DISHES_API_URL, Dish);
};
