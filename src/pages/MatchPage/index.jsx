import { useLocation } from "react-router-dom";
import TeamActionsList from "./TeamActionsList";
import LineupBlock from "./LineupBlock";
import styles from "./MatchPage.module.scss";

const MatchPage = () => {
  const match = useLocation().state;

  const owner = match.owner?.players || {};
  const guest = match.guest?.players || {};

  return (
    <div className={styles.matchPage}>
      <div className={styles.container}>
        {/* Фон + карточка матча */}
        <div className={styles.matchWrapper}>
          <img
            src={`/img/Matches/${match.matchBackground}.webp`}
            className={styles.matchBackground}
            alt={match.matchBackground}
          />

          <div className={styles.matchItem}>
            {/* Левая команда */}
            <div className={styles.teamContainer}>
              <div className={styles.teamInfo}>
                <img
                  src={`/img/Teams/${match.owner.img || "default"}.png`}
                  className={styles.teamLogo}
                  alt={match.owner.img}
                />
                <p className={styles.teamTitle}>{match.owner.title}</p>
              </div>
              <TeamActionsList start={owner.start} subs={owner.subtitution} />
            </div>

            {/* Центральный блок */}
            <div className={styles.matchInfo}>
              <p className={styles.matchStage}>{match.stageInfo.stage}</p>
              <img
                className={`${styles.competitionLogo} ${match.competition.img === "UCL" ? styles.whiteLogo : ""}`}
                alt={match.competition.title}
                src={match.competition.img ? `/img/Competition/${match.competition.img}.png` : <></>}
                // onError={(e) => {
                //   e.target.outerHTML = `<span style="font-size: 1.8rem">${
                //     match.competition.title ? match.competition.title : <></>
                //   }</span>`;
                // }}
              />

              {match.score.owner != null ? (
                <div className={styles.scoreContainer}>
                  <p className={styles.teamScore}>{match.score.owner}</p>
                  <span>-</span>
                  <p className={styles.teamScore}>{match.score.guest}</p>
                </div>
              ) : (
                <span className={styles.time}>{match.dateInfo.time}</span>
              )}

              <p className={styles.stadium}>{match.stageInfo.stadium}</p>
            </div>

            {/* Правая команда */}
            <div className={styles.teamContainer}>
              <TeamActionsList start={guest.start} subs={guest.subtitution} />
              <div className={styles.teamInfo}>
                <img src={`/img/Teams/${match.guest.img}.png`} className={styles.teamLogo} alt={match.guest.img} />
                <p className={styles.teamTitle}>{match.guest.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок составов */}
        <div className={styles.infoContainer}>
          <h2 className={styles.infoTitle}>Starting line up</h2>

          <div className={styles.lineupContainer}>
            <LineupBlock title={match.owner.title} start={owner.start} subs={owner.subtitution} />
            <LineupBlock title={match.guest.title} start={guest.start} subs={guest.subtitution} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
