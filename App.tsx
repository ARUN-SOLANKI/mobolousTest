import { StyleSheet, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'

import { store } from './src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Home />
    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1
  }
})