import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../Button';

const Card = ({item}) => {
  console.log(item, '++++++++');
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.cardTitle}>batch_date : {item.batch_date}</Text>
      <Text style={styles.cardTitle}>batch_num : {item.batch_num}</Text>
      <Text style={styles.cardTitle}>product_id : {item.product_id}</Text>
      <Text style={styles.cardTitle}>product_name: {item.product_name}</Text>
      <Text style={styles.cardTitle}>quantity : {item.quantity}</Text>
      <Text style={styles.cardTitle}>vendor : {item.vendor}</Text>
      <Text style={styles.cardTitle}>Status : {item.status}</Text>
      <View style={styles.buttonContainer}>
        {item.status == 'Pending' && <Button text="approve" />}
        <Button text="remove" />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    marginVertical: 10,
    backgroundColor: '#000',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  cardImage: {
    height: 70,
    width: 70,
  },
  cardTitle: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
});
