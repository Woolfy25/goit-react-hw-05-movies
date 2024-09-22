import axios from "axios";

const API_KEY = "23a93cd4794fae995da940e2d5a9e53b";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: API_KEY };

export async function fetchTrending() {
  const response = await axios.get("trending/movie/day");
  return response.data.results;
}

export async function fetchMovieSearch(query) {
  const response = await axios.get(`search/movie?query=${query}&page=1`);
  return response.data.results;
}

export async function fetchMovieDeatils(movieId) {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
}
