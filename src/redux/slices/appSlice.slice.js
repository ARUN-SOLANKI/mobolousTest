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
      state.users = [...state.users, actions.payload];
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
