// login and register button
// in navButtons 
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className="nav-buttons">
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>

      <Link to="/register">
        <button className="register-btn">Register</button>
      </Link>
    </div>
  );
}

export default NavButtons;