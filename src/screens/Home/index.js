import {View, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';

const Home = ({route}) => {
  const {selectedImage} = route.params || {};
  const {images} = useSelector(state => state.images);
  console.log(images, 'gasgag');

  return (
    <>
      <View>
        <FlatList
          data={images}
          renderItem={({item}) => {
            console.log(item.uri, 'uri');
            return (
              <View style={styles.container}>
                <Image style={styles.img} source={{uri: item.uri}} />
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  img: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default Home;
