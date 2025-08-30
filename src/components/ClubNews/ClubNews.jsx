import React from "react";

import ClubNewsItems from "./clubNewsItems";
import ClubNewsData from "../../assets/news.json";

function ClubNews() {
  return (
    <>
      <section className="club__news">
        <div className="container">
          <div className="club__news-container">
            <h2 className="section__news-title">News</h2>
            <ul className="club__news-list">
              {ClubNewsData.slice(0, 6).map((news) => (
                <ClubNewsItems key={news.id} {...news} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClubNews;
