import React from "react";
import styles from "./Home.module.scss";

import MainNews from "../../components/News/MainNews";
import Calendar from "../../components/Calendar";
import ClubNews from "../../components/News/ClubNews";
import HomeTable from "../../components/HomeTable";

import LaLigaData from "../../data/tournaments/laliga.json";
// import LaLigaData from "https://github.com/zhitkov2001/fc-barcelona-data/tree/main/data/tournaments/laliga.json";

import { normalizeTeams, normalizeTable } from "../../utils/Tournaments/normalize";

function Home() {
  const currentSeason = React.useMemo(() => {
    return Object.values(LaLigaData.seasons)[0];
  }, []);

  const teamsList = React.useMemo(() => normalizeTeams(currentSeason.teams, currentSeason.stages), [currentSeason]);

  const tableData = React.useMemo(() => normalizeTable(currentSeason), [currentSeason]);

  return (
    <section className={styles.home}>
      <MainNews />

      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <Calendar />
          <ClubNews />
        </div>

        <div className={styles.containerRight}>
          <HomeTable teamsList={teamsList} tableData={tableData} />
        </div>
      </div>
    </section>
  );
}

export default Home;
