import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNews from "../components/MainNews/MainNews";
import ClubNews from "./../components/ClubNews/ClubNews";

function Home() {
  return (
    <>
      <MainNews />
      <ClubNews />
    </>
  );
}

export default Home;
