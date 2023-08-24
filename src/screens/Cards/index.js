import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import SimmerCard from '../../components/SimmerCard';

import {useDispatch, useSelector} from 'react-redux';
import {fetchApiData} from '../../redux/slices/apiSlice';

const Cards = () => {
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.api);

  if (!data) {
    return (
      <FlatList
        data={new Array(10)}
        initialNumToRender={10}
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

export default Cards;

const styles = StyleSheet.create({});
