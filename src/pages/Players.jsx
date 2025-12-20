import React from "react";

import PlayerItem from "../components/PlayerItem";
// import PlayersData from "../data/players.json";
import TitleBackground from "../components/TitleBackground";

const DATA_BASE_URL = "https://raw.githubusercontent.com/zhitkov2001/fc-barcelona-data/main/data/";
function Players() {
  const firstTeamNav = ["goalkeepers", "defenders", "midfielders", "forwards", "coach stuff"];

  const [playersData, setPlayersData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${DATA_BASE_URL}/players.json`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setPlayersData(data);
      } catch (e) {
        console.error("Failed to load players", e);
        setError("Failed to load players");
        setPlayersData({});
      } finally {
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  const playersKeys = React.useMemo(() => Object.keys(playersData), [playersData]);

  if (loading) {
    return <div>Loading players...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className='first__team'>
        <TitleBackground title='FC Barcelona First Team' />
        <ul className='players__nav'>
          {firstTeamNav.map((id) => (
            <li className='players__nav-item' key={id}>
              <button className='nav__btn' type='button'>
                {id}
              </button>
            </li>
          ))}
        </ul>
        <div className='players__container'>
          <ul className='players'>
            {playersKeys.map((section) => (
              <div key={section} className='players__group'>
                <h3 className='players__position'>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                <div className='players__group--flex'>
                  {playersData[section].map((player) => (
                    <PlayerItem key={player.id} {...player} />
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Players;
