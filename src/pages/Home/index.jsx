import React from "react";
import styles from "./Home.module.scss";

import MainNews from "../../components/News/MainNews";
import Calendar from "../../components/Calendar";
import ClubNews from "../../components/News/ClubNews";

import { DATA_BASE_URL } from "../../config/assets";

function Home() {
  const [newsData, setNewsData] = React.useState([]);
  const [loadingNewsData, setLoadingNewsData] = React.useState(true);

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

  return (
    <section className={styles.home}>
      {loadingNewsData ? <h3>Loading...</h3> : <MainNews newsData={newsData.slice(0, 3)} />}
      <div className={styles.container}>
        <Calendar />
        {loadingNewsData ? <h3>Loading...</h3> : <ClubNews newsData={newsData.slice(0, 6)} />}
      </div>
    </section>
  );
}

export default Home;
