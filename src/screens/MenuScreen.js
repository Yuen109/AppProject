import React from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';

const MenuScreen = () => {
    const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tailwind('text-blue-600')}>This is the Menu</Text>    
    </SafeAreaView>
  )
}

export default MenuScreen
