import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '../Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({ item, setInventories }) => {

  const handleRemove = async (id) => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    if (user.roles === "dm") {
      Alert.alert("You are not able to change the status. For that You have to change your role")
      return
    }
    const inventories = await JSON.parse(
      await AsyncStorage.getItem('inventories'),
    );
    const updatedInventories = inventories.filter((item) => item.product_id !== id)
    if (updatedInventories.length) {
      await AsyncStorage.setItem('inventories', JSON.stringify(updatedInventories));
      setInventories(updatedInventories)
    }
  }

  const handleAprove = async (id) => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    console.log(user,"----------")
    if (user.roles === "dm") {
      Alert.alert("You are not able to change the status. For that You have to change your role")
      return
    }else{
      const inventories = await JSON.parse(
        await AsyncStorage.getItem('inventories'),
      );
      const updatedInventories = inventories.map((item) => {
        if (item.product_id === id) {
          return { ...item, status: "Approved" }
        } else {
          return item;
        }
      })
      if (updatedInventories.length) {
        await AsyncStorage.setItem('inventories', JSON.stringify(updatedInventories));
        setInventories(updatedInventories)
      }
    }
  }

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
        {item.status == 'Pending' && <Button text="approve" onPress={() => handleAprove(item.product_id)} />}
        <Button text="remove" onPress={() => handleRemove(item.product_id)} />
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
