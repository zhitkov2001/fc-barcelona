import PlayerRow from "../PlayerRow";
import styles from "./LineupBlock.module.scss";

const LineupBlock = ({ title, start = {}, subs = {} }) => (
  <div className={styles.lineupWrapper}>
    <h3 className={styles.lineupTitle}>{title}</h3>

    <ul className={styles.lineupList}>
      {Object.keys(start).length ? (
        Object.entries(start).map(([id, player]) => <PlayerRow key={id} player={player} />)
      ) : (
        <p>No starting players</p>
      )}

      <h4 className={styles.lineupSubtitle}>Substitution</h4>

      {Object.keys(subs).length ? (
        Object.entries(subs).map(([id, player]) => <PlayerRow key={id} player={player} />)
      ) : (
        <p>No substitutions</p>
      )}
    </ul>
  </div>
);

export default LineupBlock;
