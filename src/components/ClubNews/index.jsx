import styles from "./ClubNews.module.scss";

import ClubNewsItems from "../ClubNewsItems";
import ClubNewsData from "../../data/news.json";

function ClubNews() {
  return (
    <>
      <section className={styles.club__news}>
        <div className={styles.container}>
          <div className={styles["club__news-container"]}>
            <h2 className={styles["section__news-title"]}>News</h2>
            <ul className={styles["club__news-list"]}>
              {ClubNewsData.slice(0, 6).map((news) => (
                <ClubNewsItems key={news.id} {...news} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClubNews;
