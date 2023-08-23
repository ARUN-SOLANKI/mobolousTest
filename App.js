import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import Lottie from 'lottie-react-native';

import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigator/Stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './src/utils/jsonData';

const App = () => {
  const [animationIsVisible, setAnimationIsVisible] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const ref = useRef(null);
  const opacity = useRef(new Animated.Value(1));
  const progress = useRef(new Animated.Value(0));
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
  }, []);
  useEffect(() => {
    const storeData = async () => {
      const inventories = JSON.parse(await AsyncStorage.getItem('inventories'));
      if (!inventories) {
        await AsyncStorage.setItem('inventories', JSON.stringify(data));
      }
    };
    storeData();
  });

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      if (!progress.current) {
        return null;
      }

      Animated.sequence([
        Animated.timing(progress.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 2000,
          easing: Easing.ease,
        }),
        Animated.timing(opacity.current, {
          delay: 250,
          toValue: 0,
          useNativeDriver: true,
          duration: 250,
          easing: Easing.in(Easing.ease),
        }),
      ]).start(() => {
        setAnimationIsVisible(false);
      });
    }, 500);
    return () => {
      clearTimeout(unsubscribe);
    };
  }, []);
  return (
    <>
      <NavigationContainer>
          <View style={styles.container}>
            <MyStack userInfo={userInfo} />
          </View>
      </NavigationContainer>
      {animationIsVisible && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: opacity.current,
            },
          ]}>
          <Lottie
            ref={ref}
            source={require('./src/image/splash01.json')}
            loop={false}
            progress={progress.current}
            resizeMode="cover"
          />
        </Animated.View>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
