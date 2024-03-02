import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prevMonth: false,
  nextMonth: false,
  prevWeek: false,
  nextWeek: false,
};

export const authSlice = createSlice({
  name: 'Calendar',
  initialState,
  reducers: {
    getPrevMonth: (state, action) => {
      state.prevMonth = action.payload;
    },
    getNextMonth: (state, action) => {
      state.nextMonth = action.payload;
    },
    getPrevWeek: (state, action) => {
      state.prevWeek = action.payload;
    },
    getNextWeek: (state, action) => {
      state.nextWeek = action.payload;
    },
  },
});

export const { getPrevMonth, getNextMonth, getPrevWeek, getNextWeek } = authSlice.actions;

export default authSlice.reducer;
