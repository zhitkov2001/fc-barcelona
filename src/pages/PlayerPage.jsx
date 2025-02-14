import React from "react";
import { useLocation } from "react-router-dom";

import PlayersData from "../assets/Players.json";

const PlayerPage = () => {
  const location = useLocation();
  const player = location.state?.player;

  const playerStatsList = player.stats;
  // console.log(playerStatsList);
  return (
    <div className="playerPage">
      <div className="player-hero__wrapper">
        <h2 className="player-hero__surname">Lewandowski</h2>
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
        <img className="TEST" src="../../../img/playerPage_test.png" alt="" />
        <div className="player-card__content">
          <div className="player-card__img">
            <img src={`../../../img/Players/${player.img}.webp`} alt="" />
          </div>
          <div className="player-card__info">
            <p>
              One of the best strikers ever, the Polish forward's stats speak
              for themselves
            </p>
            <p>
              The striker from Poland stands out for his goalscoring abilities.
              Inside the box he has all the tools to make him a difficult
              striker to read as he can find the net with his head and both feet
              with equal precision. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
