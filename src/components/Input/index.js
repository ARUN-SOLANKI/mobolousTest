import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({
  label,
  onTextChange,
  placeholder,
  style,
  secureTextEntry,
  ...props
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.formInputs, style]}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
        {...props}
        placeholderTextColor={'black'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formInputs: {
    borderColor: '#cccccc',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
    height: 42,
    color: 'black',
  },
  label: {
    marginTop: 10,
    color: 'black',
  },
});
