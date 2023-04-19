import { createSlice } from "@reduxjs/toolkit";
import { findAllCooksThunk, updateCookThunk, deleteCookThunk, createCookThunk } from "../services/cooks/cooks_thunks";

const initialState = {
    cooks: [],
    loading: false,
    error: null,
    currentCook: null,
};

const cooksSlice = createSlice({
    name: "cooks",
    initialState,
    reducers: {},
    extraReducers: {
        [updateCookThunk.fulfilled]: (state, action) => {
            state.cooks = state.cooks.map((cook) => cook.id === action.payload.id ? action.payload : cook);
        },
        [createCookThunk.fulfilled]: (state, action) => {
            state.cooks.push(action.payload);
        },
        [deleteCookThunk.fulfilled]: (state, action) => {
            state.cooks = state.cooks.filter((cook) => cook.id !== action.payload);
        },
        [findAllCooksThunk.pending]: (state, action) => {
            state.loading = true;
            state.cooks = [];
        },
        [findAllCooksThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.cooks = action.payload;
        },
        [findAllCooksThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
})
export default cooksSlice.reducer;

