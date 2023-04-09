import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import OrderStatus from './OrderStatus'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { DetailsButton, TrackButton } from './Buttons';
import { useNavigation } from '@react-navigation/native';

const OrderCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyles}>
     {/* header  */}
     <View style={styles.headerWrapper}>
      <View><OrderStatus icon={data.icon} text={data.status}/></View>
      <View><Icon size={24} style={styles.icon} name="clock-fast"  /></View>
     </View>

     {/* item desc */}

     <View style={styles.descWrapper}>
      {/* item  */}
      <View>
        <Text style={styles.itemHeadingStyle}>Items</Text>
        <Text style={styles.itemTextStyle}>{data.items}</Text>
      </View>
      {/* waybill no  */}
      <View>
        <Text style={styles.itemHeadingStyle}>Waybill No.</Text>
        <Text style={styles.itemTextStyle}>#{data.waybillNo}</Text>
      </View>
     </View>

     {/* sender / reciver  */}
     <View style={styles.sRWrapper}>
      {/* senders desc  */}
      <View style={styles.SendersWrapper}>
       <View style={{ alignSelf: 'center'}}> 
        <Image source={data.sendersProfilePicture} />
        </View>
        <View >
        <Text style={styles.SRNameStyles}>{data.senderName}</Text>
        <Text style={styles.SRAddressStyles}>{data.sendersAddress}</Text>
      </View>
      </View>

      {/* recievers desc  */}
      <View style={styles.SendersWrapper}>
       <View style={{ alignSelf: 'center'}}> 
        <Image source={data.receiversProfilePicture} />
        </View>
        <View >
        <Text style={styles.SRNameStyles}>{data.ReceiverName}</Text>
        <Text style={styles.SRAddressStyles}>{data.receiversAddress}</Text>
      </View>
      </View>

     </View>

     {/* buttons  */}
     <View style={styles.btnWrapper}>
        <TrackButton handlePress={() => navigation.navigate('Track')}/>
        <DetailsButton handlePress={() => navigation.navigate('Detail')}/>

     </View>

    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
  containerStyles:{
    width: 334,
    height: 251,
    alignSelf: 'center',
    marginBottom: 11, 
    shadowColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 7,
  },
  headerWrapper:{
    width: 320 ,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf:'center',
    marginBottom:14
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
  itemHeadingStyle:{
    width: 75,
    height: 17,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    lineHeight: SIZES.medium,
    color: COLORS.secondary
  },
  itemTextStyle:{
    fontFamily: FONTS.bold,
    fontSize: SIZES.font,
    lineHeight: SIZES.extraLarge,
    color: COLORS.black,
    fontStyle: 'normal'
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
    fontSize: SIZES.small,
    lineHeight: SIZES.medium,
    color: COLORS.secondary,
    fontStyle: 'normal'
  },
  btnWrapper:{
    flexDirection: 'row',
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between'

  },



})