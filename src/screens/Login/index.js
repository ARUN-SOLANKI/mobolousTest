import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {loginRed, resetLogin} from '../../redux/slices/appSlice.slice';

const Login = ({navigation}) => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const {isLoggedIn, error} = useSelector(state => state.app);
  const handleInputs = (value, key) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleLogin = () => {
    dispatch(loginRed(inputs, navigation));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
      dispatch(resetLogin());
    }
    if (error) {
      setTimeout(() => {
        dispatch(resetLogin());
      }, 4000);
    }
  }, [isLoggedIn, error, dispatch, navigation]);

  return (
    <View style={styles.FormBody}>
      <Header heading="Login" style={styles.heading} />
      {error && <Text>{error}</Text>}
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
