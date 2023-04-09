import { FlatList,SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PaymentSummary from '../components/PaymentSummary'
import { Dimensions } from 'react-native';
import { FONTS, SIZES } from '../constants/theme';
import { Image } from 'react-native';
import { Driverdummy } from '../constants/dummy';
import DriverList from '../components/DriverList';
import { ContinueButton } from '../components';
import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window');
const SelectDriver = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body} >
        <View style={{ marginBottom: 50}} >
            <PaymentSummary />
        </View>

        <>
            <Text style={styles.label}>Drivers</Text>
        </>

        <View>
            <>
             <FlatList 
                data={Driverdummy}
                renderItem={({item}) => <DriverList data={item} />}
                keyExtractor={(item) => item.id}
                ListFooterComponent={
                    <ContinueButton 
                    handlePress={() => navigation.navigate('paysucess')} 
                    text='Pay Now'/>
                }       
                style={{ marginBottom:30}}

             />
            </>        
    </View>
    </View>
</SafeAreaView>
  )
}

export default SelectDriver

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    body:{
        width: '90%', 
        alignSelf:'center',
        rowGap: 10,
        columnGap:10
    },
    label:{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large,
        lineHeight: SIZES.extraLarge,
        fontWeight: 'bold',
        textAlign:'left',
        alignItems:'flex-start'
    },

})