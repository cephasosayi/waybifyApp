import * as React from 'react';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import {SettingsScreen, Order, History, CreateOrder} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const MyTabBar = () => {
  return (  
    <Tab.Navigator
    screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Order') {
            iconName = focused
              ? 'truck-check'
              : 'truck-check-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'clipboard-text-clock' : 'clipboard-text-clock-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      })}
      >
      <Tab.Screen options={{headerShown:false, 
        tabBarLabelStyle:styles.tabBarLabelStyles,
        tabBarIconStyle:styles.tabBarIconStyles

        }}  
        name="Order" component={Order}
         />
      <Tab.Screen options={{headerShown:false, 
        tabBarLabelStyle:styles.tabBarLabelStyles,
        tabBarIconStyle:styles.tabBarIconStyles

        }}   name="History" component={History} />
      <Tab.Screen options={{headerShown:false, 
        tabBarLabelStyle:styles.tabBarLabelStyles,
        tabBarIconStyle:styles.tabBarIconStyles

        }}   name="Settings" component={SettingsScreen} />

    </Tab.Navigator>
   
  );
};

const Stack = createNativeStackNavigator();

const StackNav =()=>{
  return(
       <Stack.Navigator>
          <Stack.Screen options={{headerShown:true}}   
          name="CreateOrder"
          component={CreateOrder} />
          </Stack.Navigator>
  )
}

export default {MyTabBar, StackNav}

const styles = StyleSheet.create({
    tabBarLabelStyles:{ 
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,},
    tabBarIconStyles:{
        marginTop: 3
    },
})