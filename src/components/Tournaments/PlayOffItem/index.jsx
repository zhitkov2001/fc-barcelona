import React from "react";
import styles from "./PlayOffItem.module.scss";

const PlayoffItem = ({ match, teamsData }) => {
  const findTeamById = (teamId) => {
    return teamsData?.find((team) => team.id === teamId) || {};
  };

  // if (!match?.legs[0]) return null;

  const firstMatch = match.legs[0];
  const hasSecondMatch = match.legs.length > 1;
  const secondMatch = hasSecondMatch ? match.legs[1] : null;

  const homeTeam = findTeamById(match.homeTeamId);
  const awayTeam = findTeamById(match.awayTeamId);

  if (!match?.legs?.length) {
    return (
      <div className={styles["playoff-match"]}>
        <div className={styles.match__header}>
          <div className={styles.team__container}>
            <img
              src={`../img/teams/${homeTeam?.image || "default"}.png`}
              alt={homeTeam?.title}
              className={styles.team__logo}
            />
          </div>
          <div className={styles["match-score__container"]}>
            <div className={styles.match__score}>
              <p className={styles.score__value}>-</p>
            </div>
          </div>
          <div className={`${styles.team__container} ${styles["away-team__container"]}`}>
            <img
              src={`../img/teams/${awayTeam?.image || "default"}.png`}
              alt={awayTeam?.title}
              className={styles.team__logo}
            />
          </div>
        </div>
      </div>
    );
  }

  const homeAggregate = hasSecondMatch
    ? (firstMatch.homeScore ?? 0) + (secondMatch?.awayScore ?? 0)
    : firstMatch.homeScore ?? null;

  const awayAggregate = hasSecondMatch
    ? (firstMatch.awayScore ?? 0) + (secondMatch?.homeScore ?? 0)
    : firstMatch.awayScore ?? null;

  const isDraw = homeAggregate === awayAggregate;

  const getExtratimeInfo = () => {
    if (!isDraw) return null;

    const data = hasSecondMatch ? secondMatch : firstMatch;

    if (data?.penalty) {
      const { homeScore, awayScore } = data.penalty;
      return hasSecondMatch ? `pen. ${awayScore}-${homeScore}` : `pen. ${homeScore}-${awayScore}`;
    }

    if (data?.extratime) {
      const { homeScore, awayScore } = data.extratime;
      return hasSecondMatch ? `ET ${awayScore}-${homeScore}` : `ET ${homeScore}-${awayScore}`;
    }

    return null;
  };

  const extratimeInfo = getExtratimeInfo();

  return (
    <div className={styles["playoff-match"]}>
      <div className={styles.match__header}>
        <div className={styles.team__container}>
          <img
            src={`../img/teams/${homeTeam?.image || "default"}.png`}
            alt={homeTeam?.title}
            className={styles.team__logo}
          />
        </div>
        <div className={styles["match-score__container"]}>
          <div className={styles.match__score}>
            <p className={styles.score__value}>
              {homeAggregate != null && awayAggregate != null ? `${homeAggregate} - ${awayAggregate}` : "vs"}
            </p>
            {extratimeInfo && <p className={styles.extratime__value}>{extratimeInfo}</p>}
          </div>
        </div>
        <div className={`${styles.team__container} ${styles["away-team__container"]}`}>
          <img
            src={`../img/teams/${awayTeam?.image || "default"}.png`}
            alt={awayTeam?.title}
            className={styles.team__logo}
          />
        </div>
      </div>
      <div className={styles.match__container}>
        {match.legs.map((leg, index) => {
          const isReversed = index === 1;
          const home = isReversed ? awayTeam : homeTeam;
          const away = isReversed ? homeTeam : awayTeam;

          return homeAggregate != null && awayAggregate != null ? (
            <div key={`${leg.homeTeamId}-${leg.awayTeamId}-${index}`} className={styles.match__item}>
              <div className={styles.team}>{home?.title}</div>
              <div className={styles.score}>
                {leg.homeScore != null && leg.awayScore != null ? `${leg.homeScore} - ${leg.awayScore}` : ""}
              </div>
              <div className={styles.team}>{away?.title}</div>
            </div>
          ) : (
            <div key={`${leg.homeTeamId}-${leg.awayTeamId}-${index}`} className={styles.match__item}>
              <div className={styles.team}>{home?.title}</div>
              <div className={styles.team}>{away?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayoffItem;
