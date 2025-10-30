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

  const points = team.stats.wins * 3 + team.stats.draws;
  const played = team.stats.wins + team.stats.draws + team.stats.losses;
  const goalDifference = team.stats.scored - team.stats.missed;

  return (
    <tr
      className={styles.tableItem}
      style={{ "--row-accent-color": getStatus() }}
    >
      <th className={styles.position}>{team.position}</th>
      <th className={styles.team__сontainer}>
        <div className={styles.team__img__container}>
          <img
            src={`../img/Teams/${team.image || "default"}.png`}
            alt={team.title}
            className={styles.team__img}
          />
        </div>

        <p className={styles.teamTitle}>{team.title}</p>
      </th>
      <th className={styles.points}>
        <b>{points}</b>
      </th>
      <th className={styles.stats}>{played}</th>
      <th className={styles.stats}>{team.stats.wins}</th>
      <th className={styles.stats}>{team.stats.draws}</th>
      <th className={styles.stats}>{team.stats.losses}</th>
      <th className={styles.stats}>{team.stats.scored}</th>
      <th className={styles.stats}>{team.stats.missed}</th>
      <th className={styles.stats}>{goalDifference}</th>
    </tr>
  );
}

export default TableItem;
