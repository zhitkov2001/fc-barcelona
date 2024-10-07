import React from "react";
import "./scss/app.scss";

import Header from "./components/Header";
import Partners from "./components/Partners";
import MainNews from "./components/MainNews";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <MainNews />

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
      <Social />
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
