import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice.slice';
import apiSlice from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    api: apiSlice,
  },
});
