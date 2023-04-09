import { View,Image, Text,SafeAreaView} from 'react-native'
import React from 'react'
import OrderHeader from '../components/OrderHeader'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { StyleSheet } from 'react-native'
import person1 from '../assets/img/person1.png'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderHistoryContainer from '../components/OrderHistoryContainer'
import { FlatList } from 'react-native'
import { dummy } from '../constants/dummy'


const History = () => {
  return (
    <SafeAreaView style={styles.container}>
       {/* Header  */}
       <View style={styles.headerWrapper}>
        {/* user bio  */}
        <View style={styles.bioWrapper}>
          <Image source={person1} style={styles.profileImg}/>
        </View>
        {/* title  */}
          <View style={{ alignSelf:'center', alignItems:'center'}}>
            <Text style={styles.welcomeAddress}> History</Text>
          </View>

        {/* nav  */}
        <View>
         <TouchableOpacity   
         onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Settings');
      }}>
              <Icon name='menu' size={47} />
          </TouchableOpacity> 
        </View>
      </View>

      {/* Summary stats  */}

      <View style={styles.statWrapper}>

      <View>
        <Text style={styles.title}>Summary</Text>
      </View>
        <View style={styles.statContainer}>
          <View style={styles.stats}>
            <Text style={styles.label}>Packages</Text>
           <View style={styles.valueBox}>
            <Text style={styles.value}>150</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <Text style={styles.label}>Delivered</Text>
            <View style={styles.valueBox}>
            <Text style={styles.value}>140</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <Text style={styles.label}>Spent(&#x20A6;)</Text>
           <View style={styles.valueBox}>
          <Text style={styles.value}>120k</Text>
          </View> 
          </View>
        </View>
      </View>

    <View>
    <Text style={[styles.title, {marginTop:18}]}>Orders</Text>
   <FlatList
   data={dummy}
   
  renderItem={({item}) =>
  <OrderHistoryContainer data={item} />
  }
  keyExtractor={(item) => item.id}
  />

    </View>
    </SafeAreaView>
  )
}

export default History



const styles = StyleSheet.create({
  container:{
  flex:1,
  

  },
  headerWrapper:{
    width: 334 ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 35
  },
  bioWrapper:{
    flexDirection: 'row',
    rowGap: 10,
    columnGap: 10,

   
  },
  profileImg:{
    height: 44,
    width: 49,
    resizeMode: 'contain',
    backgroundColor: COLORS.secondary,
    borderRadius:7,
    borderWidth: .6,
    borderColor: COLORS.secondary
  },
 
  welcomeAddress:{
    fontFamily: FONTS.semiBold,
    fontWeight: '500',
    fontSize: SIZES.font,
    lineHeight: SIZES.extraLarge,
    color: COLORS.black,

  },
  statWrapper:{
    marginTop: 20,
 
    
  },
  statContainer:{
    justifyContent: 'space-between',
    alignItems:'center',
    alignSelf:'center',
    width:334,
    height: 101,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius:7,
    padding: 15
    
  },
  label:{
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    lineHeight: SIZES.extraLarge,
    textAlign:'center'    

  },
  valueBox:{
    width: 98,
    height: 43,
    backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
    shadowColor: COLORS.white,
    shadowOffset: 1,
    shadowRadius:1,
    marginTop:2
  },
  value:{
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
    lineHeight: 33,
    color: COLORS.black
  },
  title:{
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    lineHeight: 27,
    color: COLORS.black,
    marginBottom:7,
    marginHorizontal: 15
  },

})