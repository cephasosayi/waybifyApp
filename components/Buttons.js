import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { Button } from 'react-native-paper'

export const TrackButton = ({ handlePress, ...props}) => {
    return (
      <Button mode='contained' 
      labelStyle={styles.TrackLableStyles}
      style={styles.TrackBtnStyles}
      onPress={handlePress}
      >Track
    </Button>
    )
  }

  export const DetailsButton = ({ handlePress, ...props}) => {
    return (
      <Button mode='outlined' 
      buttonColor={COLORS.black}
      labelStyle={[styles.TrackLableStyles, {color: COLORS.black}]}
      style={[styles.TrackBtnStyles, {backgroundColor: COLORS.white}]}
      onPress={handlePress}
      >Details
    </Button>
    )
  }  

  
  export const ContinueButton = ({ text,handlePress, ...props}) => {
    return (
      <TouchableOpacity      
      style={styles.ContBtnStyles}
      onPress={handlePress}
      ><Text style={styles.ContLableStyles}>{text}</Text>
    </TouchableOpacity>
    )
  }

  export const SaveAndCancelButton = ({ handlePress, ...props}) => {
    return (<View  style={{ flexDirection: 'row', marginTop:20, marginBottom:60, justifyContent:'space-between'}}>
          <TouchableOpacity      
          style={styles.CancelBtnStyles}
          onPress={handlePress}
          ><Text style={styles.ContLableStyles}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity      
          style={styles.SaveBtnStyles}
          onPress={handlePress}
          ><Text style={styles.ContLableStyles}>Save</Text>
        </TouchableOpacity>
    </View>
     
    )
  }
const styles = StyleSheet.create({
    TrackBtnStyles:{
        width: 137,
        borderRadius: 4,
        backgroundColor: COLORS.black,
        justifyContent: 'center'
    },
    TrackLableStyles:{
        fontFamily: FONTS.bold,
        fontSize: SIZES.font,
        lineHeight: SIZES.extraLarge,  
    },
    ContBtnStyles:{
      borderRadius:7,
      marginTop:24,
      marginBottom:25,
      height: 45,
      alignItems: 'center'   ,
      justifyContent: 'center',
      rowGap: 10,
      backgroundColor:COLORS.primary
     },
    ContLableStyles:{
     fontFamily: FONTS.bold,
     fontWeight: 'bold',
     fontSize: SIZES.medium,
     lineHeight: SIZES.extraLarge ,
     color: COLORS.white,
    },
    CancelBtnStyles:{
      backgroundColor: COLORS.danger,
      height: 45,
      width: 137,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:7
    },
    SaveBtnStyles:{
      backgroundColor: COLORS.primary,
      height: 45,
      width: 137,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:7
    },


})
