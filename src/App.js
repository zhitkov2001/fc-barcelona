/* eslint-disable no-unused-vars */
import React from "react";
import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Players from "./pages/Players";

import Header from "./components/Header";
import Partners from "./components/Partners";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1stTeam" element={<Players />} />
        </Routes>
      </main>
      <Partners />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
