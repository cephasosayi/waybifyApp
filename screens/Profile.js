import { StyleSheet, Text,View, TextInput } from 'react-native'
import React from 'react';
import {Picker} from '@react-native-picker/picker';

import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import person from '../assets/img/person2.png';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { TextBase } from 'react-native';
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { ContinueButton, SaveAndCancelButton } from '../components';

const {width, height} = Dimensions.get('window');

const Profile = () => {
    const [category, setCategory] = React.useState('Tech/Gadgets');
  return (
    <ScrollView style={styles.container}>
        {/* profile pics */}
        <View style={styles.profilePiccontainer}>
            <Image source={person} style={styles.profilPic}/>
            <Text style={styles.name}>Johnson Emake</Text>
        </View>
        
        {/* from */}
        <View style={styles.form}>
        <View style={{ rowGap:10}}>
            <Text style={styles.label}>Email</Text>
                <TextInput
                placeholder='E.g. name@gmail.com' 
                style={styles.input}
                editable

                />
        </View>

        <View style={{ rowGap:10}}>
            <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                placeholder='E.g. 091 876 77 9876' 
                style={styles.input}
                keyboardType='numeric'
                editable

                />
        </View>

        <View style={{ rowGap:10}}>
            <Text style={styles.label}>Business Address</Text>
                <TextInput
                placeholder='E.g.  Shop 15, Banxe plaza' 
                style={styles.input}
                editable

                />
        </View>

        <View style={{ rowGap:10}}>
            <Text style={styles.label}>Business Category</Text>
                 <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) =>
                    setCategory(itemValue)}
                    style={[styles.input]}>
                    <Picker.Item label="Fashion Design" value="1" />
                    <Picker.Item label="Arts/Graphic" value="2" />
                    <Picker.Item label="Tech/Gadgets" value="2" />
                    <Picker.Item label="Wear/Shoe" value="2" />
                    <Picker.Item label="Jelwery" value="2" />
                    <Picker.Item label="Craft" value="2" />

                    </Picker>
        </View>

        <View style={{ rowGap:10}}>
            <Text style={styles.label}>About Business</Text>
                <TextInput
                placeholder='Describe your business in short sentences' 
                style={[styles.input, { height:105 }]}
                editable
                multiline={true}
                numberOfLines={10}
                maxLength={140}
                
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

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: height
    },
    profilePiccontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 24,
        rowGap:12
    },
    profilPic:{
        width:100,
        height: 93,
        borderRadius: 50,
        resizeMode:'contain'
    },
    name:{
        fontFamily: FONTS.semiBold,
        fontSize:SIZES.large,
        lineHeight: 30,
        fontWeight: '500',
        color: COLORS.black,
        marginBottom:16
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
        fontSize: SIZES.font,
        borderRadius:7
    },

})