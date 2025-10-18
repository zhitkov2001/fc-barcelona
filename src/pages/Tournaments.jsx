import React from "react";

import TitleBackround from "../components/TitleBackground";
import TournamentsSelector from "../components/Tournaments/TournamentsSelector";
import Table from "../components/Tournaments/Table";
import RoundSelector from "../components/Tournaments/RoundSelector";
import Playoff from "../components/Tournaments/Playoff";
// import { addMatchWithStats } from "../utils/Tournaments/addMatchWithStats";

import UclData from "../data/tournaments/ucl.json";
import LaLigaData from "../data/tournaments/laliga.json";
import CdrData from "../data/tournaments/copa-del-rey.json";
import SscData from "../data/tournaments/spanish-super-cup.json";
import UelData from "../data/tournaments/europa-league.json";

const Tournaments = () => {
  const TournamentsData = {
    "La Liga": LaLigaData,
    "UEFA Champions League": UclData,
    "Copa Del Rey": CdrData,
    "Spanish Super Cup": SscData,
    "UEFA Europa League": UelData,
  };

  const [currentTournament, setCurrentTournament] = React.useState(null);
  const [currentSeason, setCurrentSeason] = React.useState(null);
  const [groupData, setGroupData] = React.useState([]);
  const [playoffData, setPlayoffData] = React.useState([]);
  const [selectedLeague, setSelectedLeague] = React.useState(
    "UEFA Champions League"
  );
  const [selectedSeason, setSelectedSeason] = React.useState("");
  const [selectedRound, setSelectedRound] = React.useState("Group stage");

  // const tournamentType = React.useMemo(() => {
  //   if (!currentSeason) return null;

  //   const hasPlayOff =
  //     currentSeason.playOff && currentSeason.playOff.length > 0;

  //   if (
  //     (selectedLeague === "Copa Del Rey" ||
  //       selectedLeague === "Spanish Super Cup") &&
  //     hasPlayOff
  //   ) {
  //     return "playoff_only";
  //   }

  //   // Для остальных турниров определяем по наличию групповой стадии
  //   const hasGroupStage = currentSeason.teams && currentSeason.teams.length > 0;

  //   if (hasGroupStage && hasPlayOff) return "group_and_playoff";
  //   if (hasGroupStage && !hasPlayOff) return "group_only";
  //   if (!hasGroupStage && hasPlayOff) return "playoff_only";

  //   return null;
  // }, [currentSeason, selectedLeague]);

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

  const handleRoundChange = (round) => {
    setSelectedRound(round);
  };

  React.useEffect(() => {
    const fetchTournamentData = (selectedLeague, selectedSeason) => {
      const tournament = TournamentsData[selectedLeague];
      const season = tournament?.seasons?.[selectedSeason];

      setCurrentTournament(tournament);
      setCurrentSeason(season || null);
      setGroupData(season?.teams || []);
      setPlayoffData(season?.playOff);
    };

    if (selectedLeague && selectedSeason) {
      fetchTournamentData(selectedLeague, selectedSeason);
    }
  }, [selectedLeague, selectedSeason]);

  React.useEffect(() => {
    const hasPlayoffData = Array.isArray(playoffData) && playoffData.length > 0;
    setSelectedRound(hasPlayoffData ? "Playoff" : "Group stage");
  }, [playoffData]);

  // console.log(playoffData);

  if (!currentTournament || !currentSeason) {
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
          <div>Loading tournament data...</div>
        </div>
      </section>
    );
  }

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
        {currentTournament.type === "championship" && (
          <>
            <RoundSelector
              selectedRound={selectedRound}
              onRoundChange={handleRoundChange}
            />
            {selectedRound === "Group stage" ? (
              <Table groupData={groupData} />
            ) : (
              <Playoff playoffData={playoffData} />
            )}
          </>
        )}

        {/* Групповая стадия */}
        {currentTournament.type === "league" && (
          <div className='group__container'>
            <Table groupData={groupData} />
          </div>
        )}

        {/* Плейофф стадия */}
        {currentTournament.type === "cup" && (
          <div className='playoff__container'>
            <Playoff playoffData={playoffData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tournaments;
