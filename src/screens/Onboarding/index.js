import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {onboardingData} from '../../constant';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = ({navigation}) => {
  const [onboard, setOnBoard] = useState(0);
  const [data, setdata] = useState(onboardingData[onboard]);

  useEffect(() => {
    setdata(onboardingData[onboard]);
  }, [onboard]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Onboarding</Text>

        <View>
          <Image source={data.src} style={styles.onImg} resizeMode="cover" />
          <Text style={styles.desc}>{data.text}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          text="Prev"
          disabled={!!(onboard == 0)}
          onPress={() => {
            if (onboard !== 0) {
              setOnBoard(onboard - 1);
            }
          }}
        />
        <Button
          text="Next"
          onPress={async () => {
            if (onboard == onboardingData.length - 1) {
              await AsyncStorage.setItem('onboarding', 'true');
              navigation.navigate('authStack');
            } else {
              setOnBoard(onboard + 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  desc: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  onImg: {
    height: 400,
    width: '100%',
    objectFit: 'cover',
    borderRadius: 10,
    marginVertical: 15,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
