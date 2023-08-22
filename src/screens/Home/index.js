import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import data from '../../utils/jsonData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../../components/Card';
import Button from '../../components/Button';

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
      <View style={styles.addInvent}>
        <Button text="Add Inventories" style={{width: '50%'}} />
      </View>
      <FlatList
        data={inventories}
        style={{marginBottom: 100}}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  addInvent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
