import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import StandingsData from "../assets/standings.json";
import TableItem from "../components/TableItem/TableItem";

const Standings = () => {
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
          <div className="standings__info">
            <p className="standings-competition__info">
              <b>LaLiga 2024/25</b> season
            </p>
            <p className="standings-date__update">
              Last updated: 02.06.25 14:40 PM
            </p>
          </div>
        </div>
        <table className="standings__table">
          <thead className="standings-table__head">
            <tr className="table-head__row">
              {tableHeadItems.map((item) => (
                <td key={item.id} className="table-head__item">
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="standings-table__body">
            {StandingsData.map((team) => (
              <TableItem key={team.id} {...team} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Standings;
