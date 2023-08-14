import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loginUser: {},
  isLoggedIn: false,
  error: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    signup: (state, actions) => {
      //   const {user_name, email, password} = actions.payload;
      // if (user_name && email && password) {

      state.users = [...state.users, actions.payload];
      // } else {
      //   state.error = 'All Fields are Mandatory *';
      // }
    },
    loginRed: (state, actions) => {
      const {email, password} = actions.payload;

      if (state.users.length) {
        state.users.forEach(item => {
          const user = state.users.find(
            item => item.email === email && item.password === password,
          );
          if (user) {
            state.loginUser = {user};
            AsyncStorage.setItem('user', JSON.stringify(user));
            state.isLoggedIn = true;
          } else {
            state.error =
              'user is not registered or incorrect email and password';
          }
        });
      } else {
        state.error = 'user is not registered or incorrect email and password';
      }
    },
    resetLogin: state => {
      state.isLoggedIn = false;
      state.error = false;
    },
  },
});

export const {signup, loginRed, resetLogin} = appSlice.actions;

export default appSlice.reducer;
