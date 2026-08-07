import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

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
        <Link to="/seatselection">
        <button>Book Ticket</button>
        </Link>
      </div>
    </>
  );
};

export default MoviesDetails;