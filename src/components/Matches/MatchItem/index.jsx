import React from "react";
import { Link } from "react-router-dom";

import styles from "./MatchItem.module.scss";

const MatchItem = (match) => {
  return (
    <li key={match.id} className={styles.match__item}>
      <Link className={styles["match-item__link"]} to={`/matches/${match.id}`} state={match}>
        <div className={styles["match-date__container"]}>
          <p className={styles["match-weekday"]}>{match.dateInfo?.weekday?.slice(0, 3)}</p>
          <p className={styles["match-date"]}>{match.dateInfo?.date}</p>
          <p className={styles["match-month"]}>{match.dateInfo?.month?.slice(0, 3)}</p>
        </div>
        <div className={styles.match__competition}>
          <img
            src={`../../img/Competition/${match.competition.img}.png`}
            alt={`${match.competition.title}`}
            className={styles["match-competition__img"]}
          />
        </div>
        <div className={styles["match-stage__container"]}>
          <p className={styles.match__stage}>{match.stageInfo.stage}</p>
          <p className={styles.match__stadium}>{match.stageInfo.stadium}</p>
        </div>
        <div className={styles.match__info}>
          <div className={`${styles["match-info__team"]} ${styles["match-info__team--end"]}`}>
            <p className={styles.team__title}>{match.owner.title}</p>
            <img
              className={styles.team__img}
              src={`../../img/Teams/${match.owner?.img || "default"}.png`}
              alt={`${match.owner.title}`}
            />
          </div>
          <div className={styles.score__container}>
            {match.score.owner !== null && match.score.guest !== null ? (
              <>
                <p className={styles.team__score}>{match.score.owner}</p>
                <span className={styles.score__dash}>-</span>
                <p className={styles.team__score}>{match.score.guest}</p>
                {match.score.aggregate ? (
                  <p className={styles.score__aggregate}>Agg: {match.score.aggregate}</p>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <span className={styles.score__dash}>{match.dateInfo.time}</span>
            )}
          </div>
          <div className={styles["match-info__team"]}>
            <div className={styles["team-img__container"]}>
              <img
                className={styles.team__img}
                src={`../../img/Teams/${match.guest.img || "default"}.png`}
                alt={`${match.guest.title}`}
              />
            </div>
            <p className={styles.team__title}>{match.guest.title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MatchItem;
