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

  const sortedTeams = React.useMemo(() => {
    return [...normalizedData].sort((a, b) => {
      const posA =
        a.position !== undefined
          ? a.position
          : a.team?.position !== undefined
          ? a.team.position
          : 0;
      const posB =
        b.position !== undefined
          ? b.position
          : b.team?.position !== undefined
          ? b.team.position
          : 0;

      return posA - posB;
    });
  }, [normalizedData]);

  return (
    <table className={styles.table}>
      <thead className={styles["table__header"]}>
        <tr className={styles["table__header-row"]}>
          {tableHeadItems.map((item, index) => (
            <td key={index} className={styles["header__item"]}>
              {item}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className={styles["table__body"]}>
        {sortedTeams.map((team, index) => (
          <TableItem
            key={team.teamId ? team.teamId : `row-${index}`}
            {...team}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
