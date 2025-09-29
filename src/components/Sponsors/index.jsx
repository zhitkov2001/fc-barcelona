import React from "react";

import sponsorsData from "../../data/sponsors.json";
import styles from "./sponsors.module.scss";

const Sponsors = () => {
  const sliderTrackRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [, setOffset] = React.useState(0);
  const duplicatedSlides = [...sponsorsData, ...sponsorsData]; // Дублируем слайды

  React.useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    let animationFrameId;
    const speed = 0.4; // Скорость прокрутки (пикселей за кадр)

    const animate = () => {
      if (!isHovered) {
        setOffset((prevOffset) => {
          let newOffset = prevOffset - speed; // Сдвигаем слайды влево
          if (newOffset <= -sliderTrack.scrollWidth / 2) {
            newOffset = 0; // Возвращаемся в начало, если дошли до конца
          }
          sliderTrack.style.transform = `translateX(${newOffset}px)`;
          return newOffset;
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId); // Очистка анимации
  }, [isHovered]);

  return (
    <section className={styles.sponsors}>
      <div className={styles.slider__container}>
        <ul
          className={styles.slider__track}
          ref={sliderTrackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedSlides.map((sponsor, index) => (
            <li key={index} className={styles.slide}>
              <a
                className={styles.slide__link}
                href={sponsor.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className={styles.slide__img}
                  alt={sponsor.img}
                  src={`${process.env.PUBLIC_URL}/img/partners/${sponsor.img}.png`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sponsors;
