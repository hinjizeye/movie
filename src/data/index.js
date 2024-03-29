import axios from "axios";

const API_KEY = "d0f5f2e135336200362af8a1a73acb17";
const BASE_AXIOS = axios.create({baseURL:"https://api.themoviedb.org/3"});


//Movie Detail
export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)

//Movie Cast
export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)

//Search Movie
export const fetchSearchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${searchValue}`);

//Discover
export const fetchDiscover = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

//Trending
export const fetchTrending = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=${API_KEY}&page=1`);

//Popular - Top Rated
// export const fetchSortFilterMovies = (sortingValue, page, startDate, endDate, genres) => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&sort_by=${sortingValue}&page=${page}&release_date.gte=${startDate}&release_date.lte=${endDate}&with_genres=${genres.toString()}`)

//Genres

export const fetchPopularMovies = () => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}`);

export const fetchTopRatedMovies = () => BASE_AXIOS.get(`/movie/top_rated?api_key=${API_KEY}`);





