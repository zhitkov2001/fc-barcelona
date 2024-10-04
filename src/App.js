import React from "react";
import "./scss/app.scss";

import Header from "./components/Header";
import Partners from "./components/Partners";

function App() {
  return (
    <div classNameName="App">
      <Header />

      <main className="main">
        <section className="main__news">
          <h1 className="main__title">FC&#160;Barcelona Fan Page</h1>
          <div className="main__news-container">
            <a className="main__news-item" href="!#">
              <picture>
                <source
                  srcset="./img/News/hansiFlick.webp 1x, ./img/News/hansiFlick@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="main__news-img"
                  alt=""
                  src="./img/News/hansiFlick.webp"
                />
              </picture>
              <div className="main__news-info">
                <p className="main__news-title">
                  Hansi Flick join to&#160;Barca
                </p>
                <p className="main__news-subtitle">
                  Hansi Flick&#8217;s side complete the first week
                  of&#160;training with a&#160;session on&#160;the Tito Vilanova
                  pitch at&#160;the Ciutat Esportiva Joan Gamper
                </p>
              </div>
            </a>
            <a className="main__news-item main__news-item--active" href="!#">
              <picture>
                <source
                  srcset="./img/News/copaWinner.webp 1x, ./img/News/copaWinner@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="main__news-img"
                  alt=""
                  src="./img/News/copaWinner.webp"
                />
              </picture>
              <div className="main__news-info">
                <p className="main__news-title">Copa America 2024 winners</p>
                <p className="main__news-subtitle">
                  Argentina National Team Copa 2024 winner
                </p>
              </div>
            </a>
            <a className="main__news-item" href="!#">
              <picture>
                <source
                  srcset="./img/News/euro_winner.webp 1x, ./img/News/euro_winner@2x.webp 2x"
                  type="image/webp"
                />
                <img
                  className="main__news-img"
                  alt=""
                  src="./img/News/euro_winner.webp"
                />
              </picture>
              <div className="main__news-info">
                <p className="main__news-title">EURO 2024 winners</p>
                <p className="main__news-subtitle">
                  Lamine Yamal, Ferran, Fermin and Pedri EURO 2024 winners
                </p>
              </div>
            </a>
          </div>
        </section>

        <section className="club__news">
          <div className="container">
            <div className="club__news-container">
              <h2 className="section__news-title">News</h2>
              <ul className="club__news-list">
                @@loop ('./templates/news.html', '././data/club-news.json')
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Partners />
      <footer className="footer">
        <div className="container">
          <div className="footer__copyright">
            <p>Footer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
