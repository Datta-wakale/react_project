import "./Header.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import SearchBar from "../SearchBar/SearchBar";

function Header({ movies,filteredMovies, setFilteredMovies }) {

  return (
    <header className="header-section">
      <Logo />

      <NavLinks />

      <SearchBar movies={movies}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
      />

      <NavButtons />
    </header>
  );
}

export default Header;