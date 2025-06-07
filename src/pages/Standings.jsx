import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import StandingsData from "../assets/standings.json";
import TableItem from "../components/TableItem/TableItem";

const Standings = () => {
  const [selectedSeason, setSelectedSeason] = React.useState(0);
  const [dropdown, setDropdown] = React.useState(false);
  console.log(dropdown);
  const currentSeason = StandingsData.seasons[selectedSeason];

  const tableHeadItems = [
    "Position",
    "Team",
    "Points",
    "Matches",
    "Wins",
    "Draws",
    "Losses",
    "Scored",
    "Missed",
    "Difference",
  ];

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const optionClick = (index) => {
    setSelectedSeason(index);
    setDropdown(false);
  };

  return (
    <section className="standings">
      <TitleBackround title="Standings" />
      <div className="container">
        <div className="standings-img___container">
          <img
            src="../img/Competition/Laliga.png"
            alt="LaLiga"
            className="standings-competition__img"
          />
          <div className="season__selector">
            <div className="season__dropdown">
              <div
                onClick={() => showDropdown()}
                className={`dropdown__selected ${dropdown ? "active" : ""}`}
              >
                {StandingsData.seasons[selectedSeason].year}
                <span className={`dropdown__arrow ${dropdown ? "active" : ""}`}>
                  ▼
                </span>
              </div>
              {dropdown && (
                <div className="dropdown__options">
                  {StandingsData.seasons.map((season, index) => (
                    <div
                      key={season.year}
                      className={`dropdown__option ${
                        selectedSeason === index ? "active" : ""
                      }`}
                      onClick={() => optionClick(index)}
                    >
                      {season.year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="standings__info">
            <p className="standings-competition__info">
              <b>LaLiga {currentSeason.year}</b> season
            </p>
            <p className="standings-date__update">
              Last updated: 02.06.25 14:40 PM
            </p>
          </div>
        </div>
        <div className="table__container">
          <table className="standings__table">
            <thead className="standings-table__head">
              <tr className="table-head__row">
                {tableHeadItems.map((item, index) => (
                  <td key={index} className="table-head__item">
                    {item}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="standings-table__body">
              {currentSeason.teams.map((team) => (
                <TableItem key={`${team.id}-${team.title}`} {...team} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Standings;
