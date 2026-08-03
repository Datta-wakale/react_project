import "./Header.css";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function Header() {
  return (
    <header className="header-section">
      <Logo />
      <NavLinks />
      <NavButtons />
    </header>
  );
}

export default Header;