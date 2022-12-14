import { View, TextInput } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';

const InputBox = () => {
    const tailwind = useTailwind();

    const [message, setMessage] = useState('');

    const onSend = () => {
        console.warn(`Sending message: ${message}`)

        setMessage('')
    };

  return (
    <View style={tailwind('flex flex-row bg-sky-100 items-center justify-center')}>
        {/* Text input  */}
        <TextInput 
        placeholder='Type your message...'
        value={message}
        onChangeText={setMessage}
        style={tailwind('flex-1 bg-white p-2 mx-2 mb-2 border border-gray-500 rounded-xl')}
        />
        {/* Send icon */}
        <MaterialIcons onPress={onSend} name='send' size={24} color='black' 
        style={tailwind('mr-2')}
        />
    </View>
  )
}

export default InputBox