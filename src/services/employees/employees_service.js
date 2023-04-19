import axios from "axios";
const EMPLOYEES_API_URL = "http://localhost:4000/api/employees";

export const findAllEmployees = async () => {
    const response = await axios.get(EMPLOYEES_API_URL);
    return response.data;
    }

export const findEmployeeById = (id) => {
    return axios.get(`${EMPLOYEES_API_URL}/${id}`).then((response) => response.data);
    }

export const updateEmployee = (newEmployee) => {
    return axios.put(`${EMPLOYEES_API_URL}/${newEmployee.id}`, newEmployee);
    }
    
export const deleteEmployee = (id) => {
    return axios.delete(`${EMPLOYEES_API_URL}/${id}`);
    }

export const createEmployee = (Employee) => {
    return axios.post(EMPLOYEES_API_URL, Employee);
    }
    