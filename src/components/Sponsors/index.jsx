import React from "react";

import styles from "./Sponsors.module.scss";
import { DATA_BASE_URL, ASSETS_BASE_URL } from "../../config/assets";
const Sponsors = () => {
  const [sponsorsData, setSponsorsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const sliderTrackRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [, setOffset] = React.useState(0);
  const duplicatedSlides = [...sponsorsData, ...sponsorsData];

  React.useEffect(() => {
    const loadSponsors = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${DATA_BASE_URL}/sponsors.json`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setSponsorsData(data);
      } catch (e) {
        console.error("Failed to load sponsors", e);
      } finally {
        setLoading(false);
      }
    };

    loadSponsors();
  }, []);

  React.useEffect(() => {
    if (!sliderTrackRef.current) return;
    const sliderTrack = sliderTrackRef.current;
    let animationFrameId;
    const speed = 0.4;

    const animate = () => {
      if (!isHovered) {
        setOffset((prevOffset) => {
          let newOffset = prevOffset - speed;
          if (newOffset <= -sliderTrack.scrollWidth / 2) {
            newOffset = 0;
          }
          sliderTrack.style.transform = `translateX(${newOffset}px)`;
          return newOffset;
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className={styles.sponsors}>
      <div className={styles.slider__container}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <ul
            className={styles.slider__track}
            ref={sliderTrackRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedSlides.map((sponsor, index) => (
              <li key={index} className={styles.slide}>
                <a className={styles.slide__link} href={sponsor.link} target='_blank' rel='noopener noreferrer'>
                  <img
                    className={styles.slide__img}
                    alt={sponsor.img}
                    src={`${ASSETS_BASE_URL}/partners/${sponsor.img}.png`}
                    loading='lazy'
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Sponsors;
