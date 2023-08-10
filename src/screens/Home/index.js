import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import SimmerCard from '../../components/SimmerCard';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const data = await response.json();
      if (data) {
        setData(data);
      }
    }
    getData();
  }, []);

  if (!data.length) {
    return (
      <FlatList
        data={new Array(10)}
        renderItem={() => {
          return <SimmerCard />;
        }}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
