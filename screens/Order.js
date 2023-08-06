import React, { useEffect } from 'react';
import { FlatList, StyleSheet, RefreshControl,ActivityIndicator,TouchableOpacity} from 'react-native';
import {View, SafeAreaView, Text} from 'react-native';
import { Button } from 'react-native-paper';
import  OrderCard  from '../components/OrderCard';
import  OrderHeader  from '../components/OrderHeader';
import { COLORS } from '../constants/theme';

import { dummy } from '../constants/dummy';
import { FONTS, SIZES } from '../constants/theme';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { fetchOrders } from '../features/order/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Order = () =>{
   const { orders, isLoading } = useSelector((store) => store.orders);
    const dispatch = useDispatch();

    const [showAllItems, setShowAllItems] = React.useState(false);
  const limit = 3; // Number of items to show initially

  const toggleShowAllItems = () => {
    setShowAllItems((prevShowAll) => !prevShowAll);
  };
 // Function to determine if the user has reached the end of the list
 const handleEndReached = () => {
  // Check if the user has reached the last item and show the "Show More" button
  if (showAllItems === false && orders.length > limit) {
    setShowAllItems(true);
  }
};
    useEffect(() => {
        dispatch(fetchOrders()); // Fetch orders when the component mounts
      }, []);

      if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        );
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
        data={showAllItems ? orders : orders.slice(0, limit)}
        renderItem={({ item }) => <OrderCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<OrderHeader />}
        refreshControl={
          <RefreshControl
            refreshing={false} // If you need to handle refreshing, set it accordingly
            onRefresh={() => {}}
          />
        }
      />

      {!showAllItems && orders.length > limit && (
        <TouchableOpacity onPress={toggleShowAllItems} style={styles.showMoreButton}>
          <Text style={styles.showMoreButtonText}>Show More</Text>
        </TouchableOpacity>
      )}
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
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    showMoreButton: {
      alignSelf: 'center',
      paddingVertical: 8,
    },
    showMoreButtonText: {
      color: 'blue',
      fontSize: 16,
    },
    
})