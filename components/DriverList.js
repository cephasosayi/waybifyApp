import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { ContinueButton } from './Buttons'
import { TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DriverList = ({data}) => {
  return (
 <TouchableOpacity>
       <View style={styles.container}>
     <View style={styles.driverCont}>
        <>
            <Image source={data.profilePhoto} style={styles.photo} />
        </>  
        <>
         <View>
         <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center', columnGap: 3}}>
         <Text style={styles.name}>{data.name}</Text> 
          <Text style={{ borderRadius: 50}}>  
            <Badge size={10} style={{ backgroundColor:COLORS.badge}} ><Icon size={10} name='check-bold' /></Badge>
          </Text>
         </View>
          <Text style={styles.status}>{data.status}</Text>
        </View> 
        </>

        <>
            <View style={styles.CCcontainer}>
                <Text style={styles.call}>Call</Text>
                <Image source={data.carImage} style={[styles.photo,{width:70, height:60}]} />
            </View>
        </>

    </View>

    </View>
    </TouchableOpacity>
  )
}

export default DriverList

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        
    },
    driverCont:{
        
        flexDirection:'row',
        rowGap: 10,
        columnGap:10,
        alignItems:'center',
        borderWidth:1,
        borderColor: COLORS.primary,
        borderRadius:7,
        height: 66,
        marginBottom: 10,
        padding:10
    },
    CCcontainer:{
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems:'center'
    },
    photo:{
        height: 48,
        width:58
    },
    name:{
       fontFamily:FONTS.semiBold,
       fontSize: SIZES.medium,
       lineHeight: SIZES.extraLarge,
       fontWeight: '500' ,
       color: COLORS.black
    },
    status:{
        fontFamily:FONTS.regular,
        fontSize: SIZES.small,
        lineHeight: SIZES.medium,
        fontWeight: '400' ,
        color: COLORS.primary
    },
    call:{
        fontFamily:FONTS.bold,
        fontSize: SIZES.font,
        lineHeight: SIZES.extraLarge,
        fontWeight: '600' ,
        color: COLORS.primary
    },
})