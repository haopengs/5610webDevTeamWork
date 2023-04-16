import { createSlice } from "@reduxjs/toolkit";
import { findAllUsersThunk, findUserByIdThunk, updateUserThunk, deleteUserThunk, createUserThunk, findAllUsersByDishIdThunk, loginThunk} from "../services/users/user_thunks";

const initialState = {
    users: [],
    usersByDish:[],
    loading: false,
    error: null,
    currentUser: null,
    oneUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [updateUserThunk.pending]: (state, action) => {
            console.log("pending")
        },
        [updateUserThunk.rejected]: (state, action) => {
            console.log("reject")
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            // state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
            state.currentUser = action.payload;
            
        },
        [createUserThunk.fulfilled]: (state, action) => {
            state.users.push(action.payload);
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        [findAllUsersThunk.pending]: (state, action) => {
            state.loading = true;
            state.users = [];
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [findAllUsersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [findAllUsersByDishIdThunk.pending]: (state, action) => {
            state.loading = true;
            state.usersByDish = [];
        },
        [findUserByIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.oneUser = action.payload;
        },
        [findAllUsersByDishIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.usersByDish = action.payload;
        },
        [loginThunk.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [loginThunk.fulfilled]: (state, action) => {
            // state.users.push(action.payload);
            state.currentUser = action.payload;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.error.message;
            console.log(state.error)

            // console.log(state.currentUser)
            // console.log(state.users)
        },
    }
})
export default usersSlice.reducer;