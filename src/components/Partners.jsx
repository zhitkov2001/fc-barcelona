import React from "react";
import { ASSETS_BASE_URL } from "../config/assets";
function Partners() {
  return (
    <section className='partners'>
      <div className='container'>
        <ul className='partners__list'>
          <li className='partners__item'>
            <a className='partners__link' href='https://www.nike.com/gb/' target='_blank' rel='noopener noreferrer'>
              <img className='partners__img' alt='Nike' src={`${ASSETS_BASE_URL}/nike_logo.webp`} />
            </a>
          </li>
          <li className='partners__item'>
            <a className='partners__link' href='https://open.spotify.com' target='_blank' rel='noopener noreferrer'>
              <img className='partners__img' alt='Spotify' src={`${ASSETS_BASE_URL}/spotify_logo.webp`} />
            </a>
          </li>
          <li className='partners__item'>
            <a
              className='partners__link'
              href='https://www.philips.com/ambilight?1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className='partners__img' alt='Amblight' src={`${ASSETS_BASE_URL}/amblight_logo.webp`} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;
