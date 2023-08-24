import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {imagesData} from '../../constant';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <FlatList
        data={imagesData}
        renderItem={({item}) => {
          return (
            <View style={styles.imageCard}>
              <Image source={item.src} style={styles.img} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    padding: 10,
  },
  img: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',

    borderRadius: 5,
  },
  text: {
    color: '#b39373',
  },
  imageCard: {
    borderWidth: 1,
    borderColor: '#ff8000',
    marginBottom: 10,
    borderRadius: 5,
  },

  textContainer: {
    padding: 10,
  },
});
