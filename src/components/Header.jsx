import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Link } from "react-router-dom";

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
          <Link className="nav__link" to="/1stTeam">
            1<sup className="st">st</sup> Team
          </Link>
          <a className="nav__link" href="!#">
            Schedule
          </a>
          <a className="nav__link" href="!#">
            News
          </a>
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
