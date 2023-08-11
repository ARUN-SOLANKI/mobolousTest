import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { onboardingData } from '../../constant'
import Button from '../../components/Button'

const Onboarding = ({navigation}) => {

  const [onborad , setOnBoard]= useState(0)
  const [data, setdata] = useState(onboardingData[onborad])

  useEffect(() => {
    setdata(onboardingData[onborad])
  }, [onborad])
  

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
        <Button text="Prev" disabled={!!(onborad ==0)} onPress={()=>{
          if(onborad !==0 ){
            setOnBoard(onborad - 1)
          } 
        }}/>
        <Button text="Next" onPress={()=>{
          if(onborad == onboardingData.length-1){
            navigation.navigate('Login')
          }else{
            setOnBoard(onborad + 1)
          } 
        }} />
      </View>
    </View>
  )
}

export default Onboarding


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingBottom:20
  },
  desc:{
    fontSize:18,
    fontWeight:'600'
  },
  heading:{
    fontSize:25,
    textAlign:'center',
    marginVertical:10
  },
  onImg:{
    height:400,
    width:'100%',
    objectFit:"cover",
    borderRadius:10,
    marginVertical:15
  },
  btnContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})