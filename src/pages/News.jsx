import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import newsData from "../assets/news.json";
import NewsItem from "../components/NewsItem";

const News = () => {
  const [selectedType, setSelectedType] = React.useState("All News");

  // console.log("Selected type:", selectedType);
  // console.log(
  //   "Filtered news:",
  //   newsData.filter((news) => news.category === selectedType)
  // );

  const newsCategory = [
    "All News",
    "club",
    "match reports",
    "players",
    "transfers",
    "la masia",
  ];

  function onSelectedType(type) {
    setSelectedType(type);
  }

  const filteredNews =
    selectedType === "All News"
      ? newsData
      : newsData.filter((news) => news.category === selectedType);

  return (
    <section className="news">
      <TitleBackround title="News" />
      <div className="container">
        <div className="news-nav">
          {newsCategory.map((item, id) => (
            <button
              key={id}
              onClick={() => onSelectedType(item)}
              className={`nav-btn ${selectedType === item ? "active" : ""}`}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <div className="news__container">
          {filteredNews.map((news) => (
            <NewsItem key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
