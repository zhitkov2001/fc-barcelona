import React from "react";
import TableItem from "../TableItem";

import styles from "./Table.module.scss";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const Table = ({ teamsById, tableData, mode }) => {
  // console.log(tableData);

  const tableHeadItems = {
    Pos: "Position",
    Team: "Team",
    Pts: "Points",
    M: "Matches",
    W: "Wins",
    D: "Draws",
    L: "Losses",
    Score: "Scored",
    Miss: "Missed",
    Diff: "Difference",
  };

  const mobileHeadItems = {
    Pos: "Position",
    Team: "Team",
    Pts: "Points",
    M: "Matches",
    G: "Goals",
  };

  const width = useWindowWidth();

  function getTableHeadItems(width) {
    if (width <= 600) return mobileHeadItems;

    return tableHeadItems;
  }

  const headers = getTableHeadItems(width);

  const normalizedData = React.useMemo(() => {
    if (mode === "groups") {
      return tableData.map((teamStats) => {
        const teamId = teamStats.teamId;
        const teamInfo = teamsById[String(teamId)] || {
          id: teamId,
          title: "",
          image: "",
        };
        return {
          ...teamInfo,
          ...teamStats,
        };
      });
    }
    return tableData;
  }, [teamsById, tableData, mode]);

  const sortedTeams = React.useMemo(() => {
    return [...normalizedData].sort((a, b) => {
      const posA = a.position !== undefined ? a.position : a.team?.position !== undefined ? a.team.position : 0;
      const posB = b.position !== undefined ? b.position : b.team?.position !== undefined ? b.team.position : 0;

      return posA - posB;
    });
  }, [normalizedData]);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles["table__header"]}>
          <tr className={styles["table__header-row"]}>
            {Object.entries(headers).map(([key, value]) => (
              <th key={key} title={value} className={styles["header__item"]}>
                {width > 1000 ? value : width > 600 ? key : key.charAt(0)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles["table__body"]}>
          {sortedTeams.map((team, index) => (
            <TableItem key={team.teamId ? team.teamId : `row-${index}`} {...team} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
