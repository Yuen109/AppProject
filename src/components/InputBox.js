import { TextInput } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
    const tailwind = useTailwind();

    const [message, setMessage] = useState('');

    const onSend = () => {
        console.warn(`Sending message: ${message}`)

        setMessage('')
    };

  return (
    <SafeAreaView edges={['bottom']} style={tailwind('flex flex-row bg-sky-100 items-center justify-center')}>
        {/* Text input  */}
        <TextInput 
        placeholder='Type your message...'
        value={message}
        onChangeText={setMessage}
        style={tailwind('flex-1 bg-white p-2 mx-3 mb-2 border border-gray-500 rounded-xl')}
        />
        {/* Send icon */}
        <MaterialIcons onPress={onSend} name='send' size={24} color='black' 
        style={tailwind('mr-3')}
        />
    </SafeAreaView>
  )
}

export default InputBox