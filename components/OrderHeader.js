import { View, Text, StyleSheet, Image,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Badge, Button } from 'react-native-paper'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import person1 from '../assets/img/person1.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { IconButton, MD3Colors } from 'react-native-paper';



const OrderHeader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView >
      {/* Header  */}
      <View style={styles.headerWrapper}>
        {/* user bio  */}
        <View style={styles.bioWrapper}>
          <Image source={person1} style={styles.profileImg}/>
          <View style={styles.biodata}>
            <Text style={styles.nameStyle}>Hello,Johnson</Text>
            <Text style={styles.welcomeAddress}>Welcome Back!</Text>
          </View>
        </View>

        {/* nav  */}
        <View style={styles.circle} >
          <Badge size={13} style={{position:'absolute', top:12, right:13, zIndex:1}} >2</Badge>
           <IconButton
                icon="bell-outline"
                iconColor={COLORS.white}
                size={30}
                onPress={() => console.log('Pressed')}
                style={{position:'relative', top:0}}
                />
        </View>
      </View>

      {/* <create button  */}
     <View>
     <View style={[styles.ButtonWrapper]}>
            <Text style={[styles.textStyle]}>Schedule a Pickup!</Text>
            <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.ButtonStyle} 
            onPress={() => navigation.navigate('CreateOrder')}>
             <Icon name='plus' size={40} color={COLORS.white} style={{ alignSelf:'center'}} />  
          </TouchableOpacity> 

        </View>
        <Text style={[styles.textStyle]}>Active Deliveries</Text>
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
    marginTop: 15
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bioWrapper:{
    flexDirection: 'row',
    rowGap: 10,
    columnGap: 10,
    alignItems: 'center'
  },
  profileImg:{
    height: 46,
    width: 51,
    resizeMode: 'contain',
    backgroundColor: COLORS.secondary,
    borderRadius:15,
    borderWidth: .6,
    borderColor: COLORS.primary
  },
  welcomeAddress:{
    fontFamily: FONTS.medium,
    fontWeight: 400,
    fontSize: SIZES.font,
    lineHeight: SIZES.extraLarge,
    color: COLORS.secondary,
  },
   nameStyle:{
    fontFamily: FONTS.semiBold,
    fontWeight: 600,
    fontSize: SIZES.large,
    lineHeight: SIZES.extraLarge,
    color: COLORS.black,

  },
  biodata:{
    textAlign: 'left'
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