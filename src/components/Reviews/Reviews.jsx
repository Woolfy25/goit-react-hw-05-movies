import { fetchMovieReviews } from "../../api/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const reviews = await fetchMovieReviews(movieId);
        setMovie(reviews);
      } catch (cast) {
        setError(setError);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  });

  return (
    <ul>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {movie.map((reviews) => (
        <li key={reviews.id}>
          <h3>Author: {reviews.author} </h3>
          <p>{reviews.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
