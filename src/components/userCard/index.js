import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function UserCard({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{uri: item.image}} />
      </View>
      <View style={styles.txtCont}>
        <Text style={styles.txt}>
          {' '}
          <Text style={styles.spantxt}>Name:</Text> {item.username}
        </Text>
        <Text style={styles.txt}>
          {' '}
          <Text style={styles.spantxt}>Phone:</Text>
          {item.phone}
        </Text>
        <Text style={styles.txt}>
          {' '}
          <Text style={styles.spantxt}>email:</Text> {item.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#8c7373',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  txt: {
    color: '#ff6666',
    textAlign: 'justify',
    marginTop: 10,
  },
  img: {
    height: 100,
    width: '100%',
  },
  imgCont: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 50,
    overflow: 'hidden',
  },
  txtCont: {
    width: '50%',
  },
  spantxt: {
    color: 'orange',
  },
});
