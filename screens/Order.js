import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {View, SafeAreaView, Text} from 'react-native';
import { Button } from 'react-native-paper';
import  OrderCard  from '../components/OrderCard';
import  OrderHeader  from '../components/OrderHeader';

import { dummy } from '../constants/dummy';
import { FONTS, SIZES } from '../constants/theme';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { fetchOrders } from '../features/order/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Order = () =>{
   const { orders, isLoading } = useSelector((store) => store.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders()); // Fetch orders when the component mounts
      }, []);

      if(isLoading){
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        )
      }


    return (
    <SafeAreaView style={{ flex:1}}>
       <>
          {/* Header  */}
        <FocusedStatusBar />
        <View style={{ flex:1}}>
        {/* create order button   */}
       
        {/* Active orders     */}
        <View style={{ flex:1}} >
        <View style={styles.orderContainer}>
                <FlatList 
                data={orders}
                renderItem={({item}) => <OrderCard data={item} />}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}  
                ListHeaderComponent={<OrderHeader />}

                />
        </View>

        </View>
        </View>   
        </> 
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