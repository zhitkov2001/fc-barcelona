import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState(location.pathname);

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => activeLink === path;

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/' className='header__logo'>
          <img src={`${process.env.PUBLIC_URL}/img/barca_logo(60px).webp`} alt='Barcelona Logo' />
        </Link>
        <nav className='nav'>
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
        </nav>
        <div className='profile'>
          <a className='nav__link' id='profile' href='!#'>
            Login
          </a>
          <a className='nav__link' id='profile' href='!#'>
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
