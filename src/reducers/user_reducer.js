import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    registerThunk,
    profileThunk,
    updateUserThunk,
} from "../user/user_thunks";

const initialState = {
    currentUser: null,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

export default userSlice.reducer;