import { createSlice } from "@reduxjs/toolkit";
import { findAllDishsThunk, updateDishThunk, deleteDishThunk, createDishThunk, findDishByIdThunk} from "../services/dishes/dishes_thunks";

const initialState = {
  dishes: [],
  loading: false,
  error: null,
  currentDish: null,
};

const dishesSlice = createSlice({
    name: "dishes", 
    initialState, 
    reducers: {},
    extraReducers: {
        [updateDishThunk.fulfilled]: (state, action) => {
            state.dishes = state.dishes.map((dish) =>dish.id === action.payload.id ? action.payload : dish);
        },
        [createDishThunk.fulfilled]: (state, action) => {
            state.dishes.push(action.payload);
        },
        [deleteDishThunk.fulfilled]: (state, action) => {
            state.dishes = state.dishes.filter((dish) => dish.id !== action.payload);
        },
        [findAllDishsThunk.pending]: (state, action) => {
            state.loading = true;
            state.dishes = [];
        },
        [findAllDishsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.dishes = action.payload;
        },
        [findAllDishsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        // [findDishByKeyWordThunk.pending]: (state, action) => {
        //     state.loading = true;
        //     state.dishes = [];
        // },
        // [findDishByKeyWordThunk.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.dishes = action.payload;
        // },
        // [findDishByKeyWordThunk.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message;
        // },
        [findDishByIdThunk.pending]: (state, action) => {
            state.loading = true;
        },
        [findDishByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentDish = action.payload;
        },
    }
})
export default dishesSlice.reducer;