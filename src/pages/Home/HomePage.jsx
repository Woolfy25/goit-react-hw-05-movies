import React from "react";
import { useState, useEffect } from "react";
import { fetchTrending } from "../../api/api";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await fetchTrending();
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <h1>Trending Now</h1>
      <MovieList movies={movies} prevLocation={location}></MovieList>
    </div>
  );
};

export default HomePage;
