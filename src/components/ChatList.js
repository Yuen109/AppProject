import { View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const ChatList = ({ chat }) => {
    const tailwind =useTailwind();
    
    const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Chat', { id:chat.id, name:chat.user.name } )} 
    style={tailwind('flex-row mx-3 my-2 h-16')}>
      {/* User icon */}
      <Image source={{ uri: chat.user.image }} 
      style={tailwind('w-14 h-14 mr-3 rounded-full')}/>
      <View style={tailwind('flex-1 border-b border-b-stone-300')}>
          <View style={tailwind('flex-row mb-2')}>
            {/* User name */}
            <Text style={tailwind('flex-1 font-semibold')} numberOfLines={1}>
                {chat.user.name}
            </Text>
            {/* Send out time */}
            <Text style={tailwind('text-gray-500')}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
          </View>
          {/* Context */}
          <Text style={tailwind('text-gray-500 ')} numberOfLines={2}>
          {chat.lastMessage.text}
          </Text>
      </View>
    </Pressable> 
  )
}

export default ChatList