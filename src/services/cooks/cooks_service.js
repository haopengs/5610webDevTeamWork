import axios from "axios";
const COOKES_API_URL = "http://localhost:4000/api/cookes";

export const findAllCooks = async () => {
    const response = await axios.get(COOKES_API_URL);
    return response.data;
    }

export const findCookById = (id) => {
    return axios.get(`${COOKES_API_URL}/${id}`).then((response) => response.data);
    }

export const updateCook = (newCook) => {
    return axios.put(`${COOKES_API_URL}/${newCook.id}`, newCook);
    }

export const deleteCook = (id) => {
    return axios.delete(`${COOKES_API_URL}/${id}`);
    }

export const createCook = (Cook) => {
    return axios.post(COOKES_API_URL, Cook);
    }
    