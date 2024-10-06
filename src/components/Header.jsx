import React from "react";

// import Logo from "../../public/img/barca_logo(60px).webp";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="header__logo" href="http://localhost:3000/">
          <img
            src="./img/barca_logo(60px).webp"
            href="http://localhost:3000/"
            alt="Logo"
          />
        </a>
        <nav className="nav">
          <a className="nav__link" href="http://localhost:8000/first-team.html">
            1<sup className="st">st</sup> team
          </a>
          <a className="nav__link" href="http://localhost:8000/schedule.html">
            schedule
          </a>
          <a className="nav__link" href="http://localhost:8000/news.html">
            news
          </a>
        </nav>
        <div className="profile">
          <a
            className="nav__link"
            id="profile"
            href="http://localhost/FC_Barcelona/login"
          >
            login
          </a>
          <a
            className="nav__link"
            id="profile"
            href="http://localhost/FC_Barcelona/sign_in"
          >
            sign in
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
