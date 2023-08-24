import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userApi} from '../services/fetchdata.sevice';

const userApiSlice = createSlice({
  name: 'userApi',
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

export const fetchApiData = createAsyncThunk('userApi', async () => {
  const response = await userApi();
  return response;
});

export const {apiRequest, apiSuccess, apiFailure} = userApiSlice.actions;

export default userApiSlice.reducer;
