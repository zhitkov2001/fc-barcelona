import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="header__logo" href="http://localhost:3000/">
          <img src="./img/barca_logo(60px).webp" alt="Barcelona Logo" />
        </a>
        <nav className="nav">
          <a className="nav__link" href="!#">
            1<sup className="st">st</sup> Team
          </a>
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
