import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'

const ChatScreen = () => {
  const tailwind = useTailwind();
  return (
    <FlatList
    data={messages}
    renderItem={({ item }) => <Message message={item} />}
    inverted
    style={tailwind('p-2 bg-sky-100')}
    />
  )
}

export default ChatScreen