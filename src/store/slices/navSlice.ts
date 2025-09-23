import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NavState = {
  isOpen: boolean;
};

const initialState: NavState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    setNav: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleNav, setNav } = navSlice.actions;
export default navSlice.reducer;
