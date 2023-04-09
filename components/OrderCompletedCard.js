import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import driver1  from '../assets/img/driver1.png'
import { DetailsButton, TrackButton } from './Buttons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { TouchableOpacity } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';


const OrderCompletedCard = ({text, handlePress}) => {
  return (
    <View style={styles.containerStyles}>
    {/* header  */}
    <View style={styles.headerWrapper}>
     <View>       
      <Text style={styles.waybillTextStyle}>#WB0402</Text>
      <Text style={styles.itemTextStyle}>Mobile Phone</Text>

  </View>
     <View><Text>1 Package</Text></View>
    </View>

     {/* sender / reciver  */}
    <View style={styles.sRWrapper}>
     {/* senders desc  */}
     <View style={styles.SendersWrapper}>
        <Text style={styles.points}>From:</Text> 
      <View style={styles.iconContainer}>
        <Icon name='pin' size={17} color={COLORS.white} />
       </View>
       <View >       
       <Text style={styles.SRAddressStyles}>Banex plaze, Wuse II, Abuja , NG.</Text>
     </View>
     </View>

     {/* recievers desc  */}
     <View style={[styles.SendersWrapper]}>
        <Text style={styles.points}>To:</Text> 
      <View style={styles.iconContainer}>
        <Icon name='google-maps' size={17} color={COLORS.white} />
       </View>
       <View >       
       <Text style={styles.SRAddressStyles}>Banex plaze, Wuse II, Abuja , NG.</Text>
     </View>
     </View>

     {/* driver  */}
     <View>
      <Text style={styles.driverTitle}>Driver</Text>
      <View style={{alignItems:'center', flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{ flexDirection:'row', columnGap:10,}}>
                <Image source={driver1} />
                <View>
                <Text style={styles.driverName}>AY. James</Text>
                <Text style={styles.driverStatus}>Available</Text>
            </View>
            <View style={styles.callContainer}>
              <IconButton
                icon="phone"
                iconColor={COLORS.primary}
                size={27}
                onPress={() => console.log('Pressed')}
                />
                {/* <Text style={styles.call}>Call</Text> */}
                          
            </View>
        </View>
      </View>
     </View>


    </View>

    {/* buttons  */}
    <View style={styles.btnWrapper}>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>

   </View>
 )
}

export default OrderCompletedCard

const styles = StyleSheet.create({
 containerStyles:{
   width: 334,
   height: 295,
   alignSelf: 'center',
   marginBottom: 11, 
   shadowColor: COLORS.primary,
   borderWidth: 1,
   backgroundColor: COLORS.white,
   borderRadius: 7,
   rowGap:10,
   columnGap:10
 },
 headerWrapper:{
   width: 320 ,
   height: 60,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   alignSelf:'center',
   rowGap:10,
   columnGap:10,
   padding:8
 },
 icon:{
  marginTop: 10,
  marginRight: 10
 },
 descWrapper:{
   width: 300 ,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   alignSelf:'center',
   marginBottom: 8
 },
 waybillTextStyle:{
   fontFamily: FONTS.bold,
   fontSize: SIZES.large,
   lineHeight: SIZES.extraLarge,
   color: COLORS.black
 },
 iconContainer:{
  width: 27,
  height: 22,
  backgroundColor: COLORS.primary,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:4
 },
 itemTextStyle:{
   fontFamily: FONTS.medium,
   fontSize: 11,
   lineHeight: SIZES.medium,
   color: COLORS.black,
   fontStyle: 'normal'
 },
 points:{
  width:25,
  fontFamily: FONTS.semiBold,
  fontSize: SIZES.base,
  lineHeight: SIZES.font,
  color:COLORS.secondary
 },
 sRWrapper:{
   width: 300,
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   alignSelf:'center',
   flexDirection: 'column',
   rowGap: 13,
   justifyContent: 'center',
   marginBottom:21

 },
 SendersWrapper:{ 
   flexDirection: 'row',
   columnGap: 10,
   justifyContent:'center',
   alignItems:'center'
 },
 SRNameStyles:{
   fontFamily: FONTS.semiBold,
   fontSize: SIZES.font,
   lineHeight: SIZES.medium,
   color: COLORS.black,
   fontStyle: 'normal'
 },
 SRAddressStyles:{
   fontFamily: FONTS.regular,
   fontSize: SIZES.font,
   lineHeight: SIZES.extraLarge,
   fontStyle: 'normal',
   color:COLORS.black
 },
 btnWrapper:{
   flexDirection: 'row',
   alignSelf: 'center',
   justifyContent: 'space-between',
   marginBottom:10

 },
 btn:{
  width: 310,
  height:45,
  borderRadius:7,
  height: 45,
  alignItems: 'center'   ,
  justifyContent: 'center',
  backgroundColor:COLORS.primary,
 },
btnText:{
 fontFamily: FONTS.bold,
 fontSize: SIZES.medium,
 lineHeight: SIZES.extraLarge ,
 color: COLORS.white,
},
 driverTitle:{
  fontFamily: FONTS.semiBold,
  fontSize: SIZES.medium,
  lineHeight: SIZES.extraLarge,
  fontStyle: 'normal',
  color:COLORS.black,
 },
 driverName:{
  fontFamily: FONTS.semiBold,
  fontSize: SIZES.medium,
  lineHeight: SIZES.extraLarge,
  fontStyle: 'normal',
  color:COLORS.black,
 },
 driverStatus:{
  fontFamily: FONTS.regular,
  fontSize: SIZES.small,
  lineHeight: SIZES.medium,
  fontStyle: 'normal',
  color:COLORS.primary,
 },
 callContainer:{
  alignItems:'center', 
  justifyContent:'center',
  marginHorizontal: 98,
  // backgroundColor:COLORS.primaryLightBG,
  borderRadius:50,
  width: 50,
  height:40,
 },
 call:{
  
  fontFamily: FONTS.bold,
  fontSize: SIZES.font,
  lineHeight: SIZES.extraLarge,
  fontStyle: 'normal',
  color:COLORS.primary,
 },



})