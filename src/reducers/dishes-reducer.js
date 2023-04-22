import { createSlice } from "@reduxjs/toolkit";
import {
  findAllDishesThunk,
  updateDishThunk,
  deleteDishThunk,
  createDishThunk,
  findDishByIdThunk,
  findDishByKeywordThunk,
} from "../services/dishes/dishes-thunks";

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
      state.dishes = state.dishes.map((dish) =>
        dish.id === action.payload.id ? action.payload : dish
      );
    },
    [createDishThunk.fulfilled]: (state, action) => {
      state.dishes.push(action.payload);
    },
    [deleteDishThunk.fulfilled]: (state, action) => {
      state.dishes = state.dishes.filter((dish) => dish.id !== action.payload);
    },
    [findAllDishesThunk.pending]: (state, action) => {
      state.loading = true;
      state.dishes = [];
    },
    [findAllDishesThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.dishes = action.payload;
    },
    [findAllDishesThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [findDishByKeywordThunk.pending]: (state, action) => {
      state.loading = true;
      state.dishes = [];
    },
    [findDishByKeywordThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.dishes = action.payload;
    },
    [findDishByKeywordThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [findDishByIdThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findDishByIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentDish = action.payload;
    },
  },
});
export default dishesSlice.reducer;
