import css from "./MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, prevLocation }) => {
  return (
    <li className={css.movieLink}>
      <Link
        to={`/movies/${movie.id}`}
        state={{ from: prevLocation }}
        className={css.movieList}
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : {}
          }
          alt={movie.title || movie.name}
          className={css.movieImage}
        />
        <p className={css.movieTitle}>{movie.title || movie.name}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
