import styles from "./GlassMatchItem.module.scss";
import { ASSETS_BASE_URL } from "../../../config/assets";
function GlassMatchItem({ match }) {
  const tournamentColors = {
    "La Liga": "#7624b9",
    "UEFA Champions League": "#0030cf",
    "Copa Del Rey": "#e62c2c",
    "Super Copa": "#e66f0e",
    "UEFA Europa League": "#ffbb00",
  };
  const bgColor = tournamentColors[match.competition.title] || "#334155";

  const isResult = match.score?.owner !== null && match.score?.guest !== null;
  return (
    <div className={styles["match-background"]} style={{ backgroundColor: bgColor }}>
      <div className={styles["glass-overlay"]}></div>
      <div className={styles["match-content"]}>
        <div className={styles["teams-container"]}>
          <div className={styles["team-container"]}>
            <img
              src={`${ASSETS_BASE_URL}/Teams/${match.owner.img}.png`}
              alt={match.owner.title}
              className={styles["team-logo"]}
            />
            <p className={styles["team-title"]}>{match.owner.title}</p>
          </div>
          <span className={styles.team__score}>{isResult ? match.score.owner : null}</span>
          {isResult ? (
            <span className={styles.team__score}>:</span>
          ) : (
            <img
              src={`${ASSETS_BASE_URL}/Competition/${match.competition.img}_min.png`}
              alt='Copa Del Rey'
              className={`${styles["team-logo"]} ${styles["tournament-logo"]}`}
              title={match.competition.title}
            />
          )}
          <span className={styles.team__score}>{isResult ? match.score.guest : null}</span>
          <div className={styles["team-container"]}>
            <img
              src={`${ASSETS_BASE_URL}/Teams/${match.guest.img}.png`}
              alt={match.guest.title}
              className={styles["team-logo"]}
            />
            <p className={styles["team-title"]}>{match.guest.title}</p>
          </div>
        </div>

        <div className={styles["match-info"]}>
          <div className={styles["match-league"]}>{match.competition.title}</div>
          <div className={styles["match-day"]}>{match.stageInfo.stage}</div>
          <div className={styles["match-details"]}>
            <div className={styles["match-date"]}>
              <img src={`${ASSETS_BASE_URL}/svgicons/calendar.svg`} alt='calendar' />
              {`${match.dateInfo.weekday.slice(0, 3)}, ${match.dateInfo.date}, ${match.dateInfo.month.slice(0, 3)}, ${
                match.dateInfo.time
              }`}
            </div>
            <div className={styles["match-venue"]}>
              <img src={`${ASSETS_BASE_URL}/svgicons/location.svg`} alt='location' />
              {match.stageInfo.stadium}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassMatchItem;
