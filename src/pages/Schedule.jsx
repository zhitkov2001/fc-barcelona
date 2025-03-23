import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";

function Schedule() {
  return (
    <>
      <section className="schedule">
        <TitleBackround title="Barça Matches" />
        <div className="container">
          <div className="btn__wrapper">
            <button className="matches__btn">Schedule</button>
            <button className="matches__btn">Matches</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Schedule;
