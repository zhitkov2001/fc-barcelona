import { Link } from "react-router-dom";

import styles from "./NewsItem.module.scss";
import { ASSETS_BASE_URL } from "../../../config/assets";
function NewsItem({ news }) {
  return (
    <Link to={`/newspage/${news.id}`} key={news.id} state={{ news }} className={styles.news__link}>
      <article className={styles.news__item}>
        <div className={styles.img__container}>
          <img
            src={`${ASSETS_BASE_URL}/News/${news.id}/${news.cover}.webp`}
            alt={news.title}
            className={styles.news__img}
            loading='lazy'
          />
        </div>
        <div className={styles.info__container}>
          <h3 className={styles.news__title}>{news.title}</h3>
          <div className={styles.news__info}>
            <div className={styles.category__container}>
              <div className={styles["category-quad"]}></div>
              <div className={styles.category__title}>{news.category[0].toUpperCase() + news.category.slice(1)}</div>
            </div>
            <div className={styles["news__date-info"]}>
              <img className={styles.news__icon} src={`${ASSETS_BASE_URL}/svgicons/time.svg`} alt='time' />
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
