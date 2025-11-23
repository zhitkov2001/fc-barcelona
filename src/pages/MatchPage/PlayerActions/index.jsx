import styles from "./PlayerActions.module.scss";

const PlayerActions = ({ actions }) => {
  return (
    <>
      {actions.map(([id, action]) => (
        <div key={id} className={styles.action__container}>
          <img className={styles.action__img} src={`/img/MatchAction/${action.img}.png`} alt={action.img} />
          {/* Минуты */}
          {Array.isArray(action.minute) ? (
            action.minute.map((m, i) => (
              <span key={i} className={styles.action__minute}>
                {m}'{" "}
              </span>
            ))
          ) : (
            <span className={styles.action__minute}>{action.minute}'</span>
          )}
        </div>
      ))}
    </>
  );
};

export default PlayerActions;
