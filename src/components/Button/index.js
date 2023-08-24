import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button({text, style, onPress, ...props}) {
  return (
    <TouchableOpacity
      style={[styles.submitForm, style]}
      onPress={onPress}
      {...props}>
      <Text style={styles.submitText}>{text}</Text>
    </TouchableOpacity>
  );
}

export function TextOnlyButton({text, style, onPress}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.signUpOnLoginText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  submitForm: {
    backgroundColor: '#ff8000',
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 120,
    textAlign: 'center',
  },
  submitText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: '#ff8000',
  },
});
