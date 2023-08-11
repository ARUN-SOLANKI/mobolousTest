import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';

const Login = ({navigation}) => {
  const [inputs, setInputs] = useState({});

  const handleInputs = (value, key) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  return (
    <View style={styles.FormBody}>
      <Header heading="Login" style={styles.heading} />
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
        <Button text="Login" onPress={() => navigation.navigate('Home')} />
        <TextOnlyButton
          onPress={() => navigation.navigate('SignUp')}
          text="new user? sign up instead"
          style={{marginTop: 10}}
        />
        <Text style={styles.textOr}>OR</Text>

        <TextOnlyButton
          onPress={() => navigation.navigate('phone')}
          text="Login With Number"
          style={{marginTop: 10}}
        />
      </View>
    </View>
  );
};

export default Login;
