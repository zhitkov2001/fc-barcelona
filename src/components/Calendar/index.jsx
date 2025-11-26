import { useState, useEffect } from "react";
import styles from "./Calendar.module.scss";

import Countdown from "./Countdown";
import GlassMatchItem from "../Matches/GlassMatchItem";
import scheduleData from "../../data/matches/schedule.json";
import resultsData from "../../data/matches/results.json";

const Calendar = () => {
  const schedule = Object.values(scheduleData).flat();
  const results = Object.values(resultsData).flat();

  const nextMatch = schedule[0];

  return (
    <section className={styles.calendar}>
      <div className={styles.container}>
        <Countdown dateInfo={nextMatch.dateInfo} />
        <div className={styles.card__container}>
          {results.slice(0, 1).map((match) => (
            <GlassMatchItem key={match.id} match={match} />
          ))}
          {schedule.slice(0, 3).map((match) => (
            <GlassMatchItem key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Calendar;
