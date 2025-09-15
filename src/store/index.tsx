// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
