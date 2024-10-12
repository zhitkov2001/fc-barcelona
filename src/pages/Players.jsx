import React from "react";

function Players() {
  return (
    <>
      <section className="first__team">
        <div className="firstteam__title--background">
          <h2 className="firstteam__title">FC Barcelona First Team</h2>
        </div>
        <nav className="firstteam__nav">
          <li className="firstteam__nav-item">
            <button className="nav__btn" type="button">
              goalkeepers
            </button>
          </li>
          <li className="firstteam__nav-item">
            <button className="nav__btn" type="button">
              defenders
            </button>
          </li>
          <li className="firstteam__nav-item">
            <button className="nav__btn is-active" type="button">
              midfielders
            </button>
          </li>
          <li className="firstteam__nav-item">
            <button className="nav__btn" type="button">
              forwards
            </button>
          </li>
          <li className="firstteam__nav-item">
            <button className="nav__btn" type="button">
              coach stuff
            </button>
          </li>
        </nav>
        <div className="players__container">
          <div className="players">
            <h3 className="players__position">Goalkeepers</h3>
            <h3 className="players__position">Defenders</h3>
            <h3 className="players__position">Midfielders</h3>
            <h3 className="players__position">Forwards</h3>
            <h3 className="players__position">Stuff</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Players;
