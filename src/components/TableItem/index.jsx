import React from "react";
import styles from "./TableItem.module.scss";

function TableItem(team) {
  const getStatus = () => {
    if (team.isDowngraded) return "#dc3545";
    if (team.isQualified === "blue") return "#141e5e";
    if (team.isQualified === "orange") return "#ff9100";
    if (team.isQualified === "green") return "#28a745";
    return "transparent";
  };

  return (
    <tr
      className={styles.tableItem}
      style={{ "--row-accent-color": getStatus() }}
    >
      <th className={styles.position}>{team.position}</th>
      <th className={styles.teamContainer}>
        {team.image === "" || !team.image ? (
          <div className={styles.teamImgContainer}>
            <img
              src={`../img/Teams/default.png`}
              alt={team.title}
              className={styles.teamImg}
            />
          </div>
        ) : (
          <div className={styles.teamImgContainer}>
            <img
              src={`../img/Teams/${team.image}.png`}
              alt={team.title}
              className={styles.teamImg}
            />
          </div>
        )}
        <p className={styles.teamTitle}>{team.title}</p>
      </th>
      <th className={styles.points}>
        <b>{team.wins * 3 + team.draws}</b>
      </th>
      <th className={styles.stats}>{team.wins + team.draws + team.losses}</th>
      <th className={styles.stats}>{team.wins}</th>
      <th className={styles.stats}>{team.draws}</th>
      <th className={styles.stats}>{team.losses}</th>
      <th className={styles.stats}>{team.scored}</th>
      <th className={styles.stats}>{team.missed}</th>
      <th className={styles.stats}>{team.scored - team.missed}</th>
    </tr>
  );
}

export default TableItem;
