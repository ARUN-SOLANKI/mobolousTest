import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState('');

  const handleInputs = (value, key) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleLogin = async () => {
    if (inputs.email && inputs.password) {
      const users = JSON.parse(await AsyncStorage.getItem('users'));

      if (users.length) {
        const user = users.find(
          item =>
            item.email === inputs.email && item.password === inputs.password,
        );
        if (user) {
          console.log(user);
          AsyncStorage.setItem('user', JSON.stringify(user));
          navigation.navigate('Home');
        } else {
          setErrors('user is not registered or incorrect email and password');
        }
      } else {
        setErrors('no user found...');
      }
    } else {
      setErrors('Please enter email or password');
    }
  };

  return (
    <View style={styles.FormBody}>
      <Header heading="Login" style={styles.heading} />
      {errors && <Text style={styles.err}>{errors}</Text>}
      <Input
        label="Email"
        placeholder="Email"
        value={inputs.email}
        onChangeText={e => {
          handleInputs(e, 'email');
        }}
      />

      <Input
        label="password"
        placeholder="Password"
        secureTextEntry={true}
        value={inputs.password}
        onChangeText={e => {
          handleInputs(e, 'password');
        }}
      />

      <View style={styles.flexCenter}>
        <Button text="Login" onPress={() => handleLogin()} />
        <TextOnlyButton
          onPress={() => navigation.navigate('SignUp')}
          text="new user? sign up instead"
          style={{marginTop: 10}}
        />
      </View>
    </View>
  );
};

export default Login;
