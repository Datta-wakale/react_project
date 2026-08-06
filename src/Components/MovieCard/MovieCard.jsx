import "./MovieCard.css";

const MovieCard = ({ movie, onClick }) => {

  return (
    <div
      className="movie-card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>

      <div className="movie-details">
        <p>Title : {movie.title}</p>
        <p>Language : {movie.language}</p>
        <p>Genre : {movie.genre}</p>
        <p>Rating : {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;