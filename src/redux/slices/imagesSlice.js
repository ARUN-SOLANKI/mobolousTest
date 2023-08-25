import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchData} from '../services/fetchdata.sevice';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [],
  },
  reducers: {
    addImage: (state, actions) => {
      state.images = [...state.images, actions.payload];
    },
  },
});

export const {addImage} = imageSlice.actions;

export default imageSlice.reducer;
