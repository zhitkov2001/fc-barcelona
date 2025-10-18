import React from "react";
import styles from "./PlayOffItem.module.scss";

const PlayoffItem = ({ couple }) => {
  const firstMatch = couple[0];
  const hasSecondMatch = couple.length > 1;
  const secondMatch = hasSecondMatch ? couple[1] : null;

  const homeAggregate = hasSecondMatch
    ? (firstMatch.ownerScore || 0) + (secondMatch?.guestScore || 0)
    : firstMatch.ownerScore || 0;

  const awayAggregate = hasSecondMatch
    ? (firstMatch.guestScore || 0) + (secondMatch?.ownerScore || 0)
    : firstMatch.guestScore || 0;

  const isDraw = homeAggregate === awayAggregate;

  const getExrtatimeInfo = () => {
    if (!isDraw) return null;

    const data = hasSecondMatch ? secondMatch : firstMatch;

    if (data?.penalty) {
      const { ownerScore, guestScore } = data.penalty;
      return hasSecondMatch
        ? `pen. ${guestScore}-${ownerScore}`
        : `pen. ${ownerScore}-${guestScore}`;
    }

    if (data?.overtime) {
      const { ownerScore, guestScore } = data.overtime;
      return hasSecondMatch
        ? `ET ${guestScore}-${ownerScore}`
        : `ET ${ownerScore}-${guestScore}`;
    }

    return null;
  };

  const extratimeInfo = getExrtatimeInfo();
  return (
    <div className={styles["playoff-match"]}>
      <div className={styles.match__header}>
        <div className={`${styles.team__container}`}>
          <img
            src={`../img/teams/${firstMatch?.ownerImg}.png`}
            alt={firstMatch?.ownerTitle}
            className={styles.team__logo}
          />
        </div>
        <div className={styles["match-score__container"]}>
          <div className={styles.match__score}>
            <p className={styles.score__value}>
              {homeAggregate} - {awayAggregate}
            </p>
            {extratimeInfo && (
              <p className={styles.extratime__value}>{extratimeInfo}</p>
            )}
          </div>
        </div>
        <div
          className={`${styles.team__container} ${styles["away-team__container"]}`}
        >
          <img
            src={`../img/teams/${firstMatch.guestImg}.png`}
            alt={firstMatch?.guestTitle}
            className={styles.team__logo}
          />
        </div>
      </div>
      <div className={styles.match__container}>
        {couple.map((match) => (
          <div
            key={`${match.ownerTitle} - ${match.guestTitle}`}
            className={styles.match__item}
          >
            <div className={styles.team}>{match.ownerTitle}</div>
            <div
              className={styles.score}
            >{`${match.ownerScore} - ${match.guestScore}`}</div>
            <div className={styles.team}>{match.guestTitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayoffItem;
