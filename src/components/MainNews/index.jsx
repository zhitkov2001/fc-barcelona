import React from "react";

import MainNewsItems from "../MainNewsItems";
import MainNewsData from "../../assets/news.json";

function MainNews() {
  const centralIndex = 1;
  const [activeId, setActiveId] = React.useState(centralIndex);

  return (
    <>
      <section className="main__news">
        <h1 className="main__title">FC Barcelona Fan Page</h1>
        <div className="main__news-container">
          {MainNewsData.slice(0, 3).map((news, index) => (
            <MainNewsItems
              key={news.id}
              isActive={activeId === index}
              onMouseEnter={() => setActiveId(index)}
              {...news}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainNews;
