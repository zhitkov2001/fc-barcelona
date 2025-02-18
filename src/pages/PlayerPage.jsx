import React from "react";
import { useLocation } from "react-router-dom";

const PlayerPage = () => {
  const location = useLocation();
  const player = location.state?.player;

  const playerAllTimeStats = player.allTimeStats;
  // const playerStatsList = player.stats;
  // console.log(player);

  return (
    <div className="playerPage">
      <div className="player-hero__wrapper">
        <h2 className="player-hero__surname">{player.surname}</h2>
        <div className="player-hero__container">
          <div className="player-hero__stats">
            <h3 className="player-hero-stats__title">Barca stats</h3>
            <ul className="player-hero-stats__list">
              <li className="player-hero-stats__item">
                <div className="player-hero-stats-item__barca">
                  <p className="player-hero-stats-item-barca__title">Matches</p>
                  <p className="player-hero-stats-item-barca__value">128</p>
                </div>
                <div className="player-hero-stats-item-current__season">
                  <p className="player-hero-stats-item-current__title">
                    Season 24/25
                  </p>
                  <p className="player-hero-stats-item-current__value">33</p>
                </div>
              </li>
              <li className="player-hero-stats__item">
                <div className="player-hero-stats-item__barca">
                  <p className="player-hero-stats-item-barca__title">Goals</p>
                  <p className="player-hero-stats-item-barca__value">90</p>
                </div>
                <div className="player-hero-stats-item-current__season">
                  <p className="player-hero-stats-item-current__title">
                    Season 24/25
                  </p>
                  <p className="player-hero-stats-item-current__value">31</p>
                </div>
              </li>
              <li className="player-hero-stats__item">
                <div className="player-hero-stats-item__barca">
                  <p className="player-hero-stats-item-barca__title">Assists</p>
                  <p className="player-hero-stats-item-barca__value">20</p>
                </div>
                <div className="player-hero-stats-item-current__season">
                  <p className="player-hero-stats-item-current__title">
                    Season 24/25
                  </p>
                  <p className="player-hero-stats-item-current__value">3</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="player-hero-img__container">
            <img
              alt={`${player.img}`}
              src={`../../../img/Players/No-bg/${player.img}.webp`}
            />
            <div className="player-hero-info__block">
              <p className="player-hero-info__position">{player.position}</p>
              <div className="player-hero-info__data">
                <p className="player-hero-info__number">{player.number}</p>
                <p className="player-hero-info__name">{player.name}</p>
                <p className="player-hero-info__surname">{player.surname}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <img className="TEST" src="../../../img/playerPage_test.png" alt="" /> */}
        <div className="player-card__content">
          <div className="player-card__wrapper">
            <img
              className="player-card__img"
              src={`../../../img/Players/${player.img}.webp`}
              alt={player.surname}
            />
            <div className="player-card-img__info">
              <p className="player-card-img__number">{player.number}</p>
              <p className="player-card-img__fullname">
                {player.name} {player.surname}
              </p>
            </div>
          </div>
          <div className="player-card__info">
            <p className="player-card-info__title">{player.title}</p>
            <p className="player-card-info__subtitle">{player.subtitle}</p>
            <ul className="player-card-allTime__list">
              {Object.entries(playerAllTimeStats).map(([key, value]) => (
                <li key={key} className="player-card-allTime__item">
                  <p className="player-card-allTime-stats__title">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <span className="player-card-allTime-stats__value">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <button className="player-card-btn">
              Read full BIO
              <svg
                fill=""
                height="16px"
                width="12px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                stroke="#ffffff"
                stroke-width="20"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
          {/* {player INFO block!!!}==== */}
          {/* {player TROPHY block!!!}==== */}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
