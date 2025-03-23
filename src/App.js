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
import Schedule from "./pages/Schedule";

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
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/player/:id" element={<PlayerPage />} />
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
