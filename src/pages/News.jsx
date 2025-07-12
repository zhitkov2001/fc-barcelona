import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import newsData from "../assets/news.json";
import NewsItem from "../components/NewsItem";

const News = () => {
  // console.log(newsData);

  const [selectedType, setSelectedType] = React.useState(0);

  const newsCategory = [
    "All News",
    "Club",
    "Match reports",
    "Players",
    "Transfers",
    "La Masia",
  ];

  function onSelectedType(id) {
    setSelectedType(id);
  }
  console.log(selectedType);
  return (
    <section className="news">
      <TitleBackround title="News" />
      <div className="container">
        <div className="news-nav">
          {newsCategory.map((item, id) => (
            <button
              key={id}
              onClick={() => onSelectedType(id)}
              className={`nav-btn ${selectedType === id ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="news__container">
          {newsData.map((news) => (
            <NewsItem key={news.id} {...news} />
            // NewsItem содержит только title+date, а уже на странице NewsPage будет вся остальная инфа
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
