import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

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
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
