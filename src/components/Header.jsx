import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ASSETS_BASE_URL } from "../config/assets";
function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState(location.pathname);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setActiveLink(location.pathname);
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => activeLink === path;

  React.useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/' className='header__logo'>
          <img src={`${ASSETS_BASE_URL}/barca_logo(60px).webp`} alt='Barcelona Logo' />
        </Link>
        <button className={`burger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen((p) => !p)}>
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          <Link
            className={`nav__link ${isActive("/players") ? "active" : ""}`}
            to='/players'
            onClick={() => setActiveLink("/players")}
          >
            Players
          </Link>
          <Link
            className={`nav__link ${isActive("/matches") ? "active" : ""}`}
            to='/matches'
            onClick={() => setActiveLink("/matches")}
          >
            Matches
          </Link>
          <Link
            className={`nav__link ${isActive("/tournaments") ? "active" : ""}`}
            to='/tournaments'
            onClick={() => setActiveLink("/tournaments")}
          >
            Tournaments
          </Link>
          <Link
            className={`nav__link ${isActive("/news") ? "active" : ""}`}
            to='/news'
            onClick={() => setActiveLink("/news")}
          >
            News
          </Link>

          <div className='profile profile--mobile'>
            <Link to={"!/"} className='nav__link'>
              Login
            </Link>
            <Link to={"!/"} className='nav__link'>
              Sign in
            </Link>
          </div>
        </nav>
        <div className='profile profile--desktop'>
          <Link to={"!/"} className='nav__link'>
            Login
          </Link>
          <Link to={"!/"} className='nav__link'>
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
