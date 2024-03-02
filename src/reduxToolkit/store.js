import { configureStore, combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore } from 'redux-persist';

import app from './appSlice';
import auth from './authSlice';
import dashBoard from './dashboardSlice';
import Calendar from './calendarSlice';
import Campaign from './CampaignSlice';
import Channel from './channelSlice';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['app', 'authentication', 'Campaign'],
};

const rootReducer = combineReducers({
  authentication: auth,
  dashBoard: dashBoard,
  Calendar: Calendar,
  Campaign: Campaign,
  app: app,
  Channel: Channel,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
