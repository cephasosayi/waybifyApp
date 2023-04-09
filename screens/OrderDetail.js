import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderStatusbar from '../components/OrderStatusbar'
import DriverBox from '../components/DriverBox'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'
import { ContinueButton } from '../components/Buttons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window');
const OrderDetail = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
        {/* order status bar  */}
      <View>
        <OrderStatusbar />
      </View>

      {/* selected driver box  */}
      <View style={{ marginTop:10}}>
            <DriverBox />
      </View>

      {/* order details  */}
      <View style={styles.orderDetails}>
        <Text style={styles.heading}>Order Details</Text>
        <View style={styles.itemContainer}>
            <Text style={styles.label}>Item Name</Text>
            <Text style={styles.labelItem}>Samsung Galaxy S21</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Pickup location</Text>
            <Text style={styles.labelItem}>Shop 17, Banex Plaza, Wuse II, FCT, Abuja.</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Delivery Location</Text>
            <Text style={styles.labelItem}>Kongo Plaza,Jos Road, Lafia, Nasarawa State.</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Number of Packages</Text>
            <Text style={styles.labelItem}>3 Packages</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Package Waybill</Text>
            <Text style={styles.labelItem}>#WB0402</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Customers Phone Number</Text>
            <Text style={styles.labelItem}>+234 803 333 622</Text>
        </View>

        <View style={styles.itemContainer}>
            <Text style={styles.label}>Item size</Text>
            <Text style={styles.labelItem}>4.5KG</Text>
        </View>

{/* payment summary  */}
<View style={styles.paymentContainer}>
        <Text style={styles.heading}>Payment Summary</Text>
            <View style={[styles.itemContainer, { flexDirection: 'row',justifyContent:'space-between'}]}>
                <Text style={styles.paymentItem}>Delivery Rate:</Text>
                <Text style={styles.paymentItem}>&#x20A6;2,576</Text>
            </View>

            <View style={[styles.itemContainer, { flexDirection: 'row',justifyContent:'space-between'}]}>
                <Text style={styles.paymentItem}>Tax/Charges:</Text>
                <Text style={styles.paymentItem}>&#x20A6;199</Text>
            </View>

            <View style={[styles.itemContainer, { flexDirection: 'row',justifyContent:'space-between'}]}>
                <Text style={styles.paymentItem}>Insurance:</Text>
                <Text style={styles.paymentItem}>&#x20A6;500</Text>
            </View>

            <View style={[styles.itemContainer, { flexDirection: 'row',justifyContent:'space-between'}]}>
                <Text style={[styles.paymentItem, {fontSize: 17, fontFamily:FONTS.bold}]}>Total:</Text>
                <Text style={[styles.paymentItem,{fontSize: 17, fontFamily:FONTS.bold}]}>&#x20A6;3,903</Text>
            </View>
            </View>

            {/* buttons */}
            <ContinueButton text='Email Invoice'/>
            <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Order')}
        style={styles.plainBtn}>
          <Text style={styles.btnText}>Back Home</Text>
        </TouchableOpacity>
      </View>
           
      </View>


    </ScrollView>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
    container:{ 
        rowGap:5,
        height: height,
    },
    orderDetails:{
        width: '90%',
        justifyContent:'center',
        alignSelf:'center'
    },
    heading:{
       fontFamily: FONTS.bold,
       fontSize: SIZES.large,
       lineHeight: SIZES.extraLarge,
       color:COLORS.black
    },
    itemContainer:{
        rowGap: 1
    },
    label:{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        lineHeight: SIZES.large,
        color:COLORS.secondary,
        fontStyle:'normal'
    },
    labelItem:{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        lineHeight: SIZES.extraLarge,
        color:COLORS.black,
        fontStyle:'normal'
    },
    paymentContainer:{
        rowGap: 5
    },
    paymentItem:{
        fontFamily: FONTS.regular,
        fontSize: SIZES.font,
        lineHeight: SIZES.extraLarge,
        color:COLORS.black,
        fontStyle:'normal'
    },
    plainBtn:{
        height: height * .07,
        justifyContent:'center',
        alignItems:'center'
      },
      btnText:{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        lineHeight: SIZES.extraLarge,
        fontStyle: 'normal',
        fontWeight: '500',
        color:COLORS.black,
      },

})