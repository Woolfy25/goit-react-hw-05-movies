import { fetchMovieCast } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const cast = await fetchMovieCast(movieId);
        setMovie(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <ul>
        {movie.map((cast) => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
              alt={`${cast.name} portrait`}
            />
            <p>{cast.name}</p>
            <p>{cast.character} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
