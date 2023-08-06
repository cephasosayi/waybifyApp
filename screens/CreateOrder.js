import {Picker} from '@react-native-picker/picker';
import { Dimensions, Image , SafeAreaView, ScrollView, StyleSheet,TextInput,Text,  TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { Divider, HelperText, RadioButton } from 'react-native-paper';
import { ContinueButton } from '../components/Buttons';
import PaymentSummary from '../components/PaymentSummary';
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
// import { TextInput, Button, } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { postOrder } from '../features/order/orderSlice';
import { useDispatch } from 'react-redux';
import person1 from '../assets/img/person1.png'
import person2 from '../assets/img/person2.png'
import item from '../assets/img/item2.png'



const CreateOrder = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
      waybillNo: 'WB0476',
      sendersProfilePicture: "require('../assets/img/person1.png')",
     receiversProfilePicture: "require('../assets/img/person2.png')",
     itemPhoto: "require('../assets/img/item2.png')",
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = React.useState([]);

  const handleSelectImages = async (field) => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        throw new Error('Permission to access camera roll is required');
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });

      if (!pickerResult.canceled) {
        setSelectedImages(pickerResult.selected);
        field.onChange(pickerResult.selected);
      }
    } catch (error) {
      console.log('Image selection error:', error);
    }
  };

  const generateWaybillNo = () => {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const waybillLength = 6; // Adjust the length of the waybill number as needed
  
    let waybillNo = 'WB';
  
    for (let i = 0; i < waybillLength; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      waybillNo += alphanumericChars[randomIndex];
    }
  
    return waybillNo;
  };
  

  const onSubmit = (data) => {
      const autoGeneratedWaybillNo = generateWaybillNo();
      
      const formData = {
        ...data,
        waybillNo: autoGeneratedWaybillNo,
        status: "going for pickup", // Set the default status here
        sendersName: "Johnson Emeka",
        icon: "truck-fast",
        sendersProfilePicture: person1,
        receiversProfilePicture: person2,
        itemPhoto: selectedImages,
        // itemPhoto: item,

      };
  
      // Dispatch the action to post the order
      dispatch(postOrder(formData));
      navigation.navigate('SelectDriver')
  };

  

  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollview}
     showsHorizontalScrollIndicator={false}
     showsVerticalScrollIndicator={false}>

     <View style={[styles.form, { marginTop: 10}]}>
     <>
      <Text style={styles.labels}>Product Images</Text> 
      <Controller
        control={control}
        name='itemPhoto'
        rules={{ required: false }}
        render={({ field: { onChange, onBlur } }) => (
          <View>
            <TouchableOpacity onPress={() => handleSelectImages({ onChange })} title="Select Images" style={[styles.imageField]}>
              <Icon name='plus' size={22} color={COLORS.secondary} />  
            </TouchableOpacity>
            {selectedImages && selectedImages.length > 0 && (
              <View style={styles.selectedImagesContainer}>
                {selectedImages.map((image, index) => (
                  <Image key={index} source={{ uri: image.uri }} style={styles.selectedImage} />
                ))}
              </View>
            )}
          </View>
        )}
      />
      {errors.itemPhoto && 
        <HelperText type='error'>This is required.</HelperText>}
    </>
   <>
    <Text style={styles.labels}>Item Name</Text>
    <Controller
            control={control}
            rules={{
            required:true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Item Name'
                placeholder="Product name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
            name='ItemName'          
          />
           {errors.ItemName && 
           <HelperText type='error' >
            This is required.</HelperText>}
        </>
    <>
   
      <Text style={styles.labels}>Pickup Address</Text>
      <Controller
        control={control}
        rules={{
         required:true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Pickup Address"
            placeholder="Pickup Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}

          />
        )}
        name="pickupAddress"
      />
      {errors.pickupAddress && <HelperText type='error'>
        This is required.</HelperText>}
    </>
    <>

    <Text style={styles.labels}>Vendor's Name</Text>
<Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="vendor's Name"
            placeholder="vendor's Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}


          />
        )}
        name="VendorsName"
      />
      {errors.VendorsName && <HelperText type='error'>
        This is required</HelperText>}
    </>
