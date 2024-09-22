import css from "./MovieList.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieList = ({ movies, prevLocation }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          prevLocation={prevLocation}
        ></MovieCard>
      ))}
    </ul>
  );
};

export default MovieList;
