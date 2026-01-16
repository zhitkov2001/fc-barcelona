import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ASSETS_BASE_URL } from "../config/assets";

const NewsPage = () => {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return <div className='news__error'>News not found</div>;
  }

  const SliderBlock = ({ id, images, newsId }) => {
    const [index, setIndex] = useState(0);
    const total = images.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    const current = images[index];

    return (
      <div className='slider'>
        <button className='slider__btn slider__btn--left' onClick={prev}>
          ‹
        </button>

        <div className='slider__viewport'>
          <img
            className='slider__image'
            src={`${ASSETS_BASE_URL}/News/${newsId}/${current.src}.webp`}
            alt={current.alt}
          />
        </div>

        <button className='slider__btn slider__btn slider__btn--right' onClick={next}>
          ›
        </button>
      </div>
    );
  };

  const contentMap = {
    paragraph: ({ id, text }) => (
      <p className='paragraph' key={id}>
        {text}
      </p>
    ),

    heading: ({ id, level, text }) => (
      <h2 key={id} className={`heading-${level}`}>
        {text}
      </h2>
    ),

    media: ({ id, media }) => (
      <div key={id} className={`media`}>
        <img className={`media__image`} src={`${ASSETS_BASE_URL}/News/${news.id}/${media.src}.webp`} alt={media.alt} />
      </div>
    ),

    "media-text": ({ id, text, media, order }) => (
      <div key={id} className={`media-text ${order}`}>
        <img
          className={`media-text__image`}
          src={`${ASSETS_BASE_URL}/News/${news.id}/${media.src}.webp`}
          alt={media.alt}
          width={media.width}
          height={media.height}
        />
        <p className='paragraph'>{text}</p>
      </div>
    ),

    slider: (block) => <SliderBlock key={block.id} {...block} newsId={news.id} />,
  };

  function renderContent(content) {
    return content.map((block) => contentMap[block.type]?.(block) ?? null);
  }

  return (
    <section className='news__page'>
      <div className='news-background__clip'>
        <div className='news-background__wrapper'>
          <img
            src={`${ASSETS_BASE_URL}/News/${news.id}/${news.cover}.webp`}
            className='news-background'
            alt=''
            loading='lazy'
          />
        </div>
      </div>
      <div className='news-background__spacer'></div>
      <div className='news__container'>
        <h1 className='news__title'>{news.title}</h1>
        <p className='news__subtitle'>{news.subtitle}</p>
        <div className='news__info'>
          <div className='news-date__info'>{`${news.date} ${news.month}`}</div>
          <div className='news__category'>
            <div className='category-quad'></div>
            {news.category}
          </div>
        </div>
        <div className='news__content'>{renderContent(news?.content)}</div>
        <div className='section-footer'>
          <img className='section-footer__logo' src={`${ASSETS_BASE_URL}/barca_logo(60px).webp`} alt='FC Barcelona' />
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
