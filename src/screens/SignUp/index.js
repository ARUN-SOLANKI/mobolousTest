import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../redux/slices/appSlice.slice';

const SignUp = ({navigation}) => {
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();

  const data = useSelector(state => state);

  console.log(data, '++++++++');

  const handleInputs = (value, key) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleSignUp = () => {
    dispatch(signup(inputs));
  };


  return (
    <View style={styles.FormBody}>
      <Header heading="Register Here" style={styles.heading} />
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

      <View style={styles.flexCenter}>
        <Button
          text="Sign Up"
          onPress={() => {
            handleSignUp();
            navigation.navigate('Login');
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

export default SignUp;
