import * as cookService from './cooks_service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const findAllCooksThunk = createAsyncThunk(
    'cooks/findAll', async () => {
    const cooks = await cookService.findAllCooks();
    return cooks;
});

export const findCookByIdThunk = createAsyncThunk(
    'cooks/findById',
    async (id) => {
        const cook = await cookService.findCookById(id);
        return cook;
    }
);

export const updateCookThunk = createAsyncThunk(
    'cooks/update',
    async (cook) => {
        await cookService.updateCook(cook);
        return cook;
    }
);

export const deleteCookThunk = createAsyncThunk(
    'cooks/delete', async (id) => {
    await cookService.deleteCook(id);
    return id;
});

export const createCookThunk = createAsyncThunk(
    'cooks/create',
    async (cook) => {
        await cookService.createCook(cook);
        return cook;
    }
);
