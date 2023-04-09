import {Picker} from '@react-native-picker/picker';
import { Dimensions, Image , SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { RadioButton } from 'react-native-paper';
import { ContinueButton } from '../components/Buttons';
import PaymentSummary from '../components/PaymentSummary';
import { useNavigation } from '@react-navigation/native';


const {height, width} = Dimensions.get('window')


const CreateOrder = () => {
  const [checked, setChecked] = React.useState('small');
  const [phoneNumber, setPhoneNumber] = useState('');
const [countryCode, setCountryCode] = useState('NG');
const navigation = useNavigation();

  


  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollview}
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}>

     <View style={styles.form}>
    <>
    <Text style={styles.labels}>Package Images</Text>
      <TouchableOpacity  style={[styles.imageField]}>
        <Icon name='plus' size={22} 
        color={COLORS.secondary}  />  
      </TouchableOpacity>
    </>
    <>
    <Text style={styles.labels}>Name</Text>
      <TextInput  
      placeholder='E.g Bag pack'
      style={[styles.imageField,{ height: 50, padding:10}]} />
    </>

    <>
    <Text style={styles.labels}>Pickup Address</Text>
      <TextInput  
      placeholder='E.g Wuse II, Ademola Cresent,...'
      style={[styles.imageField,{ height: 50, padding:10}]} />
    </>

    <>
    <Text style={styles.labels}>Senders Phone Number</Text>
     <View style={styles.PhoneContainer}>
     <Picker
      selectedValue={countryCode}
      onValueChange={(itemValue) =>
      setCountryCode(itemValue)}
      style={[styles.picker]}>
    <Picker.Item label="+234" value="1" />
    {/* <Picker.Item label="US (+1)" value="1" /> */}
    {/* Add more countries here */}
  </Picker>
      <TextInput  
      keyboardType='numeric'      
      placeholder='08033-333-333'
      style={[styles.imageField, styles.phoneInput,{ height: 50, padding:10}]} />

    </View> 
    </>

    <>
    <Text style={styles.labels}>Receivers Address</Text>
      <TextInput  
      placeholder='E.g Wuse II, Ademola Cresent...'
      style={[styles.imageField,{ height: 50, padding:10}]} />
    </>

    <>
    <Text style={styles.labels}>Receivers Phone Number</Text>
     <View style={styles.PhoneContainer}>
     <Picker
      selectedValue={countryCode}
      onValueChange={(itemValue) =>
      setCountryCode(itemValue)}
      style={[styles.picker]}>
    <Picker.Item label=" +234" value="1" />
    <Picker.Item label="US (+1)" value="1" />
    {/* Add more countries here */}
  </Picker>
      <TextInput  
      keyboardType='numeric'      
      placeholder='08033-333-333'
      style={[styles.imageField, styles.phoneInput,{ height: 50, padding:10}]} />

    </View> 
    </>

{/* value/size  */}
<>
     <View style={styles.VSContainer}>

    <View style={{ rowGap:10}}>
    <Text style={styles.labels}>Value (&#x20A6;)</Text>
    <TextInput  
      keyboardType='numeric'      
      placeholder='12,499'
      style={styles.Vsinput} />

    </View>
 <View style={{ rowGap:10}}>
 <Text style={styles.labels}>Size (KG)</Text>

    <TextInput  
      keyboardType='numeric'      
      placeholder='6.5'
      style={styles.Vsinput} />

    </View>

    </View> 
    </>
    
  

<>
     <View style={styles.VSContainer}>

    <View style={{ rowGap:10}}>
    <Text style={styles.labels}>No. of Package</Text>
    <TextInput  
      keyboardType='numeric'      
      placeholder='12,499'
      style={styles.Vsinput} />

    </View>
 <View style={{ rowGap:10}}>
 <Text style={styles.labels}>Category</Text>
 <Picker
      selectedValue={countryCode}
      onValueChange={(itemValue) =>
      setCountryCode(itemValue)}
      style={[styles.picker, {width: 165, height: 50, borderRadius: 7}]}>
    <Picker.Item label="Gadget" value="1" />
    <Picker.Item label="Clothing/fabric" value="2" />
    {/* Add more countries here */}
  </Picker>

    </View>

    </View> 
    </>
 {/* line  */}
      <>
      <View style={{ marginTop:10, height: 1, width: '100%', backgroundColor: COLORS.secondary }} />
      </>

          {/* summary  */}
          <PaymentSummary/>

           {/* button  */}
           <ContinueButton 
          handlePress={() => navigation.navigate('SelectDriver')} 
          text='Continue'/>

     </View>
     </ScrollView>
    </SafeAreaView>
  )
      }

export default CreateOrder

const styles = StyleSheet.create({
  scrollview:{
    height: height,

  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: COLORS.white
  },
  form:{
    rowGap: 10,
    columnGap:5
  },
  labels:{
    fontFamily: FONTS.regular,
    fontWeight: 'bold',
    fontSize:14,
    lineHeight: SIZES.extraLarge,
  },
  imageField:{
    justifyContent:'center',
    alignItems: 'center' ,
    height: 66,
    width: 319,
    backgroundColor: COLORS.formInputBG,
    borderRadius:7,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize:SIZES.font,
    fontVariant: 'normal',
    lineHeight: SIZES.large

  },
  PhoneContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    columnGap: 10
  },
  picker:{
    borderRadius:7,
    width: 120,
    height: 45,
    backgroundColor: COLORS.formInputBG,
    borderRadius:7

  },
  phoneInput:{
    width: 180,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize:SIZES.font,
    fontVariant: 'normal',
    lineHeight: SIZES.large

  },
  VSContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
 
  },
  Vsinput:{
    width: 131,
    height: 50,
    backgroundColor: COLORS.formInputBG,
    borderRadius:7,
    padding:10,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize:SIZES.font,
    fontVariant: 'normal',
    lineHeight: SIZES.large
  
  },
  boxContainer:{
    flexDirection: 'row',
    columnGap: 5
    // rowGap:5
  },
  box:{
    height: 48,
    backgroundColor: COLORS.formInputBG
  },

})