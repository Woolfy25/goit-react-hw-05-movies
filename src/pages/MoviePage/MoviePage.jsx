import { fetchMovieDeatils } from '../../api/api';
import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import css from './MoviePage.module.css';

const MoviePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(location?.state?.from ?? '/');

  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const movie = await fetchMovieDeatils(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {movie && (
        <div className={css.movieContainer}>
          <div className={css.movie}>
            <button
              className={css.backButton}
              type="button"
              onClick={() => navigate(-1)}
            >
              Go Back Simple
            </button>
            <button
              className={css.backButton}
              type="button"
              onClick={handleClick}
            >
              Go Back
            </button>
            <div className={movie.details}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              <h2>{movie.title}</h2>
              <p>Rate: {movie.vote_average}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
          <div className={css.info}>
            <h3>Additional Information</h3>
            <Link className={css.infoLink} to="cast">
              Cast
            </Link>
            <Link className={css.infoLink} to="reviews">
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MoviePage;
