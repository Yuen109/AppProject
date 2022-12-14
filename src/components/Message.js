import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
    const Tailwind = useTailwind();


    const isMyMessage = () => {
        return message,user,id === 'u1';
  };


  return (
    <View style={Tailwind('bg-white m-1 p-3 rounded-lg')}>
        {/* User name */}
        <Text style={Tailwind('text-sm text-sky-700 mb-1')}>{message.user.name}</Text>
        {/* Context */}
        <Text>{message.text}</Text>
        {/* Time */}
        <Text style={Tailwind('text-gray-500 self-end')}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message