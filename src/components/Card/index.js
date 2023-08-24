import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={{uri: item.url}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

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
  },
  cardTitle: {
    width: '80%',
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
});
