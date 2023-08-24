import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SimmerCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}></View>
      <View style={styles.textContainer}>
        <View style={styles.cardTitle1}></View>
        <View style={styles.cardTitle2}></View>
      </View>
    </View>
  );
};

export default SimmerCard;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#808080',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  cardImage: {
    height: 70,
    width: 70,
    backgroundColor: '#ccc',
  },
  textContainer: {
    width: '70%',
    marginLeft: 10,
  },
  cardTitle1: {
    width: '90%',
    height: 20,
    backgroundColor: '#ccc',
  },
  cardTitle2: {
    width: '50%',
    height: 20,
    backgroundColor: '#ccc',
    marginTop: 10,
  },
});
