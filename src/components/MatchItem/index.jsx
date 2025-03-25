import React from "react";

import styles from "./matchItem.module.scss";

const MatchItem = (match) => {
  return (
    <li className={styles.match__item}>
      <div className={styles["match-date__container"]}>
        <p className={styles["match-weekday"]}>{match.dateInfo.dayOfTheWeek}</p>
        <p className={styles["match-date"]}>{match.dateInfo.date}</p>
      </div>
      <div className={styles.match__competition}>
        <img
          src={`../../img/Competition/${match.competition}.png`}
          alt={`${match.competition}`}
          className={styles["match-competition__img"]}
        />
      </div>
      <div className={styles["match-stage__container"]}>
        <p className={styles.match__stage}>{match.stageInfo.stage}</p>
        <p className={styles.match__stadium}>{match.stageInfo.stadium}</p>
      </div>
      <div className={styles.match__info}>
        <div
          className={`${styles["match-info__team"]} ${styles["match-info__team--end"]}`}
        >
          <p className={styles.team__title}>{match.owner.title}</p>
          <img
            className={styles.team__img}
            src={`../../img/Teams/${match.owner.img}.png`}
            alt={`${match.owner.title}`}
          />
        </div>
        <div className={styles.score__container}>
          <p className={styles.team__score}>{match.score.owner}</p>
          <span className={styles.score__dash}>-</span>
          <p className={styles.team__score}>{match.score.guest}</p>
          {match.score.aggregate ? (
            <p className={styles.score__aggregate}>{match.score.aggregate}</p>
          ) : (
            <></>
          )}
        </div>
        <div className={styles["match-info__team"]}>
          <div className={styles["team-img__container"]}>
            <img
              className={styles.team__img}
              src={`../../img/Teams/${match.guest.img}.png`}
              alt={`${match.guest.title}`}
            />
          </div>
          <p className={styles.team__title}>{match.guest.title}</p>
        </div>
      </div>
    </li>
  );
};

export default MatchItem;
