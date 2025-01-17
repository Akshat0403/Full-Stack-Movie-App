import axios from "axios";
import { apiKey } from "./constant";

export const apibaseUrl = 'https://api.themoviedb.org/3';
export const trendingMoviesEndPoint = `${apibaseUrl}/trending/movie/day?api_key=${apiKey}`;
export const upcomingMoviesEndPoint = `${apibaseUrl}/movie/upcoming?api_key=${apiKey}`;
export const topRatedMoviesEndPoint = `${apibaseUrl}/movie/top_rated?api_key=${apiKey}`;
export const image500 = path => path? `https://image.tmdb.org/t/p/w500${path}`: null;
export const image342 = path => path? `https://image.tmdb.org/t/p/w342${path}`: null;
export const image185 = path => path? `https://image.tmdb.org/t/p/w185${path}`: null;
export const movieDetailsEndPoint = id => `${apibaseUrl}/movie/${id}?api_key=${apiKey}`;
export const movieCreditsEndpoint = id => `${apibaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
export const similarMoviesEndpoint = id => `${apibaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
export const personDetailsEndpoint = id => `${apibaseUrl}/person/${id}?api_key=${apiKey}`;
export const personMoviesEndpoint = id => `${apibaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

export const apiCall = async(endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }
    try{
        const response = await axios.request(options);
        return response.data;
    }
    catch (error){
        console.log('error: ', error);
        return{}
    }
};

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndPoint);
};
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndPoint);
};
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndPoint);
};
export const fetchMovieDetails = id => {
    return(apiCall(movieDetailsEndPoint(id)));
};
export const fetchMovieCredit = id => {
    return(apiCall(movieCreditsEndpoint(id)));
};
export const fetchSimilarMovies = id => {
    return(apiCall(similarMoviesEndpoint(id)));
};
export const fetchPersonDetails = id => {
    return(apiCall(personDetailsEndpoint(id)));
}
export const fetchPersonMovies = id => {
    return(apiCall(personMoviesEndpoint(id)));
}