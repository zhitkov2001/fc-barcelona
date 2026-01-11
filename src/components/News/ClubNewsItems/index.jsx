import styles from "./ClubNewsItems.module.scss";

import { Link } from "react-router-dom";
import { ASSETS_BASE_URL } from "../../../config/assets";
function ClubNewsItems({ news }) {
  return (
    <Link to={`/newspage/${news.id}`} state={{ news }} className={styles["club__news-link"]}>
      <li className={styles["club__news-item"]}>
        <img
          className={styles["club__news-img"]}
          src={`${ASSETS_BASE_URL}/News/${news.id}/${news.cover}.webp`}
          alt='Club news'
          loading='lazy'
        />
        <div className={styles["club__news-info"]}>
          <p className={styles["club__news-title"]}>{news.title}</p>
          <div className={styles["club__news-subtitle"]}>
            <p className={styles["club__news-date"]} date='2024-02-07'>
              {news.month} {news.date}
            </p>
            <p className={styles["club__news-category"]}>{news.category}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ClubNewsItems;
