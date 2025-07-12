import React from "react";

function ClubNewsItems(news) {
  return (
    <li className="club__news-item">
      <a href="!#" className="club__news-link">
        <img
          className="club__news-img"
          src={`./img/News/${news.id}.webp`}
          alt="Club news"
        />
        <div className="club__news-info">
          <p className="club__news-title">{news.title}</p>
          <ul className="club__news-subinfo">
            <li className="club__news-date" date="2024-02-07">
              {news.date}
            </li>
            <li className="club__news-theme">{news.subtitle}</li>
          </ul>
        </div>
      </a>
    </li>
  );
}

export default ClubNewsItems;
