import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import Lottie from 'lottie-react-native';

import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MyStack from './src/navigator/Stack';

const App = () => {
  const [animationIsVisible, setAnimationIsVisible] = useState(true);
  const ref = useRef(null);
  const opacity = useRef(new Animated.Value(1));
  const progress = useRef(new Animated.Value(0));

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
        <Provider store={store}>
          <View style={styles.container}>
            <MyStack />
          </View>
        </Provider>
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
