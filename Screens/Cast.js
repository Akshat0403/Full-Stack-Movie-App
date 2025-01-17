import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { image185 } from './MovieDB';
import { useNavigation } from '@react-navigation/native';

export default function Cast({ cast }) {
    const navigation = useNavigation();
    let castName = 'Ram Gopal Verma';
    let characterName = 'John Wick';
    return (
        <View>
            <Text className = 'text-white text-lg mx-4 mb-5'>
                Top Cast
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {{paddingHorizontal: 15}}
            >
            {
            cast && cast.map((person, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        className = 'mr-4 items-center'
                        onPress={() => navigation.navigate('Actor Description', {...person})}
                    > 
                        <View className = 'overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500'>
                        <Image 
                            className = 'rounded-2xl h-24 w-20'
                            source={{uri: image185(person?.profile_path)}}
                        />
                        </View>
                        <Text className = 'text-white text-xs mt-1'>
                        {
                            person?.original_name
                        }
                        </Text>
                        <Text className = 'text-white text-xs mt-1'>
                        {
                            person?.character
                        }
                        </Text>
                    </TouchableOpacity>
                )
            })
            }
            </ScrollView>
        </View>
    )
}