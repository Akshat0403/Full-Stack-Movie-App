import { 
    ScrollView, 
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Animated,
    Easing,
    Dimensions,
    Image
} from 'react-native';
import 
    React, 
    { 
        useEffect, 
        useState 
    } from 'react';
import {
    ArrowLeftIcon, 
    Bars3CenterLeftIcon, 
    MagnifyingGlassIcon, 
    HeartIcon,
    CogIcon
} from 'react-native-heroicons/outline';
import TrendingMovies from './TrendingMovies';
import { TopRatedImages, UpcomingImages } from './constant';
import TopRatedMovies from './TopRatedMovies';
import UpcomingMovies from './UpcomingMovies';
import axios from 'axios';
import {fetchTrendingMovies} from './MovieDB';
import { fetchUpcomingMovies } from './MovieDB';
import { fetchTopRatedMovies } from './MovieDB';
import { useNavigation } from '@react-navigation/native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';




const ios = Platform.OS == 'ios';
const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [slideAnim, setSlideAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, []);

    useEffect(() => {
        if(modalVisible){
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
        else{
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if(data && data.results){
            setTrending(data.results);
        }
    };

    const getUpcomingMovies = async() => {
        const data = await fetchUpcomingMovies();
        if(data && data.results){
            setUpcoming(data.results);
        }
    };
    
    const getTopRatedMovies = async() => {
        const data = await fetchTopRatedMovies();
        if(data && data.results){
            setTopRated(data.results);
        }
    }
    

    const navigation = useNavigation();
    return (
        <View className = 'flex-1 bg-neutral-800'>
            
            {/* Search Bar and Logo */}
            <SafeAreaView className = {ios? '-mb-2': 'mb-3'}>
                <StatusBar style = 'light' />
                <View className = 'flex-row justify-between items-center mx-4'>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Bars3CenterLeftIcon size={30} strokeWidth={3} color = 'white' />
                    </TouchableOpacity>
                    <Text className = 'text-white text-3xl font-bold'>
                        <Text style = {{color: '#eab308'}}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search Screen')}>
                        <MagnifyingGlassIcon size={30} strokeWidth={3} color={'white'} />
                    </TouchableOpacity>
                </View>                
            </SafeAreaView>
            <Modal
                animationType = 'none'
                transparent = {true}
                visible = {modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style = {{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <Animated.View 
                        style = {{
                            width: '50%',
                            height: 820,
                            padding: 20,
                            transform: [{ translateX: slideAnim.interpolate({inputRange: [0, 1], outputRange: [-screenWidth / 2, 0]})}]
                        }}
                        className = 'bg-neutral-700'
                    >
                        <View 
                            style = {{ 
                                flexDirection: 'row', 
                                justifyContent: 'space-around', 
                                alignItems: 'center',
                                marginLeft: -160 
                            }}
                        >
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                            >
                                <ArrowLeftIcon 
                                    size = {24} 
                                    strokeWidth = {3} 
                                    color = "white"     
                                />
                            </TouchableOpacity>
                        </View>

                        <View 
                            style = {{ 
                                alignItems: 'center', 
                                paddingVertical: 10 
                            }}
                        >
                            <Image 
                                source = {require('../Images/avatar.png')} 
                                style = {{ 
                                    width: 150, 
                                    height: 150, 
                                    borderRadius: 130,
                                    color: 'white'  
                                }}
                            />
                            <Text
                                style = {{
                                    fontSize: 18, 
                                    marginLeft: 10,
                                    color: 'white'
                                }}
                            >
                                Akshat Saxena
                            </Text>
                            <Text
                                style = {{
                                    fontSize: 18, 
                                    marginLeft: 10,
                                    color: 'white'
                                }}
                            >
                                +91 8306148803
                            </Text>
                        </View>


                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Favourite Screen')}
                        >
                            <View 
                                style = {{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    paddingVertical: 10 
                                }}
                            >
                                <HeartIcon 
                                    size = {24} 
                                    strokeWidth = {3} 
                                    color = "white" 
                                />
                                <Text 
                                    style = {{ 
                                        fontSize: 18, 
                                        marginLeft: 10,
                                        color: 'white' 
                                    }}
                                >
                                    Favourites
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                        
                        
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Settings Screen')}
                        >
                            <View 
                                style = {{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    paddingVertical: 10 
                                }}
                            >
                                <CogIcon 
                                    size = {24} 
                                    strokeWidth = {3} 
                                    color = "white"     
                                />
                                <Text 
                                    style = {{ 
                                        fontSize: 18, 
                                        marginLeft: 10,
                                        color: 'white' 
                                    }}
                                >
                                    Settings
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                        
                        
                        <TouchableOpacity 
                            onPress={() => setModalVisible(false)}
                        >
                            <Text 
                                style = {{ 
                                    fontSize: 18, 
                                    paddingVertical: 10,
                                    color: 'white' 
                                }}
                            >
                                Close
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                </View>
            </Modal>

            <ScrollView>
                {trending.length > 0 && <TrendingMovies data = {trending} /> }
                {upcoming.length > 0 && <UpcomingMovies data = {upcoming} />}
                {topRated.length > 0 && <TopRatedMovies data = {topRated} />}
            </ScrollView>
        </View>
    );
};