import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {styles} from '../commonStyle';
import Input from '../../components/Input';
import Button, {TextOnlyButton} from '../../components/Button';

const SignUp = () => {
  const [inputs , setInputs] = useState();

  const handleInputs = (value , key) =>{
    setInputs({
      ...inputs,
      [key] : value
    })
  }



  return (
    <View style={styles.FormBody}>
      <Header heading="Register Here" style={styles.heading} />
      <Input label="User Name" placeholder="User Name" onChangeText={e => {handleInputs(e , "user_name")}} />
      <Input label="Email" placeholder="Email" onChangeText={e => {handleInputs(e , "email")}} />

      <Input
        label="password"
        placeholder="Password"
        secureTextEntry={true}  
        onChangeText={e => {handleInputs(e , "password")}}
      />

      <View style={styles.flexCenter}>
        <Button text="Sign Up" onPress={()=>{}} />
        <TextOnlyButton
          text=" already a user? login instead"
          style={{marginTop: 10}}
          onPress={()=>{}}
        />
      </View>
    </View>
  );
};

export default SignUp;

