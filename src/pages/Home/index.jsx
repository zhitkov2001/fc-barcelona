import React from "react";
import styles from "./Home.module.scss";

import MainNews from "../../components/News/MainNews";
import Calendar from "../../components/Calendar";
import ClubNews from "../../components/News/ClubNews";
import HomeTable from "../../components/HomeTable";

import { DATA_BASE_URL } from "../../config/assets";
import { normalizeTeams, normalizeTable } from "../../utils/Tournaments/normalize";

function Home() {
  const [newsData, setNewsData] = React.useState([]);
  const [loadingNewsData, setLoadingNewsData] = React.useState(true);
  const [laLigaData, setLaLigaData] = React.useState(null);
  const [loadingLaLigaData, setLoadingLaLigaData] = React.useState(true);

  React.useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await fetch(`${DATA_BASE_URL}/news.json`);
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        setNewsData(data);
      } catch (e) {
        console.error("Failed to load La Liga", e);
      } finally {
        setLoadingNewsData(false);
      }
    };

    loadNews();
  }, []);

  React.useEffect(() => {
    const loadLaLiga = async () => {
      try {
        const res = await fetch(`${DATA_BASE_URL}/tournaments/laliga.json`);
        if (!res.ok) throw new Error(res.status);
        const data = await res.json();
        setLaLigaData(data);
      } catch (e) {
        console.error("Failed to load La Liga", e);
      } finally {
        setLoadingLaLigaData(false);
      }
    };

    loadLaLiga();
  }, []);

  const currentSeason = React.useMemo(() => {
    if (!laLigaData?.seasons) return null;
    return Object.values(laLigaData.seasons)[0];
  }, [laLigaData]);

  const teamsList = React.useMemo(() => {
    if (!currentSeason) return [];
    return normalizeTeams(currentSeason.teams, currentSeason.stages);
  }, [currentSeason]);

  const tableData = React.useMemo(() => {
    if (!currentSeason) return [];
    return normalizeTable(currentSeason);
  }, [currentSeason]);

  return (
    <section className={styles.home}>
      {loadingNewsData ? <h3>Loading...</h3> : <MainNews newsData={newsData.slice(0, 3)} />}

      <div className={styles.container}>
        {/* <div className={styles.containerLeft}> */}
        <Calendar />
        {loadingNewsData ? <h3>Loading...</h3> : <ClubNews newsData={newsData.slice(0, 6)} />}
        {/* </div> */}

        {/* <div className={styles.containerRight}>
          {loadingLaLigaData ? <h3>Loading...</h3> : <HomeTable teamsList={teamsList} tableData={tableData} />}
        </div> */}
      </div>
    </section>
  );
}

export default Home;
