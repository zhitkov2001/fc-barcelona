import { useState, useEffect } from "react";
import styles from "./Countdown.module.scss";

function Countdown({ dateInfo }) {
  const [timeLeft, setTimeLeft] = useState({});

  const createMatchDate = () => {
    const fullDateString = `${dateInfo.date} ${dateInfo.month} 2026 ${dateInfo.time}`;
    return new Date(fullDateString);
  };

  useEffect(() => {
    const matchDate = createMatchDate();

    const updateCountdown = () => {
      const now = new Date();
      const cet = now.getTime() - 2 * 60 * 60 * 1000;
      const diff = matchDate - cet;

      if (diff <= 0) {
        setTimeLeft({ finished: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [dateInfo]);

  if (timeLeft.finished) return <div>Live</div>;

  return (
    <div className={styles.countdown}>
      <p className={styles.title}>next match:</p>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <span className={styles.value}>{timeLeft.days}</span>
          <p className={styles.subtitle}>day</p>
        </div>
        <div className={styles.info__item}>
          <span className={styles.value}>{timeLeft.hours}</span>
          <p className={styles.subtitle}>hour</p>
        </div>
        <div className={styles.info__item}>
          <span className={styles.value}>{timeLeft.minutes}</span>
          <p className={styles.subtitle}>min</p>
        </div>
        <div className={styles.info__item}>
          <span className={styles.value}>{timeLeft.seconds}</span>
          <p className={styles.subtitle}>sec</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
