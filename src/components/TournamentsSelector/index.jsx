import React from "react";
import styles from "./TournamentsSelector.module.scss";
import reset from "../../assets/img/reset.svg";

const TournamentsSelector = ({
  selectedLeague,
  selectedSeason,
  onLeagueChange,
  onSeasonChange,
  onReset,
  tournamentsData,
  availableSeasons,
}) => {
  const [leagueDropdown, setLeagueDropdown] = React.useState(false);
  const [seasonDropdown, setSeasonDropdown] = React.useState(false);
  const selectorRef = React.useRef(null);

  const toggleLeagueDropdown = () => {
    setLeagueDropdown(!leagueDropdown);
    setSeasonDropdown(false);
  };

  const toggleSeasonDropdown = () => {
    setSeasonDropdown(!seasonDropdown);
    setLeagueDropdown(false);
  };

  const handleLeagueSelect = (league) => {
    onLeagueChange(league);
    setLeagueDropdown(false);
  };

  const handleSeasonSelect = (season) => {
    onSeasonChange(season);
    setSeasonDropdown(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setLeagueDropdown(false);
        setSeasonDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectorRef} className={styles["tournaments-selector"]}>
      <div className={styles["selector-options"]}>
        {/* Liga selector */}
        <div
          onClick={toggleLeagueDropdown}
          className={styles["selector-option__item"]}
        >
          <h4 className={styles["option__title"]}>Competition</h4>
          <span className={styles["option__value"]}>{selectedLeague}</span>
          {leagueDropdown && (
            <div className={styles["selector-dropdown"]}>
              <ul className={styles.dropdown__list}>
                {Object.entries(tournamentsData).map(([id, league]) => (
                  <li
                    onClick={() => handleLeagueSelect(league.title)}
                    key={id}
                    className={`${styles.dropdown__item} ${
                      selectedLeague === league.title ? styles.active : ""
                    } `}
                  >
                    {league.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Season selector */}
        <div
          onClick={toggleSeasonDropdown}
          className={styles["selector-option__item"]}
        >
          <h4 className={styles.option__title}>Season</h4>
          <span className={styles.option__value}>{selectedSeason}</span>
          {seasonDropdown && (
            <div className={styles["selector-dropdown"]}>
              <ul className={styles.dropdown__list}>
                {availableSeasons.map((season) => (
                  <li
                    onClick={() => handleSeasonSelect(season)}
                    key={season}
                    className={`${styles.dropdown__item} ${
                      selectedSeason === season ? styles.active : ""
                    }`}
                  >
                    {season}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <button onClick={onReset} className={styles["selector__btn"]}>
        <img src={reset} alt='reset' className={styles["selector__btn-img"]} />
        <p>RESET</p>
      </button>
    </div>
  );
};

export default TournamentsSelector;
