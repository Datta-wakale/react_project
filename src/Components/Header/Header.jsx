import "./Header.css";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function Header({ loggedInUser, setLoggedInUser }) {
  return (
    <header className="header-section">
      <Logo />
      <NavLinks />
      <NavButtons
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
    </header>
  );
}

export default Header;