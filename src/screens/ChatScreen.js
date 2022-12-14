import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  const tailwind = useTailwind();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tailwind('flex-1')}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        style={tailwind('p-2 bg-sky-100')} />
      <InputBox />
    </KeyboardAvoidingView>
  )
}

export default ChatScreen