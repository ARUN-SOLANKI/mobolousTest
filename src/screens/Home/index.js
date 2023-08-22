import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import data from '../../utils/jsonData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    const getInventories = async () => {
      const invent = await JSON.parse(
        await AsyncStorage.getItem('inventories'),
      );
      setInventories(invent);
    };
    getInventories();
  }, []);
  console.log(inventories, 'gsdgsr');

  if (loader) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <Text style={{color: 'black'}}>index</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
