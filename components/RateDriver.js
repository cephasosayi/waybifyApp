import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import driver1  from '../assets/img/driver1.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import ItemDetailmodal from './ItemDetailsModal';
import { IconButton, MD3Colors } from 'react-native-paper';
import DriverBox from './DriverBox';

const RateDriver = () => {
    const [rating, setRating] = React.useState(0);
    
  const handleRating = (value) => {
    setRating(value);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = rating >= i;
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Icon name={filled ? 'star' : 'star-outline'} size={42} color={filled ? '#F1D020' : '#F1D020'} />
        </TouchableOpacity>,
      );
    }
    return stars;
  };
  return (
    <View style={styles.container}>
      {/* driver box  */}
     <DriverBox/>

     {/* rate box  */}

     <View style={styles.ratebox}>
        
        {/* title and star  */}
        <View style={styles.rateContent}>
            <Text style={styles.title}>Rate your driver</Text>
            <View style={{ flexDirection: 'row' }}>
            {renderStars()}
            </View>
            <View>
                <TextInput
                placeholder='Drop your review'
                multiline
                line={15}
                style={styles.input}

                />
            </View>
           <TouchableOpacity
           style={styles.btn}>
            <Text style={styles.btnText}>Send</Text>
           </TouchableOpacity>
        </View>
     </View>

     {/* Item details  */}
    <View> 
    </View>

    </View>
  )
}

export default RateDriver

const styles = StyleSheet.create({
    container:{
        width: 334,
        justifyContent:'center',
        alignSelf:'center'
       
       
    },
    driverBox:{
        width: 334,
         rowGap:10, 
        //  alignSelf:'center',
         height: 86,
         marginBottom: 18, 
         borderWidth: 1,
         backgroundColor: COLORS.white,
         borderRadius: 7,
         justifyContent:'center',
         padding:10,
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
       ratebox:{
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center',
        height:270,
        borderRadius:4

       },
       rateContent:{
        rowGap:10,
        alignItems:'center'
       },
       title:{
        color:COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        lineHeight:SIZES.extraLarge,
        marginTop:15
       },
       input:{
        backgroundColor:COLORS.white,
        height: 65,
        width: 280,
        padding:10,
        borderRadius:4
       },
       btn:{
        width: 202,
        height:38,
        borderRadius:7,
        marginTop:24,
        marginBottom:25,
        height: 45,
        alignItems: 'center'   ,
        justifyContent: 'center',
        rowGap: 10,
        backgroundColor:COLORS.black,
        borderWidth:1,
        borderColor:COLORS.white
       },
      btnText:{
       fontFamily: FONTS.bold,
       fontWeight: 'bold',
       fontSize: SIZES.medium,
       lineHeight: SIZES.extraLarge ,
       color: COLORS.white,
      },
})