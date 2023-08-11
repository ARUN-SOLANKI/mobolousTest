import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import PhoneSignIn from '../screens/PhoneSignIn';

// import Splash from '../screens/Splash';
const Stack = createStackNavigator();
export default function MyStack() {
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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
