import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const PlayerPage = () => {
  const location = useLocation();
  const player = location.state?.player;
  const playerStats = player?.stats;
  const playerCurrentStats = player?.currentStats;
  const playerAllTimeStats = player?.allTimeStats;
  const playerDetails = player?.details;
  const playerBio = player?.bio;
  const playerTrophy = player?.trophy;

  console.log(location.state, "location");
  console.log(player, "player");

  const [popup, setPopup] = React.useState(false);
  const openPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };

  const detailsTranslation = {
    placeOfBirth: "place of birth",
    dateOfBirth: "date of birth",
    weight: "weight",
    height: "height",
    clubDebut: "club debut",
  };

  function smoothScrollTo(element, target, duration) {
    const start = element.scrollLeft;
    const distance = target - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      element.scrollLeft = start + distance * easeOutCubic(progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    requestAnimationFrame(animation);
  }
  const listRef = useRef(null);

  const handleNext = () => {
    if (listRef.current) {
      smoothScrollTo(listRef.current, listRef.current.scrollLeft + 550, 500);
    }
  };

  const handlePrev = () => {
    if (listRef.current) {
      smoothScrollTo(listRef.current, listRef.current.scrollLeft - 550, 500);
    }
  };

  return (
    <div className="playerPage">
      <div className="player-hero__wrapper">
        <h2 className="player-hero__surname">{player.surname}</h2>
        <div className="player-hero__container">
          <div className="player-hero__stats">
            <h3 className="player-hero-stats__title">Barca stats</h3>
            <ul className="player-hero-stats__list">
              {Object.entries(playerStats).map(([key, value]) => (
                <li key={key} className="player-hero-stats__item">
                  <p className="player-hero-stats-item__title">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p className="player-hero-stats-item__value">{value}</p>
                </li>
              ))}
            </ul>
            <ul className="player-hero-stats__list">
              {Object.entries(playerCurrentStats).map(([key, value]) => (
                <li key={key} className="player-hero-current-stats__item">
                  <p className="player-hero-stats-item-current__title">
                    Season 24/25
                  </p>
                  <p className="player-hero-stats-item-current__value">
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="player-hero-img__container">
            <img
              alt={`${player.img}`}
              src={`../../../img/Players/No-bg/${player.img}.webp`}
            />
            <div className="player-hero-info__block">
              <p className="player-hero-info__position">
                {player.position.charAt(0).toUpperCase() +
                  player.position.slice(1)}
              </p>
              <div className="player-hero-info__data">
                <p className="player-hero-info__number">{player.number}</p>
                <p className="player-hero-info__name">{player.name}</p>
                <p className="player-hero-info__surname">{player.surname}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="player-card__content">
          <div className="player-card__wrapper">
            <img
              className="player-card__img"
              src={`../../../img/Players/${player.img}.webp`}
              alt={player.surname}
            />
            <div className="player-card-img__info">
              <p className="player-card-img__number">{player.number}</p>
              <p className="player-card-img__fullname">
                {player.name} {player.surname}
              </p>
            </div>
          </div>
          <div className="player-card__info">
            <p className="player-card-info__title">{player.title}</p>
            <p className="player-card-info__subtitle">{player.subtitle}</p>
            <ul className="player-card-allTime__list">
              {Object.entries(playerAllTimeStats).map(([key, value]) => (
                <li key={key} className="player-card-allTime__item">
                  <p className="player-card-allTime-stats__title">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <span className="player-card-allTime-stats__value">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
            <button onClick={openPopup} className="player-card-btn">
              Read full BIO
              <svg
                fill=""
                height="16px"
                width="12px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                stroke="#ffffff"
                strokeWidth="20"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="player-card__details">
          <ul className="player-card-details__list">
            {playerDetails ? (
              Object.entries(playerDetails).map(([key, value]) => (
                <li key={key} className="player-card-details__item">
                  <p className="player-card-details__title">
                    {detailsTranslation[key].toUpperCase()}
                  </p>
                  <p className="player-card-details__text">{value}</p>
                </li>
              ))
            ) : (
              <div></div>
            )}
          </ul>
        </div>
        {playerTrophy ? (
          <div className="player-card__trophy">
            <div className="player-card-trophy-btn__wrapper">
              <button onClick={handlePrev} className="player-card-trophy__btn">
                <img src="../../img/svgicons/btnPrev.svg" alt="Previous" />
              </button>
              <button onClick={handleNext} className="player-card-trophy__btn">
                <img src="../../img/svgicons/btnNext.svg" alt="Previous" />
              </button>
            </div>
            <ul ref={listRef} className="player-card-trophy__list">
              {Object.entries(playerTrophy).length > 0 ? (
                Object.entries(playerTrophy).map(([key, value]) => (
                  <li key={key} className="player-card-trophy__item">
                    <p className="player-card-trophy__team">{value.club}</p>
                    <p className="player-card-trophy__competition">
                      {value.title}
                    </p>
                    <div className="player-card-trophy__wrapper">
                      <span className="player-card-trophy__quantity">
                        {value.quantity}
                      </span>
                      <img
                        src={`../../img/Trophy/${value.img}.webp`}
                        alt={`${value.img}`}
                      />
                    </div>
                    <ul className="player-card-trophy-season__list">
                      {Object.entries(value.years).length > 0 ? (
                        Object.entries(value.years).map(([key, year]) => (
                          <li className="player-card-trophy-season__item">
                            <p className="player-card-trophy-season__value">
                              {year}
                            </p>
                          </li>
                        ))
                      ) : (
                        <></>
                      )}
                    </ul>
                  </li>
                ))
              ) : (
                <p>No trophies available</p>
              )}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
      {playerBio ? (
        popup ? (
          <div className="full-bio__overlay">
            <div className="full-bio__wrapper">
              <button onClick={closePopup} className="full-bio__btn">
                <img src="../../img/svgicons/close.svg" alt="close" />
              </button>
              <ul className="full-bio__content">
                <h4 className="full-bio__title">{player.fullName}</h4>
                {playerBio.map((text, i) => (
                  <li key={i} className="full-bio__item">
                    <p className="full-bio__paragraph">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PlayerPage;
