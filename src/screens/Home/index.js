import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchApiData} from '../../redux/slices/userApiSlice';
import UserCard from '../../components/userCard';
import UserSimmerCard from '../../components/userSiimmerCard';

const Home = () => {
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.userApi);

  if (!data) {
    return (
      <View>
        <FlatList
          initialNumToRender={10}
          data={data?.users}
          renderItem={({item}) => {
            return <UserSimmerCard />;
          }}
        />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={data?.users}
        renderItem={({item}) => {
          return <UserCard item={item} />;
        }}
      />
    </View>
  );
};

export default Home;
