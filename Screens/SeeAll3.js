import { 
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    Pressable,
    FlatList,
    Image 
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import MasonryList from '@react-native-seoul/masonry-list';
  import { useNavigation } from '@react-navigation/native';
  import { ChevronLeftIcon } from 'react-native-heroicons/outline';
  import { TrendingMoviesImages } from './constant';
  import {
    Animated,
    FadeInDown,
  } from 'react-native-reanimated';
  import {
    heightToDP as hp,
    widthToDP as wp
  } from 'react-native-responsive-screens';
  import { fetchTopRatedMovies, fetchUpcomingMovies, image185, fetchTrendingMovies } from './MovieDB';
  
  
  export default function SeeAll3() {
      const [trending, setTrending] = useState([]);
      const navigation = useNavigation();
  
      useEffect(() => {
        getTrendingMovies();
      }, []);
  
  
      const getTrendingMovies = async() => {
        const data = await fetchTrendingMovies();
        if(data && data.results){
            setTrending(data.results);
        }
      };
  
  
      return (
        <SafeAreaView className = 'flex-1 flex bg-neutral-700'>
          
          
          {/* Title */}
          <View className = 'flex-row justify-start mt-1'>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon size={22} color={'white'} strokeWidth={4} />
            </TouchableOpacity>
            <Text className = 'font-bold text-white text-2xl ml-2 -mt-1'>
              Trending Movies
            </Text>
            <Text className = 'font-bold text-white text-lg mt-8 -ml-48'>
                Results ({trending.length})
            </Text>
          </View>
  
          {/* List */}
          <MasonryList
            data={trending} 
            numColumns={2}
            showsVerticalScrollIndicator = {false}
            renderItem={({item, i}) => (
              <MovieCard item = {item} index = {i} navigation = {navigation} />
            )}
          />
        </SafeAreaView>
      );
  };
  
  
  const MovieCard = ({ item, index, navigation }) => {
    let isEven = index % 2 == 0;
    return(
      <View>
        <Pressable
          style = {{
            width: '100%',
            paddingLeft: isEven ? 0 : 8,
            paddingRight: isEven ? 8 : 0,
          }}
          className = 'flex justify-center mb-4 space-y-1'
          onPress={() => navigation.navigate('Movie', {...item})}
        >
          <Image 
            style = {{
              width: '100%',
              height: 300,
              borderRadius: 35
            }}
            source = {{uri: image185(item.poster_path)}}
            className = 'bg-black/5'
          />
          <Text className = 'font-semibold ml-2 text-neutral-400'>
            {item.title}
          </Text>
        </Pressable>
      </View>
    )
  }