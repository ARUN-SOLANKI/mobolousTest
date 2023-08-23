import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkbox = ({label, selected, onSelect}) => (
  <TouchableOpacity style={style.checkboxContainer} onPress={onSelect}>
    <View style={style.checkbox}>
      {selected && <View style={style.checkboxIcon} />}
    </View>
    <Text style={{color: 'black'}}>{label}</Text>
  </TouchableOpacity>
);

const SignUp = ({navigation}) => {
  const [inputs, setInputs] = useState();
  const [errors, setErrors] = useState();
  const [selectedOption, setSelectedOption] = useState('dm');

  const handleCheckboxSelect = option => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleInputs = (value, key) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleSignUp = async () => {
    if (inputs?.email && inputs.user_name && inputs.password) {
      const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
      console.log(users, 'users');

      await AsyncStorage.setItem(
        'users',
        JSON.stringify([
          ...users,
          {
            email: inputs.email,
            user_name: inputs.user_name,
            password: inputs.password,
            roles: selectedOption,
          },
        ]),
      );
      navigation.navigate('Login');
    } else {
      setErrors('All Fields are Mandatory *');
    }
  };

  useEffect(() => {
    if (errors) {
      setTimeout(() => {
        setErrors('');
      }, 3000);
    }
  }, [errors]);

  return (
    <View style={styles.FormBody}>
      <Header heading="Register Here" style={styles.heading} />
      {errors && <Text style={styles.err}>{errors}</Text>}
      <Input
        label="User Name"
        placeholder="User Name"
        onChangeText={e => {
          handleInputs(e, 'user_name');
        }}
      />
      <Input
        label="Email"
        placeholder="Email"
        onChangeText={e => {
          handleInputs(e, 'email');
        }}
      />

      <Input
        label="password"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={e => {
          handleInputs(e, 'password');
        }}
      />
      <Text style={{color: 'black', marginTop: 30}}>Roles</Text>
      <View style={{flexDirection: 'row', gap: 30, marginTop: 10}}>
        <Checkbox
          label="DM"
          selected={selectedOption === 'dm'}
          onSelect={() => handleCheckboxSelect('dm')}
        />
        <Checkbox
          label="SM"
          selected={selectedOption === 'sm'}
          onSelect={() => handleCheckboxSelect('sm')}
        />
        <Checkbox
          label="Both"
          selected={selectedOption === 'both'}
          onSelect={() => handleCheckboxSelect('both')}
        />
      </View>

      <View style={styles.flexCenter}>
        <Button
          text="Sign Up"
          onPress={() => {
            handleSignUp();
          }}
        />
        <TextOnlyButton
          text=" already a user? login instead"
          style={{marginTop: 10}}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 12,
    height: 12,
    backgroundColor: 'black',
  },
});

export default SignUp;
