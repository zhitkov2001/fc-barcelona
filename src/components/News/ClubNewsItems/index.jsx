import styles from "./ClubNewsItems.module.scss";

import { Link } from "react-router-dom";
import { ASSETS_BASE_URL } from "../../../config/assets";
function ClubNewsItems({ news }) {
  return (
    <li className={styles["club__news-item"]}>
      <Link to={`/newspage/${news.id}`} state={{ news }} className={styles["club__news-link"]}>
        <div className={styles["club__news-img-wrapper"]}>
          <img
            className={styles["club__news-img"]}
            src={`${ASSETS_BASE_URL}/News/${news.id}/${news.cover}.webp`}
            alt='Club news'
            loading='lazy'
          />
        </div>
        <div className={styles["club__news-info"]}>
          <h3 className={styles["club__news-title"]}>{news.title}</h3>
          <div className={styles["club__news-subtitle"]}></div>
          <div className={styles["club__news-meta"]}>
            <p className={styles["club__news-date"]} date='2024-02-07'>
              {news.month} {news.date}
            </p>
            <p className={styles["club__news-category"]}>{news.category}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ClubNewsItems;
