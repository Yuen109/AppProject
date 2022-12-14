import { View, Text, SafeAreaView, ScrollView, Image, FlatList  } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import dayjs from 'dayjs';
import ChatList from '../components/ChatList';
import chats from '../../assets/data/chats.json'


const CommunityScreen = () => {
  const tailwind = useTailwind();

  return (
    <FlatList
    data={chats}
    renderItem={({ item }) => <ChatList chat={item} />}
    />
  )
}

export default CommunityScreen