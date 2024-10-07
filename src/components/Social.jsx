import React from "react";

function Social() {
  return (
    <>
      <section className="social">
        <div className="container">
          <ul className="social__link-list">
            <li id="facebook" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/facebook.webp"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">Facebook</p>
                </div>
              </a>
            </li>
            <li id="x" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/x.webp"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">X</p>
                </div>
              </a>
            </li>
            <li id="youtube" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/youtube.webp"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">YouTube</p>
                </div>
              </a>
            </li>
            <li id="instagram" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/instagram.webp"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">Instagram</p>
                </div>
              </a>
            </li>
            <li id="tiktok" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/tiktok.webp"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">TikTok</p>
                </div>
              </a>
            </li>
            <li id="spotify" className="social__link-item">
              <a href="!#" className="social__link">
                <img
                  className="social__link-img"
                  src="./img/SocialIcon/spotify.svg"
                  alt="Social link"
                />
                <div className="social__link-item-info">
                  <h5 className="social__link-item-title">FC Barcelona</h5>
                  <p className="social__link-item-subtitle">Spotify</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Social;
