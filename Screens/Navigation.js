import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import TopRatedMovies from './TopRatedMovies';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import Movie from './Movie';
import WelcomeScreen from './WelcomeScreen';
import ActorDescription from './ActorDescription';
import ActorMovies from './ActorMovies';
import SeeAll from './SeeAll';
import SeeAll2 from './SeeAll2';
import SeeAll3 from './SeeAll3';
import SimilarMovies from './SimilarMovies';
import SearchScreen from './SearchScreen';
import {
  apiKey,
  TrendingMoviesImages,
  UpcomingImages,
  TopRatedImages,
} from './constant';
import {
  apibaseUrl,
  trendingMoviesEndPoint,
  upcomingMoviesEndPoint,
  topRatedMoviesEndPoint,
  image500, 
  image185,
  image342,
  apiCall,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies
} from './MovieDB'
import ProfileScreen from './ProfileScreen';
import FavouritesScreen from './FavouritesScreen';
import SettingsScreen from './SettingsScreen';
import SimilarMoviesDescription from './SimilarMoviesDescription';


export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName = "Home Screen" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = 'Actor Description' component = {ActorDescription} />
        <Stack.Screen name = 'Actor Movies' component = {ActorMovies} />
        <Stack.Screen name = 'Home Screen' component = {HomeScreen} />
        <Stack.Screen name = 'Movie' component = {Movie} />
        <Stack.Screen name = 'See All' component = {SeeAll} />
        <Stack.Screen name = 'See All 2' component = {SeeAll2} />
        <Stack.Screen name = 'Similar Movies' component = {SimilarMovies} />
        <Stack.Screen name = 'Top Rated Movies' component = {TopRatedMovies} />
        <Stack.Screen name = 'Trending Movies' component = {TrendingMovies} />
        <Stack.Screen name = 'Upcoming Movies' component = {UpcomingMovies} />
        <Stack.Screen name = 'Welcome Screen' component = {WelcomeScreen} />
        <Stack.Screen name = 'Search Screen' component = {SearchScreen} />
        <Stack.Screen name = 'See All 3' component = {SeeAll3} />
        <Stack.Screen name = 'Profile Screen' component = {ProfileScreen} />
        <Stack.Screen name = 'Favourite Screen' component = {FavouritesScreen} />
        <Stack.Screen name = 'Settings Screen' component = {SettingsScreen} />
        <Stack.Screen name = 'Similar Movies Description' component = {SimilarMoviesDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}