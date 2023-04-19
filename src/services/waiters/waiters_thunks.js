import * as waiterService from './waiters_service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const findAllWaitersThunk = createAsyncThunk(
    'waiters/findAll', async () => {
    const waiters = await waiterService.findAllWaiters();
    return waiters;
});

export const findWaiterByIdThunk = createAsyncThunk(
    'waiters/findById',
    async (id) => {
        const waiter = await waiterService.findWaiterById(id);
        return waiter;
    }
);

export const updateWaiterThunk = createAsyncThunk(
    'waiters/update',
    async (waiter) => {
        await waiterService.updateWaiter(waiter);
        return waiter;
    }
);

export const deleteWaiterThunk = createAsyncThunk(
    'waiters/delete', async (id) => {
    await waiterService.deleteWaiter(id);
    return id;
});

export const createWaiterThunk = createAsyncThunk(
    'waiters/create',
    async (waiter) => {
        await waiterService.createWaiter(waiter);
        return waiter;
    }
);
