import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { ContinueButton } from './Buttons'



const PaymentSummary = () => {
  return (
    <View style={styles.container}>
         <>
            <Text style={[styles.labels, { fontFamily: FONTS.bold , fontSize: SIZES.medium}]}>Payment Summary</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.labels}> Delivery Charges</Text>
              <Text style={styles.labels}> &#x20A6; 1,203.00</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.labels}> Tax + Service Charge</Text>
              <Text style={styles.labels}> &#x20A6; 199.00</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.labels, {fontSize: SIZES.large , color: COLORS.primary}]}> Total</Text>
              <Text style={[styles.labels, {fontSize: SIZES.large, color: COLORS.primary}]}> &#x20A6; 1,402.00</Text>
            </View>

          </>
          
         
    </View>
  )
}

export default PaymentSummary

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        rowGap: 10,
        columnGap:5
    },
    labels:{
        fontFamily: FONTS.regular,
        fontWeight: 'bold',
        fontSize:14,
        lineHeight: SIZES.extraLarge,
      },
})