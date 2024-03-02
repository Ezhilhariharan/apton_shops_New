import { createSlice } from '@reduxjs/toolkit';

import { campaignTableHeaderList } from '../constant/app/campaign/campaign';

const initialState = {
  switchingComponents: 'Calender',
  tabList: [{ id: 1, tabName: 'campaignList' }],
  activeTab: 'campaignList',
  tableColumn: campaignTableHeaderList,
  selectedCampaignCount: 0,
  selectedCampaignFilter: 'Ongoing',
  templatePreview: {},
  taskTitle: `Task ${Math.ceil(Math.random())}`,
  savedTaskId: '',
};

export const authSlice = createSlice({
  name: 'Campaign',
  initialState,
  reducers: {
    updateComponentsSwitching: (state, action) => {
      state.switchingComponents = action.payload;
    },
    updateTabList: (state, action) => {
      state.tabList = action.payload;
    },
    updateActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    updateTabColumn: (state, action) => {
      state.tableColumn = action.payload;
    },
    updateCampaignCount: (state, action) => {
      state.selectedCampaignCount = action.payload;
    },
    updateSelectedCampaignFilter: (state, action) => {
      state.selectedCampaignFilter = action.payload;
    },
    updateTemplatePreview: (state, action) => {
      state.templatePreview = action.payload;
    },
    updateTaskTitle: (state, action) => {
      state.taskTitle = action.payload;
    },
    updateSavedTaskId: (state, action) => {
      state.savedTaskId = action.payload;
    },
  },
});

export const {
  updateComponentsSwitching,
  updateTabList,
  updateActiveTab,
  updateTabColumn,
  updateCampaignCount,
  updateSelectedCampaignFilter,
  updateTemplatePreview,
  updateTaskTitle,
  updateSavedTaskId,
} = authSlice.actions;

export default authSlice.reducer;
