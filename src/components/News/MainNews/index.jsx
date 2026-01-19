import React from "react";

import styles from "./MainNews.module.scss";

import MainNewsItems from "../MainNewsItem/";
import { useIsTouchDevice } from "../../../hooks/useIsTouchDevice";

function MainNews({ newsData }) {
  const centralIndex = 1;
  const [activeId, setActiveId] = React.useState(centralIndex);

  const isTouch = useIsTouchDevice();

  // const visibleNews = newsData.slice(0, visibleCount);
  return (
    <section className={styles["main__news"]}>
      <h1 className={styles["main__title"]}>FC Barcelona Fan Page</h1>
      <div className={styles["main__news-container"]}>
        {newsData.slice(0, isTouch ? 1 : 3).map((news, index) => (
          <MainNewsItems
            key={news.id}
            isActive={activeId === index}
            onMouseEnter={() => setActiveId(index)}
            news={news}
          />
        ))}
      </div>
    </section>
  );
}

export default MainNews;
