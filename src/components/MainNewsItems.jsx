import React from "react";

function MainNewsItems({
  id,
  newsUrl,
  newsImg,
  title,
  subtitle,
  isActive,
  onMouseEnter,
}) {
  return (
    <a
      className={isActive ? "active" : ""}
      onMouseEnter={onMouseEnter} // Устанавливаем активный ID при наведении
      href={newsUrl}
    >
      <img className="main__news-img" alt="News Img" src={newsImg} />
      <div className="main__news-info">
        <p className="main__news-title">{title}</p>
        <p className="main__news-subtitle">{subtitle}</p>
      </div>
    </a>
  );
}

export default MainNewsItems;
