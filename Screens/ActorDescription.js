import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'
import ActorMovies from './ActorMovies';
import { fetchPersonDetails, fetchPersonMovies, image185, image500 } from './MovieDB';
import { FlatList } from 'react-native';
import { TrendingMoviesImages } from './constant';


var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios? '': ' my-3';

export default function ActorDescription({ person }) {
    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personsmovies, setPersonsMovies] = useState({});
    const [personInfo, setPersonInfo] = useState({});

    useEffect(() => {
        getPersonalDetails(item.id);
        getPersonMovies(item.id);
    }, [item]);

    const getPersonalDetails = async id => {
        const data = await fetchPersonDetails(id);
        if(data){
            setPersonInfo(data);
        }
    };

    const getPersonMovies = async id => {
        const data = await fetchPersonMovies(id);
        if(data && data.cast){
            setPersonsMovies(data.cast);
        }
    }
    return (
        <ScrollView className = 'flex-1 bg-neutral-900' contentContainerStyle={{paddingBottom: 20}}>
            <SafeAreaView className = {'z-20 w-full flex-row justify-between items-center px-4'+verticalMargin}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style = {{backgroundColor: '#eab308'}}
                    className = 'rounded-xl'
                >
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color = 'white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size={35} color={isFavourite? 'red': 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View>
                <View
                    className = 'flex-row justify-center'
                    style = {{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 1
                    }}
                >
                    <View className = 'items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500'>
                        <Image 
                            source={{uri: image500(personInfo?.profile_path)}}
                            style = {{height: height*0.43, width: width*0.74}}
                        />
                    </View>
                </View>
                <View className = 'mt-6'>
                    <Text className = 'text-3xl text-white font-bold text-center'>
                        {personInfo?.name}
                    </Text>
                    <Text className = 'text-base text-neutral-500 text-center'>
                        {personInfo?.place_of_birth}
                    </Text>
                </View>
                <View className = 'mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full'>
                <View className = 'border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className = 'text-white font-semibold'>
                            Gender
                        </Text>
                        <Text className = 'text-neutral-300 text-sm'>
                            {personInfo?.gender == 1? 'Female': 'Male'}
                        </Text>
                    </View>
                    <View className = 'border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className = 'text-white font-semibold'>
                            Birthday
                        </Text>
                        <Text className = 'text-neutral-300 text-sm'>
                            {personInfo?.birthday}
                        </Text>
                    </View>
                    <View className = 'border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className = 'text-white font-semibold'>
                            known for
                        </Text>
                        <Text className = 'text-neutral-300 text-sm'>
                            {personInfo?.known_for_department}
                        </Text>
                    </View>
                    <View className = 'border-r-2 border-r-neutral-400 px-2 items-center'>
                        <Text className = 'text-white font-semibold'>
                            Popularity
                        </Text>
                        <Text className = 'text-neutral-300 text-sm'>
                            {personInfo?.popularity}
                        </Text>
                    </View>
                </View>
                <View className = 'my-6 mx-4 space-y-2'>
                    <Text className = 'text-white text-lg'>Biography</Text>
                    <Text className = 'text-neutral-400 tracking-wide'>
                        {personInfo?.biography}
                    </Text>
                </View>


                <View className = 'mb-6'>
                    <Text className = 'font-bold text-white text-2xl ml-2'>
                        Movies
                    </Text>
                    <FlatList 
                        data={personsmovies}
                        renderItem={({item}) => <MoviesCard navigation = {navigation} item = {item} />}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                    />
                </View>
            </View>
        </ScrollView>
    );
}


const MoviesCard =  ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Actor Movies', {...item})}>
            <View
                style = {{
                    width: 270,
                    height: 480,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 2.84,
                    elevation: 5,
                    margin: 2
                }}
                className = '-mt-16'
            >
                <Image 
                    source = {{uri: image500(item?.poster_path)}}
                    style = {{
                        width: "80%",
                        height: '90%',
                        resizeMode: 'contain',
                        borderRadius: 10
                    }}
                />
                <Text className = 'text-white text-lg'>
                    {item?.original_title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}