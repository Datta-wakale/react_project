import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToUsersTable = () => {
    navigate("/table");
  };

  return (
    <div className="home-container">
      <h1>Welcome to Movie App</h1>

      <p>Click the button below to view registered users.</p>

      <button className="view-users-btn"
        onClick={goToUsersTable}>
        View Users
      </button>
    </div>
  );
}

export default Home;