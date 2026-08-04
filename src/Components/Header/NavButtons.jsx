import { Link, useNavigate } from "react-router-dom";

function NavButtons({ loggedInUser, setLoggedInUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <div className="nav-buttons">
      {loggedInUser ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default NavButtons;