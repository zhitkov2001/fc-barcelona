import styles from "./TableItem.module.scss";
import { ASSETS_BASE_URL } from "../../../config/assets";
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
    <tr className={styles.tableItem} style={{ "--row-accent-color": getStatus() }}>
      <th className={styles.position}>{team.position}</th>
      <th className={styles.teamContainer}>
        <div className={styles.teamImgContainer}>
          <img
            src={`${ASSETS_BASE_URL}/Teams/${team.image || "default"}.png`}
            alt={team.title}
            className={styles.teamImg}
            loading='lazy'
          />
        </div>

        <p className={styles.teamTitle}>{team.title}</p>
      </th>
      <th className={styles.points}>
        <b>{points}</b>
      </th>
      <th className={styles.stats}>{played}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{team.stats.wins}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{team.stats.draws}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{team.stats.losses}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{team.stats.scored}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{team.stats.missed}</th>
      <th className={`${styles.stats} ${styles.hideMobile}`}>{goalDifference}</th>
    </tr>
  );
}

export default TableItem;
