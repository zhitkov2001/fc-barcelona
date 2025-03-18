import React from "react";
import { Link } from "react-router-dom";

function PlayerItem(player) {
  const playerStats = player.stats;
  const playerStatsCurrent = player.currentStats;
  console.log(player);
  return (
    <>
      <div className="player">
        <Link
          to={`/player/${player.id}`}
          key={player.id}
          state={{ player }}
          className="player__link"
        >
          <img
            className="player__img"
            alt=""
            src={`../../../img/Players/Min/${player.img}.webp`}
          />
          <div className="player__info">
            <div className="player__name">
              <p className="player__number">{player.number}</p>
              <p className="player__surname">{player.surname}</p>
            </div>
            <div className="player__stats">
              <ul className="player-stats__list">
                {Object.entries(playerStats).map(([key, value]) => (
                  <li key={key} className="player-stats__item">
                    <p className="player-stats__title">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <p className="player-stats__value">{value}</p>
                  </li>
                ))}
              </ul>
              <ul className="player-stats__list">
                {Object.entries(playerStatsCurrent).map(([key, value]) => (
                  <li key={key} className="player-stats__item">
                    <p className="player-stats__title current__stats">
                      24/25 season
                    </p>
                    <p className="player-stats__value current__value">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PlayerItem;
