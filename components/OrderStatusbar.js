import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const OrderStatusbar = () => {
  return (
    <SafeAreaView style={[styles.container]}>
        <View>
            <Text style={styles.title}>#WB0402</Text>
            <Text style={{ fontSize: 12, color: COLORS.primary, fontFamily: FONTS.bold}}>Order status</Text>
            <View style={styles.updateContainer}>
                <View style={{ alignItems:'center'}}>
                    <View style={[styles.iconContainer, styles.disabled]}>
                        <Icon size={25} color={COLORS.white} name='truck-delivery' />
                    </View>
                    <Text style={[styles.iconText, styles.disabledText]}>Going for pickup</Text>
                </View>

                <View style={{ alignItems:'center'}}>
                    <View style={[styles.iconContainer, styles.disabled]}>
                        <Icon size={25} color={COLORS.white} name='truck-check' /></View>
                    <Text style={[styles.iconText, styles.disabledText]}>Picked up</Text>
                </View>

                <View style={{ alignItems:'center'}}>
                    <View style={[styles.iconContainer, styles.disabled]}>
                        <Icon size={25} color={COLORS.white} name='truck-fast' /></View>
                    <Text style={[styles.iconText, styles.disabledText]}>In-transit</Text>
                </View>

                <View style={{ alignItems:'center'}}>
                    <View style={[styles.iconContainer, styles.disabled]}>
                        <Icon size={25} color={COLORS.white} name='human-dolly' /></View>
                    <Text style={[styles.iconText, styles.disabledText]}>Delivered</Text>
                </View>

             

            </View>
        </View>

    </SafeAreaView>
  )
}

export default OrderStatusbar

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:COLORS.white,       
    },
    updateContainer:{
        width: 334,
        height: 90,
        borderWidth:1,
        borderColor: COLORS.black,
        borderRadius:7,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        flexDirection:'row',
        padding:10,
        columnGap:10,
        backgroundColor:COLORS.white,
        shadowColor: COLORS.black,
        shadowOpacity: 0.5,
        shadowOffset:{height: 4, width:4},
        shadowRadius: 4
       
    },
    iconContainer:{
        backgroundColor:COLORS.primary,
        width: 42,
        height: 28,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    },
    iconText:{
        width:63,
        height: 36,
        fontFamily:FONTS.semiBold ,
        fontSize:12, 
        textAlign:'center',
        lineHeight:SIZES.large,
        color:COLORS.black
    },
    title:{
       fontFamily:FONTS.bold,
       fontSize: SIZES.extraLarge,
       lineHeight:25,
       color:COLORS.black,
       marginTop: 16,
       marginBottom:0
    },
   disabledText:{
        color:COLORS.secondary
    },
    disabled:{
        backgroundColor:COLORS.secondary,
        color:COLORS.secondary
    },
   

})