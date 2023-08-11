import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import SimmerCard from '../../components/SimmerCard';

import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../../redux/slices/apiSlice';

const Home = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/photos',
  //     );
  //     const data = await response.json();
  //     if (data) {
  //       setData(data);
  //     }
  //   }
  //   getData();
  // }, []);

  useEffect(() => {
    console.log("calll1111111")
    dispatch(fetchApiData());
  }, [dispatch]);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);

  console.log(data , loading , error , "========")


  if (!data) {
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
