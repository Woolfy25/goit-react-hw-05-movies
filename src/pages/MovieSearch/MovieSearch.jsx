import { useState, useEffect } from 'react';
import { fetchMovieSearch } from '../../api/api';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import css from './MovieSearch.module.css';

const MovieSearch = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const movies = await fetchMovieSearch(query);
        setMovies(movies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.target.elements[0].value);
  };

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      <MovieList movies={movies} prevLocation={location} />
    </div>
  );
};

export default MovieSearch;
