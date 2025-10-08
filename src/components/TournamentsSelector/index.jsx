import React from "react";

import styles from "./TournamentsSelector.module.scss";

import listImg from "../../assets/img/list.svg";
import reset from "../../assets/img/reset.svg";

import LaLigaData from "../../data/tournaments/laliga";
import UclData from "../../data/tournaments/ucl.json";

const TournamentsSelector = () => {
  // const seasonList = ["2025/26", "2024/25", "2023/24", "2022/23", "2021/22"];
  const TournamentsData = {
    "La Liga": LaLigaData,
    "UEFA Champions League": UclData,
  };

  const [selectedLeague, setSelectedLeague] = React.useState("La Liga");
  const [selectedSeason, setSelectedSeason] = React.useState("");
  const [leagueDropdown, setLeagueDropdown] = React.useState(false);
  const [seasonDropdown, setSeasonDropdown] = React.useState(false);

  const availableSeasons = React.useMemo(() => {
    const leagueData = TournamentsData[selectedLeague];
    if (leagueData && leagueData.seasons) {
      return Object.keys(leagueData.seasons);
    }
    return [];
  }, [selectedLeague]);

  React.useEffect(() => {
    if (
      availableSeasons.length > 0 &&
      !availableSeasons.includes(selectedSeason)
    ) {
      setSelectedSeason(availableSeasons[0]);
    }
  });

  const toggleLeagueDropdown = () => {
    setLeagueDropdown(!leagueDropdown);
    setSeasonDropdown(false);
  };

  const toggleSeasonDropdown = () => {
    setSeasonDropdown(!seasonDropdown);
    setLeagueDropdown(false);
  };

  const resetFilter = () => {
    setSelectedLeague("La Liga");
    setSelectedSeason(availableSeasons[0]);
  };

  return (
    <div className={styles["tournaments-selector"]}>
      {/* <img src={listImg} alt='list' className={styles["selector-img"]} /> */}

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
                {Object.entries(TournamentsData).map(([id, league]) => (
                  <li
                    onClick={() => setSelectedLeague(league.title)}
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
                    onClick={() => setSelectedSeason(season)}
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
      <button onClick={resetFilter} className={styles["selector__btn"]}>
        <img src={reset} alt='reset' className={styles["selector__btn-img"]} />
        <p>RESET</p>
      </button>
    </div>
  );
};

export default TournamentsSelector;
