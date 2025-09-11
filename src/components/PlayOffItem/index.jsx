import React from "react";
import styles from "./playOffItem.module.scss";

const PlayOffItem = ({ match }) => {
  console.log(match);

  return (
    <div className={styles["playoff-match"]}>
      <div className={styles["match-teams"]}>
        <div className={`${styles.team} `}>
          <span className={styles["team-title"]}>{match.homeTeam.name}</span>
        </div>
        <div className={styles["match-score"]}>
          {match.homeTeam.score} - {match.awayTeam.score}
        </div>
        <div className={styles.team}>
          <span className={styles["team-title"]}>{match.awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayOffItem;
