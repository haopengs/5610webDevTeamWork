import { createSlice } from "@reduxjs/toolkit";
import { findAllUsersThunk, updateUserThunk, deleteUserThunk, createUserThunk, loginThunk} from "../services/users/user_thunks";

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [updateUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.map((user) =>user.id === action.payload.id ? action.payload : user);
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
        [loginThunk.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [loginThunk.fulfilled]: (state, action) => {
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