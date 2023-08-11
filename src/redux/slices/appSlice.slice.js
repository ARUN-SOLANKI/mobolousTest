import { CommonActions } from '@react-navigation/native';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  users : [],
  loginUser:{},
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    signup: (state , actions) => {
      state.users = [...state.users , actions.payload]
    },
    loginRed:(state , actions) => {
      const { email, password, navigation } = actions.payload;
        state.users.forEach((item)=>{
          const user = state.users.find((item) => item.email === email && item.password === password);
          if(user){
            state.loginUser = { user };
              navigation.dispatch(
          CommonActions.navigate({
            name: 'Home',
          })
        );
          }{
            state.loginUser = {error : "user is not registered !!"}
          }
        })
    }
  },
})

export const { signup, loginRed } = appSlice.actions

export default appSlice.reducer