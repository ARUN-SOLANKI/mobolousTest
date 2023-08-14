// import React, { useState, useEffect } from 'react';
// // import auth from '@react-native-firebase/auth';
// import Input from '../../components/Input';
// import { Button } from '../../components/Button';

// function PhoneSignIn() {

import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {styles} from '../commonStyle';
import {View} from 'react-native';

const PhoneSignIn = () => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [mobile, setMobile] = useState('');

  //   // function onAuthStateChanged(user) {
  //   //   if (user) {
  //   //     navigation.navigate('home')
  //   //   }
  //   // }

  //   // useEffect(() => {
  //   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   //   return subscriber; // unsubscribe on unmount
  //   // }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    // const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    // setConfirm(confirmation);
  }

  async function confirmCode() {
    // try {
    //   await confirm.confirm(code);
    // } catch (error) {
    //   console.log('Invalid code.');
    // }
  }
  if (!confirm) {
    return (
      <View style={styles.otpPage}>
        <Input
          placeholder="mobile number"
          onTextChange={text => setMobile(text)}
        />
        <View style={styles.flexCenter}>
          <Button
            text="Phone Number Sign In"
            style={{width: '80%'}}
            onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.otpPage}>
      <Input
        placeholder="OTP"
        value={code}
        onChangeText={text => setCode(text)}
      />
      <View style={styles.flexCenter}>
        <Button
          style={{width: '80%'}}
          text="Confirm Code"
          onPress={() => confirmCode()}
        />
      </View>
    </View>
  );
};

export default PhoneSignIn;
