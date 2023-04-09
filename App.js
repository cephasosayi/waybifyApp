import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import React from 'react';
import CreateOrder  from './screens/CreateOrder';
import { StyleSheet } from 'react-native';
import { FONTS, SIZES,COLORS } from './constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import History from './screens/History';
import  Order from './screens/Order';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDriver from './screens/SelectDriver';
import Profile from './screens/Profile';
import Security from './screens/Security';
import PaymentSuccess from './screens/PaymentSuccess';
import StatusUpdate from './screens/StatusUpdate';
import OrderDetail from './screens/OrderDetail';



const theme = {
  ...DefaultTheme,
  colors:{
      ...DefaultTheme.colors,
      primary: '#013392',
      secondary: '#585555',
      onboardingColor: '#7E483B',
      background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

// const OrderScreens =()=>{
//   return(
//     <Stack.Navigator initialRouteName='Order'>
//           <Stack.Screen name='Orders' component={Order} options={{headerShown:false}} />
//           <Stack.Screen options={{headerShown:true}}   
//           name="CreateOrder"
//           component={CreateOrder} />
//     </Stack.Navigator>
//   )
// }

const Tab = createBottomTabNavigator();

const TabScreen = () => {
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
      <Tab.Screen options={{headerShown:true, 
        tabBarLabelStyle:styles.tabBarLabelStyles,
        tabBarIconStyle:styles.tabBarIconStyles,

        }}   name="Settings" component={SettingsScreen} />

    {/* <Tab.Screen  name="Stack" component={StackScreen} /> */}

    </Tab.Navigator>
   
  );
};


export default function App() {

  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) return null;
    return (
      <PaperProvider theme={theme}>
       <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={TabScreen} options={{headerShown:false}}  />
          <Stack.Screen name='Orders' component={Order} options={{headerShown:false}} />
          <Stack.Screen options={{headerShown:true, title:'Create Order'}} 
          name="CreateOrder" 
          component={CreateOrder} />
          <Stack.Screen options={{headerShown:true, title:'Select Driver'}} 
          name="SelectDriver" 
          component={SelectDriver} />
           <Stack.Screen options={{headerShown:true, title:'Profile'}} 
          name="Profile" 
          component={Profile} />
           <Stack.Screen options={{headerShown:true, title:'Security'}} 
          name="Security" 
          component={Security} />
           <Stack.Screen options={{headerShown:true, title:'Payment Sucessful'}} 
          name="paysucess" 
          component={PaymentSuccess} />
           <Stack.Screen options={{headerShown:true, title:'Track'}} 
          name="Track" 
          component={StatusUpdate} />
         
         <Stack.Screen options={{headerShown:true, title:'Order Details'}} 
          name="Detail" 
          component={OrderDetail} />
         
    </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
  

  const styles = StyleSheet.create({
    tabBarLabelStyles:{ 
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,},
    tabBarIconStyles:{
        marginTop: 3
    },
})