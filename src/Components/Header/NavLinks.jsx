import { NavLink } from "react-router-dom";

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
          <NavLink to={link.path} style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#f59e0b" : "white",
            borderBottom: isActive ? "2px solid #f59e0b" : "none",
            // fontWeight: isActive ? "bold" : "normal",
          })}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;