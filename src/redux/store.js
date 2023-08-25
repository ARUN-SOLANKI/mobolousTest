import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice.slice';
import apiSlice from './slices/apiSlice';

import userApiSlice from './slices/userApiSlice';
import imagesSlice from './slices/imagesSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    api: apiSlice,
    userApi: userApiSlice,
    images: imagesSlice,
  },
});
