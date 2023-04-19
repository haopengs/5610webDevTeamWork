import axios from "axios";
const WAITERS_API_URL = "http://localhost:4000/api/waiters";

export const findAllWaiters = async () => {
    const response = await axios.get(WAITERS_API_URL);
    return response.data;
    }

export const findWaiterById = (id) => {
    return axios.get(`${WAITERS_API_URL}/${id}`).then((response) => response.data);
    }

export const updateWaiter = (newWaiter) => {
    return axios.put(`${WAITERS_API_URL}/${newWaiter.id}`, newWaiter);
    }

export const deleteWaiter = (id) => {
    return axios.delete(`${WAITERS_API_URL}/${id}`);
    }

export const createWaiter = (Waiter) => {
    return axios.post(WAITERS_API_URL, Waiter);
    }
    