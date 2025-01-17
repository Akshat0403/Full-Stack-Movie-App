import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { image500 } from './MovieDB';


export default function SimilarMovies({ data }) {
  const navigation = useNavigation();
  return (
    <View className = 'mt-10'>
      <Text className = 'font-bold text-white text-2xl ml-2'>
        Similar Movies
      </Text>
      <FlatList 
        data = {data}
        renderItem={({item}) => <SimilarMovieCard item = {item} navigation = {navigation} />}
        horizontal
        showsHorizontalScrollIndicator = {false}
      />
    </View>
  )
};


const SimilarMovieCard = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Similar Movies Description', {...item})}
    >
        <View style = {{
            width: 290,
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 2.84,
            elevation: 5,
            margin: 10,
        }}>
            <Image 
                source={{uri: image500(item.poster_path)}} 
                style = {{
                    width: '80%',
                    height: '90%',
                    resizeMode: 'cover',
                    borderRadius: 10
                }}
            />
            <Text className = 'text-white text-lg'>
              {item.title}
            </Text>
        </View>
    </TouchableOpacity>
  );
};