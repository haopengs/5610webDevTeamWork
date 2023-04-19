import * as employeeService from './employees_service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const findAllEmployeesThunk = createAsyncThunk(
    'employees/findAll',
    async () => {
        const employees = await employeeService.findAllEmployees();
        return employees;
    }
);

export const findEmployeeByIdThunk = createAsyncThunk(
    'employees/findById',
    async (id) => {
        const employee = await employeeService.findEmployeeById(id);
        return employee;
    }
);

export const updateEmployeeThunk = createAsyncThunk(
    'employees/update',
    async (employee) => {
        await employeeService.updateEmployee(employee);
        return employee;
    }
);

export const deleteEmployeeThunk = createAsyncThunk(
    'employees/delete',
    async (id) => {
        await employeeService.deleteEmployee(id);
        return id;
    }
);

export const createEmployeeThunk = createAsyncThunk(
    'employees/create',
    async (employee) => {
        await employeeService.createEmployee(employee);
        return employee;
    }
);
