import React from "react";
import styles from "./HomeTableItem.module.scss";

const HomeTableItem = ({ team }) => {
  const played = (team.stats?.wins || 0) + (team.stats?.draws || 0) + (team.stats?.losses || 0);
  const points = (team.stats?.wins || 0) * 3 + (team.stats?.draws || 0);
  // console.log(team);
  return (
    <tr className={styles.row}>
      <td className={styles.position}>{team.position}</td>
      <td className={styles.team}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={`${process.env.PUBLIC_URL}/img/Teams/${team.image}.png`} alt={team.title} />
        </div>
        <span className={styles.title}>{team.title}</span>
      </td>
      <td className={styles.played}>{played}</td>
      <td className={styles.points}>{points}</td>
    </tr>
  );
};

export default HomeTableItem;
