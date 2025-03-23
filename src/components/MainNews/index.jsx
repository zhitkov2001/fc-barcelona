import React from "react";

import MainNewsItems from "../MainNewsItems";
import MainNewsData from "../../assets/main-news.json";

function MainNews() {
  const centralIndex = 1;
  const [activeId, setActiveId] = React.useState(
    MainNewsData.mainNewsDataFromJson[centralIndex].id
  );

  return (
    <>
      <section className="main__news">
        <h1 className="main__title">FC Barcelona Fan Page</h1>
        <div className="main__news-container">
          {MainNewsData.mainNewsDataFromJson.map((obj) => (
            <MainNewsItems
              key={obj.id}
              {...obj}
              isActive={activeId === obj.id}
              onMouseEnter={() => setActiveId(obj.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainNews;
