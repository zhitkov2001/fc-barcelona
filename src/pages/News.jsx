import React from "react";

import TitleBackground from "../components/TitleBackground";
import NewsItem from "../components/News/NewsItem";
import { DATA_BASE_URL } from "../config/assets";

const News = () => {
  const [newsData, setNewsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState("All News");

  const newsCategory = ["All News", "club", "match reports", "players", "transfers", "la masia"];

  React.useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${DATA_BASE_URL}/news.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setNewsData(data);
      } catch (e) {
        console.error("Failed to load news", e);
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const filteredNews =
    selectedType === "All News" ? newsData : newsData.filter((news) => news.category === selectedType);

  if (loading) return null;

  return (
    <section className='news'>
      <TitleBackground title='News' />

      <div className='container'>
        <div className='news-nav'>
          {newsCategory.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedType(item)}
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
