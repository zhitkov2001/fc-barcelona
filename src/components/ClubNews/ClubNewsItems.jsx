import React from "react";

function ClubNewsItems({ id, img, title, date, subtitle }) {
  return (
    <>
      <li className="club__news-item">
        <a href="!#" className="club__news-link">
          <img className="club__news-img" src={img} alt="Club news" />
          <div className="club__news-info">
            <p className="club__news-title">{title}</p>
            <ul className="club__news-subinfo">
              <li className="club__news-date" date="2024-02-07">
                {date}
              </li>
              <li className="club__news-theme">{subtitle}</li>
            </ul>
          </div>
        </a>
      </li>
    </>
  );
}

export default ClubNewsItems;
