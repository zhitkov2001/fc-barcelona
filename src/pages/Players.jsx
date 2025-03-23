import React from "react";

import PlayerItem from "../components/PlayerItem";
import PlayersData from "../assets/players.json";
import TitleBackround from "../components/TitleBackground/TitleBackground";

function Players() {
  const firstTeamNav = [
    "goalkeepers",
    "defenders",
    "midfielders",
    "forwards",
    "coach stuff",
  ];

  const playersKeys = Object.keys(PlayersData);

  return (
    <>
      <section className="first__team">
        <TitleBackround title="FC Barcelona First Team" />
        <ul className="firstteam__nav">
          {firstTeamNav.map((id) => (
            <li className="firstteam__nav-item" key={id}>
              <button className="nav__btn" type="button">
                {id}
              </button>
            </li>
          ))}
        </ul>
        <div className="players__container">
          <ul className="players">
            {playersKeys.map((section) => (
              <div key={section} className="players__group">
                <h3 className="players__position">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <div className="players__group--flex">
                  {PlayersData[section].map((player) => (
                    <PlayerItem key={player.id} {...player} />
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Players;
