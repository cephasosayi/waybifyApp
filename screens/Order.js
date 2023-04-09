import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {View, SafeAreaView, Text} from 'react-native';
import { Button } from 'react-native-paper';
import  OrderCard  from '../components/OrderCard';
import  OrderHeader  from '../components/OrderHeader';

import { dummy } from '../constants/dummy';
import { FONTS, SIZES } from '../constants/theme';

const Order = () =>{

    return (
    <SafeAreaView style={{ flex:1}}>
        {/* Header  */}
        <View style={{ flex:1}}>
        {/* create order button   */}
       
        {/* Active orders     */}
        <View style={{ flex:1}} >
        <View style={styles.orderContainer}>
                <FlatList 
                data={dummy}
                renderItem={({item}) => <OrderCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}  
                ListHeaderComponent={<OrderHeader />}

                />
        </View>

        </View>
        </View>    

    </SafeAreaView>
    );
}

export default Order;

const styles = StyleSheet.create({
   
    textStyle:{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large,
        lineHeight: 27 ,
        marginLeft: 16,

    },
    orderContainer:{
        flex:1
    },
    
})