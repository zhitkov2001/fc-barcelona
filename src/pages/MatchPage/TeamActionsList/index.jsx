import PlayerActions from "../PlayerActions";
import { mergePlayers, extractActions, sortByFirstAction } from "../utils";
import styles from "./TeamActionsList.module.scss";

const TeamActionsList = ({ start = {}, subs = {} }) => {
  const mergedPlayers = Object.entries(mergePlayers(start, subs)).filter(([_, p]) => extractActions(p).length > 0);

  const sorted = sortByFirstAction(mergedPlayers);

  return (
    <ul className={styles["team-info__list"]}>
      {sorted.map(([playerId, player]) => {
        const actions = extractActions(player);

        return (
          <li key={playerId} className={styles["team-info-list__item"]}>
            <PlayerActions actions={actions} />
            <span className={styles.action__player}>{player.surname}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TeamActionsList;
