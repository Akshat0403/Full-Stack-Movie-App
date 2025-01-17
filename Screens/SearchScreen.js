import { 
    View, 
    Text, 
    Dimensions, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    TouchableWithoutFeedback, 
    SafeAreaView,
    Image, 
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {
    fetchTrendingMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    image500
} from './MovieDB';
import { useEffect } from 'react';


const {width, height} = Dimensions.get('window');


export default function SearchScreen() {
    const navigation = useNavigation();
    const [results, setResults] = useState([]);

    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    
    useEffect(() => {
        getMovies();
    }, []);
    

    const getMovies = async () => {
        const trending = await fetchTrendingMovies();
        const upcoming = await fetchUpcomingMovies();
        const topRated = await fetchTopRatedMovies();
        if (trending && trending.results && upcoming && upcoming.results && topRated && topRated.results){
            setResults([...trending.results, ...upcoming.results, topRated.results]);
        };
    };


    return (
        <SafeAreaView className = 'bg-neutral-800 flex-1'>
            <View className = 'mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full'>
                <TextInput 
                    placeholder = 'Search Movie'
                    placeholderTextColor = {'lightgray'}
                    className = 'pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider'
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home Screen')}
                    className = 'rounded-full p-3 m-1 bg-neutral-500'
                >
                    <XMarkIcon size={25} color={'white'} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{paddingHorizontal: 15}}
                classname = 'space-y-3'
            >
                <Text className = 'text-white font-semibold ml-2'>
                    Results ({results.length})
                </Text>
                <View className = 'flex-row justify-between flex-wrap'>
                    {
                        results.map((item, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    key = {index}
                                    onPress={() => navigation.push('Movie', item)}
                                >
                                    <View className = 'space-y-2 mb-4'>
                                        <Image 
                                            className = 'rounded-3xl'
                                            source = {{uri: image500(item.poster_path)}}

                                            style = {{width: width*0.44, height: height*0.3}}
                                        />
                                        <Text className = 'text-neutral-300 ml-1'>
                                            {item.original_title}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};