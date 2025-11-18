import styles from "./GlassMatchItem.module.scss";

function GlassMatchItem() {
  return (
    <div class={styles["match-background"]}>
      <div className={styles["glass-overlay"]}></div>
      <div className={styles["match-content"]}>
        <div className={styles["teams-container"]}>
          <img src='../img/Teams/Barcelona.png' alt='Barcelona' className={styles["team-logo"]} />
          <img
            src='../img/Competition/LaLiga_min.png'
            alt='Copa Del Rey'
            className={`${styles["team-logo"]} ${styles["tournament-logo"]}`}
          />
          <img src='../img/Teams/AtleticoMadrid.png' alt='Atletico Madrid' className={styles["team-logo"]} />
        </div>

        <div className={styles["match-info"]}>
          <div class={styles["match-league"]}>UEFA Champions League</div>
          <div class={styles["match-day"]}>Matchday 6</div>
          <div class={styles["match-details"]}>
            <div class={styles["match-date"]}>
              <img src='../img/svgicons/calendar.svg' alt='calendar' />
              Sunday, Nov 23, 9:00 PM
            </div>
            <div class={styles["match-venue"]}>
              <img src='../img/svgicons/location.svg' alt='location' />
              Vanda Metropolitano
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlassMatchItem;
