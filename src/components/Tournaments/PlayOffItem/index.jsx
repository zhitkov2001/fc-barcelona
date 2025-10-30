import React from "react";
import styles from "./PlayOffItem.module.scss";

const PlayoffItem = ({ match, teamsData }) => {
  const findTeamById = (teamId) => {
    return teamsData?.find((team) => team.id === teamId) || {};
  };

  if (!match?.[0]) return null;

  const firstMatch = match[0];
  const hasSecondMatch = match.length > 1;
  const secondMatch = hasSecondMatch ? match[1] : null;

  const homeTeam = findTeamById(firstMatch.homeTeamId);
  const awayTeam = findTeamById(firstMatch.awayTeamId);

  const homeAggregate = hasSecondMatch
    ? (firstMatch.homeScore || 0) + (secondMatch?.awayScore || 0)
    : firstMatch.homeScore || 0;

  const awayAggregate = hasSecondMatch
    ? (firstMatch.awayScore || 0) + (secondMatch?.homeScore || 0)
    : firstMatch.awayScore || 0;

  const isDraw = homeAggregate === awayAggregate;

  const getExtratimeInfo = () => {
    if (!isDraw) return null;

    const data = hasSecondMatch ? secondMatch : firstMatch;

    if (data?.penalty) {
      const { homeScore, awayScore } = data.penalty;
      return hasSecondMatch
        ? `pen. ${awayScore}-${homeScore}`
        : `pen. ${homeScore}-${awayScore}`;
    }

    if (data?.overtime) {
      const { homeScore, awayScore } = data.overtime;
      return hasSecondMatch
        ? `ET ${awayScore}-${homeScore}`
        : `ET ${homeScore}-${awayScore}`;
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
            src={`../img/teams/${awayTeam?.image || "default"}.png`}
            alt={awayTeam?.title}
            className={styles.team__logo}
          />
        </div>
      </div>
      <div className={styles.match__container}>
        {match.map((match, index) => {
          const matchhomeTeam = findTeamById(match.homeTeamId);
          const matchawayTeam = findTeamById(match.awayTeamId);

          return (
            <div
              key={`${match.homeTeamId}-${match.awayTeamId}-${match.id}-${index}`}
              className={styles.match__item}
            >
              <div className={styles.team}>{matchhomeTeam?.title}</div>
              <div className={styles.score}>
                {match?.homeScore} - {match?.awayScore}
              </div>
              <div className={styles.team}>{matchawayTeam?.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayoffItem;
