import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({heading, style}) => {
  return (
    <View>
      <Text style={[styles.headingText, style]}>{heading}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff8000',
    textAlign: 'center',
  },
});
