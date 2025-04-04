/* eslint-disable no-unused-vars */
import React from "react";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";
import Players from "./pages/Players";

import Header from "./components/Header";
import Partners from "./components/Partners";
import Social from "./components/Social";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import PlayerPage from "./pages/PlayerPage";
import Matches from "./pages/Matches";
import MatchPage from "./pages/MatchPage";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<PlayerPage />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/matches/:id" element={<MatchPage />} />
        </Routes>
      </main>
      <Partners />
      <Social />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
