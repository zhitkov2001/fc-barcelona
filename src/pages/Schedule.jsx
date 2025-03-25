import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import matchData from "../assets/schedule";
import MatchItem from "../components/MatchItem";

function Schedule() {
  const monthKeys = Object.keys(matchData);

  return (
    <>
      <section className="schedule">
        <TitleBackround title="Barça Matches" />
        <div className="container">
          <div className="btn__wrapper">
            <button className="matches__btn">Schedule</button>
            <button className="matches__btn">Matches</button>
          </div>
          <ul className="match__list">
            {monthKeys.map((month) => (
              <div key={month} className="match__group">
                <h3 className="match-list__month">{month}</h3>
                {matchData[month].map((match) => (
                  <MatchItem key={match.id} {...match} />
                ))}
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Schedule;
