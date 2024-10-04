import React from "react";

function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <ul className="partners__list">
          <li className="partners__item">
            <a
              className="partners__link"
              href="https://www.nike.com/gb/"
              // target="_blank"
            >
              <picture>
                <source
                  srcset="./img/nike_logo.webp 1x, ./img/nike_logo@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="partners__img"
                  alt=""
                  src="./img/nike_logo.webp"
                />
              </picture>
            </a>
          </li>
          <li className="partners__item">
            <a
              className="partners__link"
              href="https://open.spotify.com"
              // target="_blank"
            >
              <picture>
                <source
                  srcset="./img/spotify_logo.webp 1x, ./img/spotify_logo@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="partners__img"
                  alt=""
                  src="./img/spotify_logo.webp"
                />
              </picture>
            </a>
          </li>
          <li className="partners__item">
            <a
              className="partners__link"
              href="https://www.philips.ru/c-m-so/tv/all"
              // target="_blank"
            >
              <picture>
                <source
                  srcset="./img/amblight_logo.webp 1x, ./img/amblight_logo@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="partners__img"
                  alt=""
                  src="./img/amblight_logo.webp"
                />
              </picture>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;
