import { View, Text, FlatList, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox';

const ChatScreen = () => {
  const tailwind = useTailwind();

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
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