import { View,Image, Text,StyleSheet, Dimensions } from 'react-native'
import React from 'react';


const {height, width} = Dimensions.get('window');

const Slide = ({item}) => {
  return (
    <View style={{ alignItems: 'center'}}>
        <Image source={item.image} style= {styles.ImageStyles} />
      {/* <Text style={ styles.title}>{item.title}</Text>
      <Text style={ styles.subTitle}>{item.subTitle}</Text> */}
    </View>
  )
}

export default Slide;

const styles = StyleSheet.create({
    ImageStyles:{
        height: '70%', 
        width, 
        resizeMode: 'contain',
        backgroundColor: '#784335'
    },
    title: {
        // color:COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    subTitle: {
        // color:COLORS.white,
        fontSize:13,
        marginTop: 10,
        textAlign: 'center',
        maxWidth: width * .85,
        lineHeight: 23
    },
})