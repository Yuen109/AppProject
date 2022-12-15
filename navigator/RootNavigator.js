import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ChatScreen from '../src/screens/ChatScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen  name='Main' component={TabNavigator} />
        <RootStack.Screen  name='Chat' component={ChatScreen}/>
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator;
