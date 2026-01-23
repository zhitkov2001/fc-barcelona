import React from "react";

import styles from "./MainNews.module.scss";

import MainNewsItems from "../MainNewsItem/";
import { useIsTouchDevice } from "../../../hooks/useIsTouchDevice";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

function MainNews({ newsData }) {
  // const centralIndex = 1;
  const [activeId, setActiveId] = React.useState(0);

  const isTouch = useIsTouchDevice();
  const width = useWindowWidth();

  function getNewsCount(width, isTouch) {
    if (isTouch) return 1;

    if (width >= 1400) return 3;
    if (width >= 1000) return 2;
    if (width >= 600) return 1;

    return 1;
  }

  const visibleCount = getNewsCount(width, isTouch);

  React.useEffect(() => {
    const centralIndex = Math.floor((visibleCount - 1) / 2);
    setActiveId(centralIndex);
  }, [visibleCount]);

  return (
    <section className={styles["main__news"]}>
      <h1 className={styles["main__title"]}>FC Barcelona Fan Page</h1>
      <div className={styles["main__news-container"]}>
        {newsData.slice(0, visibleCount).map((news, index) => (
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
