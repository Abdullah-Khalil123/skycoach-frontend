// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import navSlice from './slices/navSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    navSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
