import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import OrderCompletedCard from '../components/OrderCompletedCard'
import thumb from '../assets/img/thumb.png'
import { SafeAreaView } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const {width, height} = Dimensions.get('window');
const PaymentSuccess = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        {/* mssage  */}
      <View style={{ height: height*.30}}>
        <View style={styles.imageContainer}> 
          <Image source={thumb} style={styles.thumb} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your payment was successful!</Text>
          <Text style={styles.message}>You can now track your order and get
            real time update of your package</Text>
        </View>
      </View>
      <OrderCompletedCard handlePress={() => navigation.navigate('Track')} text='Track Package Status'/>

      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Order')}
        style={styles.plainBtn}>
          <Text style={styles.btnText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

  export default PaymentSuccess;

  const styles = StyleSheet.create({
    container:{
      backgroundColor: COLORS.white
    },
    imageContainer:{
      justifyContent:'center',
      alignItems:'center',
      height: height*.15
    },
    thumb:{},
    textContainer:{
      width: 300,
      alignItems:'center',
      alignSelf:'center'
    },
    title:{
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.medium,
      lineHeight: SIZES.extraLarge,
      fontStyle: 'normal',
      fontWeight: '500',
      color:COLORS.black,
    },
    message:{
      width: 227,
      textAlign:'center',
      fontFamily: FONTS.regular,
      fontSize: SIZES.font,
      lineHeight: SIZES.large,
      fontStyle: 'normal',
      fontWeight: '500',
      color:COLORS.secondary,
    },
    plainBtn:{
      height: height * .20,
      justifyContent:'center',
      alignItems:'center'
    },
    btnText:{
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.medium,
      lineHeight: SIZES.extraLarge,
      fontStyle: 'normal',
      fontWeight: '500',
      color:COLORS.black,
    },
    

  })