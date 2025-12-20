import { useState, useEffect } from "react";
import styles from "./Calendar.module.scss";

import Countdown from "./Countdown";
import GlassMatchItem from "../Matches/GlassMatchItem";
import { DATA_BASE_URL } from "../../config/assets";

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCalendarData = async () => {
      try {
        setLoading(true);

        const [scheduleRes, resultsRes] = await Promise.all([
          fetch(`${DATA_BASE_URL}/matches/schedule.json`),
          fetch(`${DATA_BASE_URL}/matches/results.json`),
        ]);

        if (!scheduleRes.ok || !resultsRes.ok) {
          throw new Error("Failed to load calendar data");
        }

        const scheduleJson = await scheduleRes.json();
        const resultsJson = await resultsRes.json();

        setSchedule(Object.values(scheduleJson).flat());
        setResults(Object.values(resultsJson).flat());
      } catch (e) {
        console.error(e);
        setSchedule([]);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    loadCalendarData();
  }, []);

  const nextMatch = schedule[0];

  if (loading || !nextMatch) return null;

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
