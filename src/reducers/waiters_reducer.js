import {createSlice} from "@reduxjs/toolkit";
import {findAllWaitersThunk, updateWaiterThunk, deleteWaiterThunk, createWaiterThunk, findWaiterByIdThunk} from "../services/waiters/waiters_thunks";

const initialState = {
    waiters: [],
    loading: false,
    error: null,
    currentWaiter: null,
};

const waitersSlice = createSlice({
    name: "waiters",
    initialState,
    reducers: {},
    extraReducers: {
        [updateWaiterThunk.fulfilled]: (state, action) => {
            state.waiters = state.waiters.map((waiter) => waiter.id === action.payload.id ? action.payload : waiter);
        }
        ,
        [createWaiterThunk.fulfilled]: (state, action) => {
            state.waiters.push(action.payload);
        }
        ,
        [deleteWaiterThunk.fulfilled]: (state, action) => {
            state.waiters = state.waiters.filter((waiter) => waiter.id !== action.payload);
        }
        ,
        [findAllWaitersThunk.pending]: (state, action) => {
            state.loading = true;
            state.waiters = [];
        }
        ,
        [findAllWaitersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.waiters = action.payload;
        }
        ,
        [findAllWaitersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
        ,
        [findWaiterByIdThunk.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [findWaiterByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentWaiter = action.payload;
        }
    }
})
export default waitersSlice.reducer;
