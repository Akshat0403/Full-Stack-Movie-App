// TrendingMovies.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { TrendingMoviesImages } from './constant';
import { useNavigation } from '@react-navigation/native';
import { image500 } from './MovieDB';


export default function TrendingMovies({ data }) {
    const navigation = useNavigation();
    return (
        <View className = 'mb-8'>
            <Text className = 'font-bold text-white text-2xl ml-2'>
                Trending
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('See All 3')}>
              <Text style = {{color: '#eab308', marginLeft: 335, marginTop: -23}} >
                See All
              </Text>
            </TouchableOpacity>
            <FlatList 
                data = {data}
                renderItem={({item}) => <TrendingMoviesCard item = {item} navigation = {navigation} />}
                horizontal
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    );
};
const TrendingMoviesCard = ({item, navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Movie', {...item})}>
            <View style = {{
                width: 270,
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 2.84,
                elevation: 5,
                margin: 10
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
}