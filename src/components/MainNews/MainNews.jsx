import React from "react";

import MainNewsItems from "./MainNewsItems";
import MainNewsData from "../../assets/mainNews.json";

function MainNews() {
  const centralIndex = 1; // Индекс центрального элемента
  const [activeId, setActiveId] = React.useState(
    MainNewsData.mainNewsDataFromJson[centralIndex].id
  ); // Устанавливаем центральный элемент как активный

  return (
    <>
      <section className="main__news">
        <h1 className="main__title">FC Barcelona Fan Page</h1>
        <div className="main__news-container">
          {MainNewsData.mainNewsDataFromJson.map((obj) => (
            <MainNewsItems
              key={obj.id}
              {...obj}
              isActive={activeId === obj.id} // Проверяем, активен ли элемент
              onMouseEnter={() => setActiveId(obj.id)} // Устанавливаем активный ID при наведении
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainNews;
