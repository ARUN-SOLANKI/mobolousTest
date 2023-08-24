import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function UserSimmerCard() {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}></View>
      <View style={styles.txtCont}>
        <View style={styles.txt}></View>
        <View style={styles.txt}></View>
        <View style={styles.txt}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#8c7373',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  txt: {
    backgroundColor: 'grey',
    width: 200,
    height: 20,
    marginTop: 10,
  },

  imgCont: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 50,
    overflow: 'hidden',
  },
});
