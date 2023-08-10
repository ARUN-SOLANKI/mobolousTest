import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <SignUp />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1
  }
})