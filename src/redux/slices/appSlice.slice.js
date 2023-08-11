import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  users : [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    signup: (state) => {
      state.users.push(state)
    },
  },
})

export const { signup, } = appSlice.actions

export default appSlice.reducer