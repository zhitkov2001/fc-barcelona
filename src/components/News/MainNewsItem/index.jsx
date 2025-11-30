import { Link } from "react-router-dom";

import styles from "./MainNewsItem.module.scss";

function MainNewsItems({ isActive, onMouseEnter, ...news }) {
  return (
    <Link
      className={`${styles["main__news-item"]} ${isActive ? styles.active : ""}`}
      onMouseEnter={onMouseEnter}
      to={`/newspage/${news.id}`}
    >
      <img
        className={styles["main__news-img"]}
        alt={news.title}
        src={`${process.env.PUBLIC_URL}/img/News/${news.img}.webp`}
      />
      <div className={styles["main__news-info"]}>
        <p className={styles["main__news-title"]}>{news.title}</p>
        <p className={styles["main__news-subtitle"]}>{news.subtitle}</p>
      </div>
    </Link>
  );
}

export default MainNewsItems;
