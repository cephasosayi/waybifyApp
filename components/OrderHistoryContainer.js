import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderHistoryContainer = ({data}) => {
    const navigation = useNavigation();
  return (<TouchableOpacity onPress={() => navigation.navigate('Detail')}>
    <View style={styles.container}>
        <View style={styles.list}>
          
            <View style={{ flexDirection:'row', columnGap:10}}>
                <Image source={data.itemPhoto} style={styles.itemphoto}/>
               <View>
                 <Text style={styles.waybilNo}>#{data.waybillNo}</Text>
                <Text style={styles.item}>{data.items}</Text>
                </View>
               
            </View>

            <View style={styles.statusContainer}>
                <Text style={styles.status}>{data.delivered}</Text>
            </View>

        </View>

    </View>
    </TouchableOpacity>
  )
}

export default OrderHistoryContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',

    },
    statusContainer:{
        height:18,
        width: 70,
        backgroundColor: '#34C24033',
        alignItems:'center',
        borderRadius:4

    },
    list:{
        flexDirection:'row', 
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: 334,
        alignItems:'center',
        marginBottom:10,
        height:60,
        padding:10

    },
    status:{
       fontFamily: FONTS.semiBold,
       fontSize:SIZES.small,
       lineHeight:SIZES.large,
       color:COLORS.badge ,
    },
    itemphoto:{
        height:43,
        width:47,
        borderRadius:4
    },
    waybilNo:{
        fontFamily: FONTS.semiBold,
       fontSize:SIZES.medium,
       lineHeight:SIZES.extraLarge,
       color:COLORS.black ,
       fontWeight: '500'
    },
    item:{
        fontFamily: FONTS.regular,
        fontSize:SIZES.small,
        lineHeight:SIZES.medium,
        color:COLORS.secondary ,
        fontWeight: '500'
    },
})