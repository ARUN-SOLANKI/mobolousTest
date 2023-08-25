import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Onboarding from '../screens/Onboarding';
import BottomNavigator from './BottomNavigator';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function MyStack() {
  const [userInfo, setUserInfo] = useState({});
  const {isLoggedIn} = useSelector(state => state.app);

  useEffect(() => {
    const userinput = async () => {
      const isLoggedIn = await AsyncStorage.getItem('user');
      const isOnboard = await AsyncStorage.getItem('onboarding');
      setUserInfo({
        isLoggedIn: JSON.parse(isLoggedIn),
        isOnboard,
      });
    };
    userinput();
  }, [isLoggedIn]);

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
