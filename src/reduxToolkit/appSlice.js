import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggleToast: [],
  currentUser: {},
  currentBrand: '',
  globalLoader: false,
};

export const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateToggleToast: (state, action) => {
      state.toggleToast = action.payload;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateCurrentBrand: (state, action) => {
      state.currentBrand = action.payload;
    },
    updateGlobalLoader: (state, action) => {
      state.globalLoader = action.payload;
    },
  },
});

export const { updateToggleToast, updateCurrentUser, updateCurrentBrand, updateGlobalLoader } =
  authSlice.actions;

export default authSlice.reducer;
