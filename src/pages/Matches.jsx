import React from "react";
import TitleBackground from "../components/TitleBackground";
import MatchItem from "../components/Matches/MatchItem";
import { DATA_BASE_URL } from "../config/assets";

function Matches() {
  const [activeBtn, setActiveBtn] = React.useState("Matches");
  const [matchesData, setMatchesData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const MATCHES_URLS = {
    Matches: `${DATA_BASE_URL}/matches/results.json`,
    Schedule: `${DATA_BASE_URL}/matches/schedule.json`,
  };

  React.useEffect(() => {
    const loadMatches = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(MATCHES_URLS[activeBtn]);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setMatchesData(data);
      } catch (e) {
        console.error("Failed to load matches", e);
        setMatchesData({});
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, [activeBtn]);

  const monthKeys = Object.keys(matchesData);

  return (
    <section className='matches'>
      <TitleBackground title='Barça Matches' />
      <div className='container'>
        <div className='btn__wrapper'>
          {["Schedule", "Matches"].map((value) => (
            <button
              key={value}
              className={activeBtn === value ? "matches__btn active" : "matches__btn"}
              onClick={() => setActiveBtn(value)}
            >
              {value}
            </button>
          ))}
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Failed to load matches</p>}

        {!loading && !error && (
          <ul className='match__list'>
            {monthKeys.map((month) => (
              <div key={month} className='match__group'>
                <h3 className='match-list__month'>{month}</h3>
                {matchesData[month]?.map((match) => (
                  <MatchItem key={match.id} {...match} />
                ))}
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Matches;
