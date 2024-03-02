import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelList: [],
  whatsUpAuthData: {},
  templateDetails: { category: '', templateName: '' },
};

export const slice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    updateChannelList: (state, action) => {
      state.channelList = action.payload;
    },
    updateWhatsUpData: (state, action) => {
      state.whatsUpAuthData = action.payload;
    },
    updateTemplateDetails: (state, action) => {
      state.templateDetails = action.payload;
    },
  },
});

export const { updateChannelList, updateWhatsUpData, updateTemplateDetails } = slice.actions;

export default slice.reducer;
