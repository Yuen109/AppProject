import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import CustomersScreen from '../src/screens/CustomersScreen';
import MenuScreen from '../src/screens/MenuScreen';
import CommunityScreen from '../src/screens/CommunityScreen';
import ChartScreen from '../src/screens/ChatScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      // tabBarActiveTinColor: "#EB6A7C",
      // tabBarInactiveTintColor: "Gray",
      tabBarIcon: ({ focused }) => {
        if (route.name === "Menu") {
          return (
            <Icon 
            name='text'
            type='entypo'
            color={focused ? "#EB6A7C" : "gray"}/>
          );
        } else if (route.name === "Customers") {
          return (
            <Icon
            name='users'
            type='entypo'
            color={focused ? "#EB6A7C" : "gary"}/>
          );
        } else if (route.name === "Chat") {
          return (
            <Icon
            name='users'
            type='entypo'
            color={focused ? "#EB6A7C" : "gary"}/>
          );
        } else {
          return (
            <Icon 
            name='home'
            type='entypo'
            color={focused ? "#EB6A7C" : "gary"}/>
          )
        }
      }
    })}>
      {/* Show taps bar */}
      <Tab.Screen name='Community' component={CommunityScreen} />
      <Tab.Screen name='Customers' component={CustomersScreen} options={{headerShown: false}} />
      <Tab.Screen name='Menu' component={MenuScreen} />
      <Tab.Screen name='Chat' component={ChartScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator