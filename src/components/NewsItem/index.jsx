// import React from "react";
import { Link } from "react-router-dom";

import styles from "./newsItem.module.scss";

function NewsItem(news) {
  return (
    <Link to={`/newspage/${news.id}`}>
      <article className={styles.news__item}>
        <div className={styles.img__container}>
          <img
            src={`./img/News/${news.img}.webp`}
            alt={news.title}
            className={styles.news__img}
          />
        </div>
        <div className={styles.info__container}>
          <h3 className={styles.news__title}>{news.title}</h3>
          <div className={styles.news__info}>
            <div className={styles.category__container}>
              <div className={styles["category-quad"]}></div>
              <div className={styles.category__title}>
                {news.category[0].toUpperCase() + news.category.slice(1)}
              </div>
            </div>
            <div className={styles["news__date-info"]}>
              <img
                className={styles.news__icon}
                src="../img/time.svg"
                alt="time"
              />
              <p className={styles.news__date}>{news.date}</p>
              <p className={styles.news__month}>{news.month}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default NewsItem;
