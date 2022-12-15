import { View, Text, Button, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import {useTailwind} from 'tailwind-rn/dist';

const CustomersScreen = ({ navigation }) => {
    const tailwind = useTailwind();
	const [text, onChangeText] = useState("Type Anything");
  	const [number, onChangeNumber] = useState(null);

    return (
        <ScrollView style={tailwind('mt-12 h-full')}>
			<View style={tailwind('items-center justify-center')}>
				<View style={tailwind('bg-indigo-200 px-3 py-1 rounded-full')}>
					<Text style={tailwind('font-semibold')}>
						This is customer page
					</Text>
				</View>
				<TextInput
					style={tailwind('border-gray-400 border-2 p-4 m-10 rounded-full')}
					onChangeText={onChangeText}
					value={text}
				/>
				{/* <TextInput
					style={tailwind('border-gray-400 border-2 p-4 rounded-full')}
					onChangeText={onChangeNumber}
					value={number}
					placeholder="useless placeholder"
					keyboardType="numeric"
				/> */}
				<Button
				title="Go to Community Screen"
				onPress={() => navigation.navigate('Community')}
				/>
			</View>
		</ScrollView>
    );
};

export default CustomersScreen
