import { StyleSheet,ScrollView,Dimensions, TextInput, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { SaveAndCancelButton } from '../components';
const {width, height} = Dimensions.get('window');

const Security = () => {
  return (
    <ScrollView style={styles.container}>
       
        {/* from */}

        <View style={styles.form}>
        <Text style={styles.title}>Change Password</Text>
        <View style={{ rowGap:10}}>
            <Text style={styles.label}>Old Password</Text>
                <TextInput
                placeholder='XXX-XXX-XXX-XXX-XXXX' 
                style={styles.input}

                />
        </View>

        <View style={{ rowGap:10}}>
            <Text style={styles.label}>New Password</Text>
                <TextInput
                placeholder='XXX-XXX-XXX-XXX-XXXX' 
                style={styles.input}
                keyboardType='numeric'

                />
        </View>

       
            {/* button  */}
            <View>
               <SaveAndCancelButton/>
            </View>
                
        </View>

    </ScrollView>
  )
}

export default Security

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: height
    },
    title:{
        fontFamily: FONTS.semiBold,
        fontSize:SIZES.large,
        lineHeight: 27,
        fontWeight: '500',
        color: COLORS.black,
        marginBottom:16, 
        marginTop:43
    },
   
    form:{
        width: '90%',
        marginHorizontal:20,
        rowGap:10
    },
    label:{
        fontFamily: FONTS.semiBold,
        fontSize:SIZES.font,
        lineHeight: SIZES.extraLarge,
        fontWeight: '500',
        color: COLORS.black,
    },
    input:{
        height: 50,
        width: '100%',
        backgroundColor: COLORS.formInputBG,
        color: COLORS.black,
        padding:10,
        fontFamily: FONTS.medium,
        fontSize: SIZES.font
    },

})