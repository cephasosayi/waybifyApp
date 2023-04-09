import { View, Text, StyleSheet, Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import person1 from '../assets/img/person1.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';



const OrderHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView >
      {/* Header  */}
      <View style={styles.headerWrapper}>
        {/* user bio  */}
        <View style={styles.bioWrapper}>
          <Image source={person1} style={styles.profileImg}/>
          <View>
            <Text style={styles.nameStyle}> Johnson Emeka</Text>
            <Text style={styles.welcomeAddress}> Welcome Back!</Text>
          </View>
        </View>

        {/* nav  */}
        <View>
         <TouchableOpacity   
         onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Settings');
      }}>
              <Icon name='menu' size={47} />
          </TouchableOpacity> 
        </View>
      </View>

      {/* <create button  */}
     <View>
     <View style={[styles.ButtonWrapper]}>
            <Text style={[styles.textStyle]}>Create Order!</Text>
            <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.ButtonStyle} 
            onPress={() => navigation.navigate('CreateOrder')}>
             <Icon name='plus' size={40} color={COLORS.white} style={{ alignSelf:'center'}} />  
          </TouchableOpacity> 

        </View>
        <Text style={[styles.textStyle]}>Active Orders!</Text>
        </View>
     </View>
    </SafeAreaView>
  )
}

export default OrderHeader


const styles = StyleSheet.create({
  headerWrapper:{
    width: 334 ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 35
  },
  bioWrapper:{
    flexDirection: 'row',
    rowGap: 10,
    columnGap: 10,
    alignItems: 'center'
  },
  profileImg:{
    height: 44,
    width: 49,
    resizeMode: 'contain',
    backgroundColor: COLORS.secondary,
    borderRadius:7,
    borderWidth: .6,
    borderColor: COLORS.secondary
  },
  nameStyle:{
    fontFamily: FONTS.medium,
    fontWeight: 400,
    fontSize: SIZES.font,
    lineHeight: SIZES.extraLarge,
    color: COLORS.secondary,
  },
  welcomeAddress:{
    fontFamily: FONTS.semiBold,
    fontWeight: 600,
    fontSize: SIZES.large,
    lineHeight: SIZES.extraLarge,
    color: COLORS.black,

  },
  ButtonWrapper:{
    // marginTop: 40,

},
ButtonContainer:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
},
ButtonStyle:{
    height: 131,
    width:  334,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: COLORS.primary

},
 
textStyle:{
  fontFamily: FONTS.semiBold,
  fontSize: SIZES.large,
  lineHeight: 27 ,
  marginLeft: 16,
   marginTop: 18

},
orderContainer:{
  flex:1
},
})