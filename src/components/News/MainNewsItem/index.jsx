import { Link } from "react-router-dom";

import styles from "./MainNewsItem.module.scss";
import { ASSETS_BASE_URL } from "../../../config/assets";
function MainNewsItems({ isActive, onMouseEnter, news }) {
  return (
    <Link
      className={`${styles["main__news-item"]} ${isActive ? styles.active : ""}`}
      onMouseEnter={onMouseEnter}
      to={`/newspage/${news.id}`}
      state={{ news }}
    >
      <img
        className={styles["main__news-img"]}
        alt={news.title}
        src={`${ASSETS_BASE_URL}/News/${news.id}/${news.cover}.webp`}
      />
      <div className={styles["main__news-info"]}>
        <p className={styles["main__news-title"]}>{news.title}</p>
        <p className={styles["main__news-subtitle"]}>{news.subtitle}</p>
      </div>
    </Link>
  );
}

export default MainNewsItems;
