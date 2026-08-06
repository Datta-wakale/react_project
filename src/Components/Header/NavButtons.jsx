import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function NavButtons() {
  const navigate = useNavigate();
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
    toast.info("Logged out successfully");
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