import styles from "./ClubNewsItems.module.scss";

import { Link } from "react-router-dom";

function ClubNewsItems(news) {
  return (
    <Link to={`/newspage/${news.id}`} className={styles["club__news-link"]}>
      <li className={styles["club__news-item"]}>
        <img
          className={styles["club__news-img"]}
          src={`./img/News/${news.img}.webp`}
          alt='Club news'
        />
        <div className={styles["club__news-info"]}>
          <p className={styles["club__news-title"]}>{news.title}</p>
          <div className={styles["club__news-subtitle"]}>
            <p className={styles["club__news-date"]} date='2024-02-07'>
              {news.date}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ClubNewsItems;