<>
<Text style={styles.labels}>Vendor's Phone Number</Text>
<Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          keyboardType='phone-pad'
            label="vendor's Phone Number"
            placeholder="Phone Number"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}

          />
        )}
        name="vendorsPhoneNumber"
      />
      {errors.vendorsPhoneNumber && <HelperText type='error'>
        This is required.</HelperText>}
    </>

    <>
   
<Text style={styles.labels}>Delivery Address</Text>
<Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Delivery Address"
            placeholder="Delivery Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}


          />
        )}
        name="DeliveryAddress"
      />
      {errors.DeliveryAddress && <HelperText type='error'>
        This is required</HelperText>}
    </>

    <>

    {/* instruction */}
    <Text style={styles.labels}>Special Instruction</Text>
<Controller
        control={control}
        rules={{
         required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Delivery Address"
            placeholder="Delivery Address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
         numberOfLines={4}
            style={styles.input}


          />
        )}
        name="DeliveryAddress"
      />
      {errors.DeliveryAddress && <HelperText type='error'>
        This is required</HelperText>}
    </>

    <>
  
</>
{/* value/size  */}
<>
  <View style={styles.VSContainer}>

    <View style={{ rowGap:10,}}>
    <Text style={styles.labels}> Item Value(N)</Text>
    <Controller
        control={control}
        rules={{
         required:true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Value"
            placeholder="Value"
            onBlur={onBlur}
            keyboardType='numeric'
            onChangeText={onChange}
            value={value}
            style={styles.Vsinput}


          />
        )}
        name="value"
      />
      {errors.value && <HelperText type='error'>
        This is required.</HelperText>}

    </View>
 <View style={{ rowGap:10}}>
 <Text style={styles.labels}>Size</Text>

      <Controller
        control={control}
        name="Size"
        label='Size'
        rules={{ required: true}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
          selectedValue={value}
          onValueChange={onChange}
          onBlur={onBlur}
          style={[styles.Vsinput, { height: 50, padding:0}]}
          >
            <Picker.Item label="Small" value="option1" />
            <Picker.Item label="Medium" value="option2" />
            <Picker.Item label="Large" value="option3" />
          </Picker>
        )}
      />
      {errors.category && <HelperText type='error'>
        This is required.</HelperText>}
    </View>
    </View>
  </> 

<>
     <View style={styles.VSContainer}>

    <View style={{ rowGap:5}}>
    <Text style={styles.labels}>No. of Package</Text>
    <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="No. Packages"
            placeholder="Packages"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            helperText={errors && errors.message}
            style={styles.Vsinput}


          />
        )}
        name="Nopackages"
      />
      {errors.Nopackages && <HelperText type='error'>
        This is required.</HelperText>}

    </View>
 <View style={{ rowGap:5}}>
 <Text style={styles.labels}>Category</Text>

      <Controller
        control={control}
        name="category"
        label='Category'
        rules={{ required: true}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
          selectedValue={value}
          onValueChange={onChange}
          onBlur={onBlur}
          style={[styles.Vsinput, { height: 50, padding:0}]}
          >
            <Picker.Item label="Gadget" value="option1" />
            <Picker.Item label="Cosmetics" value="option2" />
            <Picker.Item label="Clothings" value="option3" />
          </Picker>
        )}
      />
      {errors.category && <HelperText type='error'>
        This is required.</HelperText>}
    </View>

    </View> 
    </>
 {/* line  */}
      <Divider />

          {/* summary  */}
          <PaymentSummary/>

           {/* button  */}
           <ContinueButton 
          handlePress={handleSubmit(onSubmit)} 
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
    columnGap:5,
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
  VSContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
 
  },
  input:{
    width: '100%',
    height: 52,
    backgroundColor: COLORS.formInputBG,
    borderRadius:3,
    padding:10,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize:SIZES.font,
    fontVariant: 'normal',
    lineHeight: SIZES.large,
    borderWidth: 0
  
  },
  Vsinput:{
    width: 150,
    height: 52,
    backgroundColor: COLORS.formInputBG,
    borderRadius:3,
    padding:10,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize:SIZES.font,
    fontVariant: 'normal',
    lineHeight: SIZES.large,
    borderWidth: 0
  
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