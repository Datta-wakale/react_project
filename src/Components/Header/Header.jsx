import "./Header.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import SearchBar from "../SearchBar/SearchBar";

function Header({ movies, setMovies }) {

  return (
    <header className="header-section">
      <Logo />

      <NavLinks />

      <SearchBar
        movies={movies}
       setMovies={setMovies} 
      />

      <NavButtons />
    </header>
  );
}

export default Header;