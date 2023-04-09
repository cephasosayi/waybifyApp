import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleTwitterPress = async () => {
    const twitterUrl = 'twitter://user?screen_name=waybify';
    const webUrl = 'https://twitter.com/waybify';
    const supported = await Linking.canOpenURL(twitterUrl);
    if (supported) {
      await Linking.openURL(twitterUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  const handleFacebookPress = async () => {
    const facebookUrl = 'fb://profile/waybify';
    const webUrl = 'https://web.facebook.com/profile.php?id=100086616764867';
    const supported = await Linking.canOpenURL(facebookUrl);
    if (supported) {
      await Linking.openURL(facebookUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  const handleInstagramPress = async () => {
    const instagramUrl = 'instagram://user?username=waybify';
    const webUrl = 'https://www.instagram.com/waybify/';
    const supported = await Linking.canOpenURL(instagramUrl);
    if (supported) {
      await Linking.openURL(instagramUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  const handleWebsitePress = async () => {
    const webUrl = 'https://www.waybify.com';
    await Linking.openURL(webUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
     <View style={styles.itemContainer}>
     <View style={styles.iconContainer}>
      <Icon name='account' size={15} color={COLORS.white}/>
     </View>
     <Text style={styles.label}>Profile</Text>
     </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => navigation.navigate('Security ')}>
     <View style={styles.itemContainer}>
     <View style={styles.iconContainer}>
      <Icon name='security' size={15} color={COLORS.white}/>
     </View>
     <Text style={styles.label}>Security</Text>
     </View>
     </TouchableOpacity>

     <View style={styles.itemContainer}>
     <View style={styles.iconContainer}>
      <Icon name='information' size={15} color={COLORS.white}/>
     </View>
     <Text style={styles.label}>About us</Text>
     </View>
     
     <View style={styles.itemContainer}>
     <View style={styles.iconContainer}>
      <Icon name='face-agent' size={15} color={COLORS.white}/>
     </View>
     <Text style={styles.label}>Support</Text>
     </View>

     <View style={styles.SocialItemContainer}>
        
     <View style={styles.InnerSocialContainer}>
        <View style={styles.iconContainer}>
            <Icon name='facebook' size={15} color={COLORS.white}/>
        </View>
        <TouchableOpacity onPress={handleFacebookPress}>
            <Text style={styles.label}>Facebook</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.InnerSocialContainer}>
            <View style={styles.iconContainer}>
              <Icon name='twitter' size={15} color={COLORS.white}/>
            </View>
         <TouchableOpacity onPress={handleTwitterPress}>
           <Text style={styles.label}>Twitter</Text>
          </TouchableOpacity>
        </View>
          {/* </View>  */}

          <View style={styles.InnerSocialContainer}>
            <View style={styles.iconContainer}>
              <Icon name='instagram' size={15} color={COLORS.white}/>
            </View>
          <TouchableOpacity onPress={handleInstagramPress}>
            <Text style={styles.label}>Instagram</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.InnerSocialContainer}>
            <View style={styles.iconContainer}>
              <Icon name='web' size={15} color={COLORS.white}/>
            </View>
        <TouchableOpacity onPress={handleWebsitePress}>
          <Text style={styles.label}>Visit our website</Text>
          </TouchableOpacity>  
      
      
      
      </View>
      </View>
      
      <View style={[styles.itemContainer,{ marginTop: 20}]}>
     <View style={[styles.iconContainer, {backgroundColor:COLORS.dangerBg}]}>
      <Icon name='logout-variant' size={15} color={COLORS.danger}/>
     </View>
     <Text style={styles.label}>Log out</Text>
     </View>
     
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,


  },
  iconContainer:{
    backgroundColor:COLORS.primary,
    width:29,
    height: 25,
    borderRadius: 4,
    justifyContent:'center',
    alignItems:'center',
    
    
  },
  itemContainer:{
    width:'100%',
    flexDirection:'row',
    borderWidth:1,
    borderColor:COLORS.black,
    paddingHorizontal:10,
    height:47,
    alignItems:'center',
    rowGap:10,
    columnGap:10,

  },
  label:{
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    fontWeight: '600',
    lineHeight: SIZES.extraLarge,
    color: COLORS.black
  },
  SocialItemContainer:{
    marginHorizontal:40,
    marginTop:15,

  },
  InnerSocialContainer:{
    rowGap:10,
    columnGap:10,
    flexDirection:'row',
    marginBottom:10,
    alignItems:'center'

  },
})