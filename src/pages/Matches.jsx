import React from "react";

import TitleBackround from "../components/TitleBackground";
import resultsData from "../data/matches/results";
import scheduleData from "../data/matches/schedule";
import MatchItem from "../components/Matches/MatchItem/index";

function Matches() {
  const [activeBtn, setActiveBtn] = React.useState("Matches");
  const btnData = ["Schedule", "Matches"];
  const currentData = activeBtn === "Matches" ? resultsData : scheduleData;
  const monthKeys = Object.keys(currentData || {});

  return (
    <section className='matches'>
      <TitleBackround title='Barça Matches' />
      <div className='container'>
        <div className='btn__wrapper'>
          {btnData.map((value) => {
            return (
              <button
                key={value}
                className={activeBtn === value ? "matches__btn active" : "matches__btn"}
                onClick={() => setActiveBtn(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
        <ul className='match__list'>
          {monthKeys.map((month) => (
            <div key={month} className='match__group'>
              <h3 className='match-list__month'>{month}</h3>
              {currentData[month]?.map((match) => (
                <MatchItem key={match.id} {...match} />
              ))}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Matches;
