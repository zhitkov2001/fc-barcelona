import React from "react";

import TitleBackround from "../../components/TitleBackground";
import Ucl from "./ucl/index";
import TableItem from "../../components/TableItem";
import { addMatchWithStats } from "../../utils/Tournaments/addMatchWithStats";

import UclData from "../../data/tournaments/ucl.json";
import LaLigaData from "../../data/tournaments/laliga.json";
import CdrData from "../../data/tournaments/copa-del-rey.json";
import TournamentsSelector from "../../components/TournamentsSelector";

const Tournaments = () => {
  const TournamentsData = {
    "La Liga": LaLigaData,
    "UEFA Champions League": UclData,
    "Copa Del Rey": CdrData,
  };

  const [currentTournament, setCurrentTournament] = React.useState(null);
  const [currentSeason, setCurrentSeason] = React.useState(null);
  const [groupData, setGroupData] = React.useState(null || []);
  const [selectedLeague, setSelectedLeague] = React.useState("La Liga");
  const [selectedSeason, setSelectedSeason] = React.useState("");

  // console.log(currentTournament);

  const availableSeasons = React.useMemo(() => {
    const leagueData = TournamentsData[selectedLeague];
    if (leagueData && leagueData.seasons) {
      return Object.keys(leagueData.seasons);
    }
    return [];
  }, [selectedLeague]);

  React.useEffect(() => {
    if (
      availableSeasons.length > 0 &&
      !availableSeasons.includes(selectedSeason)
    ) {
      setSelectedSeason(availableSeasons[0]);
    }
  }, [availableSeasons, selectedSeason]);

  const handleLeagueChange = (league) => {
    setSelectedLeague(league);
  };

  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
  };

  const handleReset = () => {
    setSelectedLeague("La Liga");
    if (availableSeasons.length > 0) {
      setSelectedSeason(availableSeasons[0]);
    }
  };

  React.useEffect(() => {
    const fetchTournamentData = (selectedLeague, selectedSeason) => {
      const tournament = TournamentsData[selectedLeague];
      const season = tournament?.seasons?.[selectedSeason];

      setCurrentTournament(tournament);
      setCurrentSeason(season);
      setGroupData(season?.teams || []);
    };

    if (selectedLeague && selectedSeason) {
      fetchTournamentData(selectedLeague, selectedSeason);
    }
  }, [selectedLeague, selectedSeason]);

  const tableHeadItems = [
    "Position",
    "Team",
    "Points",
    "Matches",
    "Wins",
    "Draws",
    "Losses",
    "Scored",
    "Missed",
    "Difference",
  ];

  return (
    <section className='tournaments'>
      <TitleBackround title='Tournaments' />
      <div className='container'>
        <TournamentsSelector
          selectedLeague={selectedLeague}
          selectedSeason={selectedSeason}
          onLeagueChange={handleLeagueChange}
          onSeasonChange={handleSeasonChange}
          onReset={handleReset}
          tournamentsData={TournamentsData}
          availableSeasons={availableSeasons}
        />
        <div className='group__container'>
          <table className='standings__table'>
            <thead className='standings-table__head'>
              <tr className='table-head__row'>
                {tableHeadItems.map((item, index) => (
                  <td key={index} className='table-head__item'>
                    {item}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className='standings-table__body'>
              {groupData.map((team) => (
                <TableItem key={`${team.id}-${team.title}`} {...team} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
