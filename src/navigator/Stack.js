import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import PhoneSignIn from '../screens/PhoneSignIn';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();
const authStack = createStackNavigator();

function authStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="phone" component={PhoneSignIn} />
    </Stack.Navigator>
  );
}

export default function MyStack({userInfo}) {
  return (
    <Stack.Navigator>
      {!userInfo.isOnboard && (
        <Stack.Screen
          name="onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      )}
      {!userInfo.isLoggedIn && (
        <Stack.Screen
          name="authStack"
          component={authStackNav}
          options={{headerShown: false}}
        />
      )}

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
