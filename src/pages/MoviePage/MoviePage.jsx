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
    <div>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <div>
            <button type="button" onClick={() => navigate(-1)}>
              Go Back Simple
            </button>
            <button type="button" onClick={handleClick}>
              Go Back
            </button>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              <h2>{movie.title}</h2>
              <p>Rate: {movie.vote_average}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
          <div>
            <h3>Additional Information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MoviePage;
