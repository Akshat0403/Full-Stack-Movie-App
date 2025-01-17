import { View, Text, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronDownIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Dimensions } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchMovieCredit, fetchMovieDetails, fetchSimilarMovies, image185, image500 } from './MovieDB';
import SimilarMovies from './SimilarMovies';
import { TrendingMoviesImages } from './constant';
import { FlatList } from 'react-native';
import Cast from './Cast';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '': ' mt-3';

export default function SimilarMoviesDescription(props) {
  let item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, ToggleFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3 , 4, 5]);
  let moviename = 'Ant Man and The Wasp: Quantamania'
  const [similarMovies, setSimilarMovies] = useState([]);
  let castName = 'Ram Gopal Verma';
  let characterName = 'John Wick';
  const [movie, SetMovie] = useState({});


  useEffect(() => {
    getSimilarMovies();
    getMovieData(item.id);
    getMovieCredit(item.id);
    getSimilarMovies(item.id);
  }, []);



  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(item.id);
    if(data && data.results){
      setSimilarMovies(data.results);
    }
  };

  const getMovieData = async id => {
    const data = await fetchMovieDetails(item.id);
    if(data){
      SetMovie(data);
    }
  }

  const getMovieCredit = async id => {
    const data = await fetchMovieCredit(item.id);
    if(data && data.cast){
      setCast(data.cast);
    }
  }

  return (
    <ScrollView 
      contentContainerStyle = {{paddingBottom: 20}}
      className = 'flex-1 bg-neutral-900'
    >
      {/* Back Button and Movie Poster */}
      <View className = 'w-full'>
        <SafeAreaView className = 'w-full flex-row justify-between items-center px-4'>
          <TouchableOpacity onPress={() => navigation.goBack()} className = 'rounded-xl' style = {{backgroundColor: '#eab308'}}>
            <ChevronLeftIcon size = {30} strokeWidth={3} color = '#fff' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ToggleFavourite(!isFavourite)}>
            <HeartIcon size = {30} strokeWidth={3} color = {isFavourite? '#eab308': 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View>
        <Image 
          source={{uri: image185(movie?.poster_path)}}
          style = {{width, height: height*0.75}}
        />
        <LinearGradient 
          colors = {['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
          style = {{width, height: height*0.40}}
          start = {{x: 0.5, y: 0}}
          end = {{x: 0.5, y: 1}}
          className = 'absolute bottom-0'
        />
      </View>
      
      
      <View style = {{marginTop: -(height*0.09)}} className = 'space-y-3'>
        <Text className = 'text-white text-center text-3xl font-bold tracking-wider'>
          {movie?.original_title}
        </Text>
        {
          movie?.id?(
            <Text className = 'text-neutral-400 font-semibold text-center text-lg'>
              {movie?.status} - {movie?.release_date?.split('-')[0]} - {movie?.runtime} min 
            </Text>
          ): null
        }
        <View className = 'flex-row justify-center mx-4 space-x-2'>
          {
            movie?.genres?.map((genre, index) => {
              return(       
                <Text key={index} className = 'text-neutral-400 font-semibold text-lg text-center'>
                  {genre?.name}-
                </Text>
              )
            })
          }
        </View>
        <Text className = 'text-neutral-400 tracking-wide mx-4'>
          {item?.overview}
        </Text>
      </View>

      <Cast cast={cast} />
      <SimilarMovies data = {similarMovies} />
    </ScrollView>
  );
};


