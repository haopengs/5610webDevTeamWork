import { createSlice } from "@reduxjs/toolkit";
import { findAllEmployeesThunk, findEmployeeByIdThunk, updateEmployeeThunk, deleteEmployeeThunk, createEmployeeThunk, findAllEmployeesByDishIdThunk, loginThunk} from "../services/employees/employee_thunks";

const initialState = {
    employees: [],
    employeesByDish:[],
    loading: false,
    error: null,
    currentEmployee: null,
    oneEmployee: null,
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: {
        [updateEmployeeThunk.pending]: (state, action) => {
            console.log("pending")
        },
        [updateEmployeeThunk.rejected]: (state, action) => {
            console.log("reject")
        },
        [updateEmployeeThunk.fulfilled]: (state, action) => {
            // state.employees = state.employees.map((employee) => employee.id === action.payload.id ? action.payload : employee);
            state.currentEmployee = action.payload;
            
        },
        [createEmployeeThunk.fulfilled]: (state, action) => {
            state.employees.push(action.payload);
        },
        [deleteEmployeeThunk.fulfilled]: (state, action) => {
            state.employees = state.employees.filter((employee) => employee.id !== action.payload);
        },
        [findAllEmployeesThunk.pending]: (state, action) => {
            state.loading = true;
            state.employees = [];
        },
        [findAllEmployeesThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        },
        [findAllEmployeesThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export default employeesSlice.reducer;

