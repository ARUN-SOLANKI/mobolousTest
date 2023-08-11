import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MyStack from './src/navigator/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <MyStack />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
