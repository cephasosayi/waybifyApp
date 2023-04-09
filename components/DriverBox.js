import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import driver1  from '../assets/img/driver1.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import ItemDetailmodal from './ItemDetailsModal';
import { IconButton, MD3Colors } from 'react-native-paper';

const DriverBox = () => {
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
      <View style={styles.driverBox}>
      <Text style={styles.driverTitle}>Driver</Text>
      <View style={{alignItems:'center', flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{ flexDirection:'row', columnGap:10,}}>
                <Image source={driver1} />
                <View>
                <Text style={styles.driverName}>AY. James</Text>
                <Text style={styles.driverStatus}>Available</Text>
            </View>
            <View style={styles.callContainer}>
              {/* <Text style={styles.call}>Call</Text> */}
              <IconButton
                icon="phone"
                iconColor={COLORS.primary}
                size={27}
                onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
      </View>
     </View>

    

    </View>
  )
}

export default DriverBox

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
      
})