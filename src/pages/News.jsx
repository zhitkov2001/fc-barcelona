import React from "react";

import TitleBackround from "../components/TitleBackground";
import newsData from "../data/news.json";
import NewsItem from "../components/News/NewsItem";

const News = () => {
  const [selectedType, setSelectedType] = React.useState("All News");

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
    <section className='news'>
      <TitleBackround title='News' />
      <div className='container'>
        <div className='news-nav'>
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
        <div className='news__container'>
          {filteredNews.map((news) => (
            <NewsItem key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
