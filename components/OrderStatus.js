import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderStatus = ({icon, text}) => {
  return (
    <View style={styles.OrderStatusContainer}>
     <View style={styles.iconStylesContainer}>
        {/* <Image source={icon} style={styles.iconStyles} /> */}
        <Icon size={24} color={COLORS.white} name={icon} style={styles.iconStyles} />
     </View>
     
     <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
     </View>
    </View>
  )
}

export default OrderStatus

const styles = StyleSheet.create({
    OrderStatusContainer:{
        flexDirection: 'row',
        alignItems:'center' ,
        backgroundColor: 'transparent',
        borderWidth:1,
        width: 180,
        height: 29,
        borderColor: COLORS.black,
        gap: 2,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 4,

    },
    iconStylesContainer:{
        backgroundColor: COLORS.primary,
        height: 27,
        width: 41,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 4,
    },
    text:{
        textAlign: 'center',
        marginLeft: 4,
        marginTop: 1,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        lineHeight: SIZES.extraLarge
    },

})