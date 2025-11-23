import PlayerActions from "../PlayerActions";
import styles from "./PlayerRow.module.scss";

const PlayerRow = ({ player }) => (
  <li className={styles.lineup__item}>
    <p className={styles["lineup-player__number"]}>{player.number}</p>

    <div className={styles["lineup-player-img__container"]}>
      <img
        className={styles["lineup-player__img"]}
        src={player.img ? `/img/Players/30x30/${player.img}.png` : "/img/Players/30x30/Noname.png"}
        alt={player.surname}
      />
    </div>

    <div className={styles["luneup-player__info"]}>
      <p className={styles["lineup-player__name"]}>
        {player.name} {player.surname}
      </p>
      <p className={styles["lineup-player__position"]}>{player.position}</p>
    </div>

    <ul className={styles["player-action__list"]}>
      {player.actions && <PlayerActions actions={Object.entries(player.actions)} />}
    </ul>
  </li>
);

export default PlayerRow;
