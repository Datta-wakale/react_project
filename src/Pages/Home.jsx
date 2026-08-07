import { useNavigate } from "react-router-dom";
import { useState , useMemo , useCallback} from "react";
import "./Home.css";
import MovieCard from "../Components/MovieCard/MovieCard";
function Home({movies}) {
  const [minRating,setMinRating] = useState(7);
  const navigate = useNavigate();

  const goToUsersTable = useCallback(()=> {

    navigate("/table");
  }, [navigate]);

  const viewReducer = useCallback(()=> {

    navigate("/display-reducer")
  }, [navigate]);
  const sortedMovies = useMemo(()=> {

    return [...movies]
    .filter(movie=> movie.rating >= minRating)
  },[movies,minRating]).sort((a,b)=> b.rating - a.rating);

  return (
    <>
    <button className="view-players" onClick={viewReducer}>Use Reducer Example</button>
    <div className="movies-container" >
      { sortedMovies.length > 0 ? (sortedMovies.map((movie)=> {
        return(
          <MovieCard key={movie.id}
            movie={movie}
          onClick={() => navigate(`/movie/${movie.id}`)} />
        )
      })) : ( <h3>No Movies Found</h3>) }

    </div>
    <div className="home-container">
      <h1>Welcome to Movie App</h1>

      <p>Click the button below to view registered users.</p>

      <button className="view-users-btn"
        onClick={goToUsersTable}>
        View Users
      </button>
    </div>
     </>
  );
}

export default Home;