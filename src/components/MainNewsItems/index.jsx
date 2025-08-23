import React from "react";
import { Link } from "react-router-dom";

function MainNewsItems({ isActive, onMouseEnter, ...news }) {
  return (
    <Link
      className={isActive ? "active" : ""}
      onMouseEnter={onMouseEnter}
      to={`/newspage/${news.id}`}
    >
      <img
        className="main__news-img"
        alt={news.title}
        src={`/img/News/${news.img}.webp`}
      />
      <div className="main__news-info">
        <p className="main__news-title">{news.title}</p>
        <p className="main__news-subtitle">{news.subtitle}</p>
      </div>
    </Link>
  );
}

export default MainNewsItems;
