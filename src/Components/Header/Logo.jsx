import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo-link" style={{textDecoration: "none"}}>
      <h2 className="logo">
        Movie<span>App</span>
      </h2>
    </Link>
  );
}

export default Logo;