import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MoviesDetails = ({ movies }) => {

  const { id } = useParams();

  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <h3>Movie not found</h3>;
  }

  return (
    <>
      <h1>Selected Movie</h1>

      {/* No onClick passed */}
      <MovieCard movie={movie} />

      <div>
        <h2>About Movie</h2>

        <p>
          This is the details page of <strong>{movie.title}</strong>.
        </p>

        <button>Book Ticket</button>
      </div>
    </>
  );
};

export default MoviesDetails;