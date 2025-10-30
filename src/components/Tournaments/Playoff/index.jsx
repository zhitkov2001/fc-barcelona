import styles from "./Playoff.module.scss";

import PlayoffItem from "../PlayOffItem/index";

const Playoff = ({ playoffData, teamsData }) => {
  if (!playoffData || playoffData.length === 0) {
    return <div>⚠ Нет данных для отображения плейофф</div>;
  }

  return (
    <div className={styles.playoff}>
      {playoffData.map((round, roundIndex) => (
        <div key={roundIndex} className={styles.round__container}>
          <h3 className={styles.playoff__title}>{round.title}</h3>
          {round.matches && round.matches.length > 0 ? (
            round.matches.map((match, matchIndex) => (
              <div key={matchIndex} className={styles.round__couple}>
                <PlayoffItem match={match} teamsData={teamsData} />
              </div>
            ))
          ) : (
            <div className={styles.noMatches}>Матчи отсутствуют</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Playoff;
