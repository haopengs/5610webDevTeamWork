import * as dishService from "./dishes_service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllDishsThunk = createAsyncThunk(
    "dishs/findAll", async () => {
    const dishs = await dishService.findAllDishes();
    return dishs;
});

export const findDishByIdThunk = createAsyncThunk(
  "dishs/findById",
  async (id) => {
    const dish = await dishService.findDishById(id);
    return dish;
  }
);

export const updateDishThunk = createAsyncThunk(
    "dishs/update",
    async (dish) => {
        await dishService.updateDish(dish);
        return dish;
    }
);

export const deleteDishThunk = createAsyncThunk(
    "dishs/delete", async (id) => {
    await dishService.deleteDish(id);
    return id;
});

export const createDishThunk = createAsyncThunk(
  "dishs/create",
  async (dish) => {
    await dishService.createDish(dish);
    return dish;
  }
);
