import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchData} from '../services/fetchdata.sevice';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchApiData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const fetchApiData = createAsyncThunk('api', async () => {
  const response = await fetchData();
  return response;
});

export const {apiRequest, apiSuccess, apiFailure} = apiSlice.actions;

export default apiSlice.reducer;
