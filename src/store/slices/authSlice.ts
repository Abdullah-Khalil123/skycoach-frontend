import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'next-auth';

type AuthState = {
  user: User | null;
  accessToken: string | null;
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated';
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.status = 'authenticated';
    },
    clearCredentials: (state) => {
      state.user = null;
      state.accessToken = null;
      state.status = 'unauthenticated';
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
