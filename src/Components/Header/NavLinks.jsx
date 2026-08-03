import { Link } from "react-router-dom";

function NavLinks() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Movie", path: "/movie" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About", path: "/about" },
  ];

  return (
    <ul className="nav-links">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;