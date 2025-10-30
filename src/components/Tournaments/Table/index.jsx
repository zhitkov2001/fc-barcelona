import React from "react";
import TableItem from "../TableItem";

import styles from "./Table.module.scss";

const Table = ({ teamsList, tableData, mode }) => {
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

  const normalizedData = React.useMemo(() => {
    if (mode === "groups") {
      return tableData.map((teamStats) => {
        const teamId = teamStats.teamId;
        const teamInfo = teamsList.find((team) => team.id === teamId);
        console.log(teamsList);
        return {
          ...teamInfo,
          ...teamStats,
        };
      });
    }
    return tableData;
  }, [teamsList, tableData, mode]);

  return (
    <table className={styles.standings__table}>
      <thead className={styles["standings-table__head"]}>
        <tr className={styles["table-head__row"]}>
          {tableHeadItems.map((item, index) => (
            <td key={index} className={styles["table-head__item"]}>
              {item}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className={styles["standings-table__body"]}>
        {normalizedData.map((team, index) => (
          <TableItem key={team.id ? team.id : `row-${index}`} {...team} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
