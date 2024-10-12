import React from "react";

import ClubNewsItems from "./ClubNewsItems";
import ClubNewsData from "../../assets/clubNews.json";

function ClubNews() {
  return (
    <>
      <section className="club__news">
        <div className="container">
          <div className="club__news-container">
            <h2 className="section__news-title">News</h2>
            <ul className="club__news-list">
              {ClubNewsData.clubNewsDataFromJson.map((obj) => (
                <ClubNewsItems key={obj.id} {...obj} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClubNews;
