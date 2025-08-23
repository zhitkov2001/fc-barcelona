import React from "react";
import { Link } from "react-router-dom";

function ClubNewsItems(news) {
  return (
    <Link to={`/newspage/${news.id}`} className="club__news-link">
      <li className="club__news-item">
        <img
          className="club__news-img"
          src={`./img/News/${news.img}.webp`}
          alt="Club news"
        />
        <div className="club__news-info">
          <p className="club__news-title">{news.title}</p>
          <div className="club__news-subinfo">
            <p className="club__news-date" date="2024-02-07">
              {news.date}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ClubNewsItems;
