import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: 1,
};

export const authSlice = createSlice({
  name: 'dashBoard',
  initialState,
  reducers: {
    updateSteps: (state, action) => {
      state.steps = action.payload;
    },
  },
});

export const { updateSteps } = authSlice.actions;

export default authSlice.reducer;
