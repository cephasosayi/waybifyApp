import { View, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import  FocusedStatusBar from '../components/FocusedStatusBar';
import {onboardScreenImg4} from '../constants/assets';
import { COLORS, FONTS, SIZES } from '../constants/theme';
const {width, height} = Dimensions.get('window');
import { Text } from 'react-native-paper';
import { phoneIcon } from '../constants/assets';
// import {AsyncStorage} from 'react-native';
import { Button } from 'react-native-paper';


const Onboard = () => {
//   const completeOnboarding = async () =>{
//     await AsyncStorage.setItem('hasOnboard', JSON.stringify({
        // hasOnboarded: true
//     }));
//     // Navigation if onboarded 
//     navigation.replace('Order')
// }
  return (
    <SafeAreaView style={ styles.onBoardCOntainer}>
      <FocusedStatusBar  barStyle='light-content' translucent={true}
      backgroundColor={ COLORS.white}/>
      <View style={ styles.imageContainer}>
        <Image source={onboardScreenImg4} style={styles.image} />
      </View>

      <View style={ styles.infoContainer}>
        <Text style={styles.title}>Professional Service</Text>
        <Text style={styles.subtitle}>Ship and track packages and communicate with drivers on the go.</Text>
      </View>

      <View style={ styles.btnContainer}>
      <Button icon={phoneIcon} style={styles.phoneButtonStyle} 
     labelStyle={[ styles.lableStyles, { color: COLORS.white}]}  size={30} mode="contained" onPress={() => console.log('Pressed')}>
      Contine with Phone 
  </Button>

  <Button icon="gmail" style={styles.googleButtonStyle}
   labelStyle={[ styles.lableStyles, { color: COLORS.black}]} mode="Outlined" textColor={COLORS.black} onPress={() => console.log('Pressed')}>
      Contine with Google
  </Button>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 140, flexDirection: 'row'}}>
        <Text style={styles.ifsignInActionText}>Already have Account ?</Text>

      <Button mode='text' labelStyle={styles.signInStyle}  onPress={() => console.log('Pressed')}>Sign in</Button>

      </View>
      
    </SafeAreaView>
  )
}

export default Onboard

const styles = StyleSheet.create({
  onBoardCOntainer:{},
  infoContainer:{
    // flex: 1,
    justifyContent: 'center',
    height: height * .25,
    alignItems: 'center'
  },
  title:{
    fontFamily: FONTS.bold,
    fontWeight: 600,
    fontSize: SIZES.extraLarge,
    lineHeight: 33,
  },
  subtitle:{
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
    lineHeight: 19.5,
    textAlign: 'center',
    width: 300,
    marginTop: 10,
    color: COLORS.gray
  },
  btnContainer:{
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center'  ,
   
  },
  phoneButtonStyle:{
    flex: 1,
    width: 280,
    height: 52,
    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent:'center',
    position: 'absolute'

  },
  googleButtonStyle:{
    flex: 1,
    width: 280,
    height:52,
    borderRadius: SIZES.base,
    alignItems: 'center',
    justifyContent:'center',
    position: 'absolute',
    marginVertical: 70,
    borderColor: COLORS.secondary,
    borderWidth:2,
  },
  lableStyles:{
    fontFamily: FONTS.semiBold,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.extraLarge,
  },
  ifsignInActionText:{
    fontFamily: FONTS.regular,
        color: COLORS.black ,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: SIZES.small,
        lineHeight: SIZES.large,
  },
  signInStyle:{
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
  image:{
    width,
    height: height * .50
  }
})