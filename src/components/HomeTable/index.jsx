import React from "react";
import styles from "./HomeTable.module.scss";
import HomeTableItem from "./HomeTableItem";

function HomeTable({ teamsList, tableData }) {
  const merged = React.useMemo(() => {
    return tableData.map((row) => {
      const team = teamsList.find((t) => t.id === row.id);
      return {
        ...team,
        ...row,
      };
    });
  }, [teamsList, tableData]);

  const sorted = React.useMemo(() => {
    return [...merged].sort((a, b) => a.position - b.position);
  }, [merged]);

  const tableHeadItems = ["pos", "team", "games", "point"];

  return (
    <div className={styles.tableContainer}>
      <h4 className={styles.tableTitle}>La Liga 2025/26 season</h4>
      <table className={styles.homeTable}>
        <thead className={styles.tableHeader}>
          <tr className={styles["table__header-row"]}>
            {tableHeadItems.map((item, index) => (
              <td key={index} className={styles["header__item"]}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className={styles["table__body"]}>
          {sorted.map((team, id) => (
            <HomeTableItem key={id} team={team} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
