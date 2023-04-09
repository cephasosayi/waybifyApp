import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderCompletedCard from '../components/OrderCompletedCard'
import { SafeAreaView } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RateDriver from '../components/RateDriver'
import OrderStatusbar from '../components/OrderStatusbar'


const {width, height} =Dimensions.get('window');
const StatusUpdate = () => {
    const navigation = useNavigation();
  return (<ScrollView style={{ height:height}}>
    <SafeAreaView style={[styles.container]}>
      {/* order status bar  */}
       <View>
            <OrderStatusbar />
       </View>
        <View style={{marginTop:10}}>
            <OrderCompletedCard handlePress={() => navigation.navigate('Detail')} text='See Details'/>

            {/* or rate box  */}

            {/* <RateDriver /> */}

        </View>
        {/* ACTIVITIES  */}
        <View style={styles.activitContainer}>
            <Text style={styles.title}>ACtivities</Text>
            <View style={styles.activityList}>
                <Text style={styles.actions}>Picked up</Text>
                <Text style={styles.actions}>4:16 pm</Text>
            </View>

            <View style={styles.activityList}>
                <Text style={styles.actions}>Going for pickup</Text>
                <Text style={styles.actions}>4:10 pm</Text>
            </View>

            <View style={styles.activityList}>
                <Text style={styles.actions}>Order created </Text>
                <Text style={styles.actions}>3:40 pm</Text>
            </View>
        </View>

        <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Order')}

        style={styles.plainBtn}>
          <Text style={styles.btnText}>Back Home</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
</ScrollView>
  )
}

export default StatusUpdate

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
       lineHeight:33,
       color:COLORS.black,
       marginTop: 16,
       marginBottom:10
    },
   disabledText:{
        color:COLORS.secondary
    },
    disabled:{
        backgroundColor:COLORS.secondary,
        color:COLORS.secondary
    },
    activitContainer:{
        width:'90%',
        height: height *.25,
        rowGap:12
    },
    activityList:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    actions:{
        fontFamily:FONTS.regular,
        fontSize: SIZES.medium,
        lineHeight:SIZES.extraLarge,
        color:COLORS.black,
      
    },
    plainBtn:{
        height: height * .08,
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