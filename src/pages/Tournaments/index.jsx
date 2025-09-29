import React from "react";

import TitleBackround from "../components/TitleBackground";
import TableItem from "../components/TableItem";
import { addMatchWithStats } from "../utils/addMatchWithStats.ts";

import TestStandingsData from "../data/TESTSTANDINGS";

const StandingsNew = () => {
  const teams = TestStandingsData.ucl.seasons["2025/26"].teams.sort(
    (a, b) => a.position - b.position
  );

  // console.log(TestStandingsData.ucl.seasons["2024/25"]);

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
    <section className='standings'>
      <TitleBackround title='Standings New' />
      <div className='container'>
        {/* <table className='standings__table'>
          <thead className='standings-table__head'>
            <tr className='table-head__row'>
              {tableHeadItems.map((item, index) => (
                <td key={index} className='table-head__item'>
                  {item}
                </td>
              ))}
            </tr>
          </thead>
          <tbody className='standings-table__body'>
            {teams.map((team) => (
              <TableItem key={`${team.id}-${team.title}`} {...team} />
            ))}
          </tbody>
        </table> */}
      </div>
    </section>
  );
};

export default StandingsNew;
