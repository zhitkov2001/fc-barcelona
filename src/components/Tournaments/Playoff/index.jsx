import React from "react";
import styles from "./Playoff.module.scss";

import PlayoffItem from "../PlayOffItem/index";

const Playoff = ({ playoffData }) => {
  return (
    <div className={styles.playoff}>
      {playoffData.map((round, roundIndex) => (
        <div key={roundIndex} className={styles.round__container}>
          <h3 key={round.title} className={styles.playoff__title}>
            {round.title}
          </h3>
          {round?.group &&
            Object.entries(round.group).map(
              ([coupleKey, couple], groupIndex) => (
                <div key={groupIndex} className={styles.round__couple}>
                  <PlayoffItem couple={couple} />
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
};

export default Playoff;
