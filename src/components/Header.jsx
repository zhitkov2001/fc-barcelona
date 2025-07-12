import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img
            src={`${process.env.PUBLIC_URL}/img/barca_logo(60px).webp`}
            alt="Barcelona Logo"
          />
        </Link>
        <nav className="nav">
          <Link className="nav__link" to="/players">
            Players
          </Link>
          <Link className="nav__link" to="/matches">
            Matches
          </Link>
          <Link className="nav__link" to="/standings">
            Standings
          </Link>
          <Link className="nav__link" to="/news">
            News
          </Link>
        </nav>
        <div className="profile">
          <a className="nav__link" id="profile" href="!#">
            Login
          </a>
          <a className="nav__link" id="profile" href="!#">
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
