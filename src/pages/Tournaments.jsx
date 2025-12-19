import React from "react";

import TitleBackground from "../components/TitleBackground";
import TournamentsSelector from "../components/Tournaments/TournamentsSelector";
import Table from "../components/Tournaments/Table/index";
import RoundSelector from "../components/Tournaments/RoundSelector";
import Playoff from "../components/Tournaments/Playoff";

import UclData from "../data/tournaments/ucl.json";
import LaLigaData from "../data/tournaments/laliga.json";
import CdrData from "../data/tournaments/copa-del-rey.json";
import SscData from "../data/tournaments/spanish-super-cup.json";
import UelData from "../data/tournaments/europa-league.json";

import { normalizeTeams, normalizePlayoff, normalizeTable } from "../utils/Tournaments/normalize/index";

const Tournaments = () => {
  // function sortStringsAlphabetically(strings) {
  //   return strings.sort();
  // }

  // const teams = [
  //   "Deportivo",
  //   "Mallorca",
  //   "Eibar",
  //   "Elche",
  //   "Guadalajara",
  //   "Barcelona",
  //   "Eldense",
  //   "Sociedad",
  //   "SportingGijon",
  //   "Valencia",
  //   "CulturalLeonesa",
  //   "Levante",
  //   "Albacete",
  //   "CeltaVigo",
  //   "AtleticoBaleares",
  //   "AtleticoMadrid",
  //   "Huesca",
  //   "Osasuna",
  //   "Racing",
  //   "Villarreal",
  //   "Alaves",
  //   "Sevilla",
  //   "Talavera",
  //   "RealMadrid",
  //   "Burgos",
  //   "Getafe",
  //   "Ourense",
  //   "AthleticBilbao",
  //   "RealMurcia",
  //   "RealBetis",
  //   "Granada",
  //   "RayoVallecano",
  //   // "Olympiacos",
  //   // "Kairat",
  //   // "Benfica",
  //   // "Ajax",
  // ];
  // const sortedTeams = sortStringsAlphabetically(teams);
  // console.log(sortedTeams);

  const TournamentsData = {
    "La Liga": LaLigaData,
    "UEFA Champions League": UclData,
    "Copa del Rey": CdrData,
    "Spanish Supercup": SscData,
    "UEFA Europa League": UelData,
  };

  const [currentTournament, setCurrentTournament] = React.useState(null);
  const [currentSeason, setCurrentSeason] = React.useState(null);
  const [teamsList, setTeamsList] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const [playoffData, setPlayoffData] = React.useState([]);
  const [selectedLeague, setSelectedLeague] = React.useState("La Liga");
  const [selectedSeason, setSelectedSeason] = React.useState("");
  const [selectedRound, setSelectedRound] = React.useState("Group stage");

  const availableSeasons = React.useMemo(() => {
    const leagueData = TournamentsData[selectedLeague];
    return leagueData?.seasons ? Object.keys(leagueData.seasons) : [];
  }, [selectedLeague]);

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
    if (availableSeasons.length > 0 && !availableSeasons.includes(selectedSeason)) {
      setSelectedSeason(availableSeasons[0]);
    }
  }, [availableSeasons, selectedSeason]);

  const fetchTournamentData = (league, seasonKey) => {
    const tournament = TournamentsData[league];
    const season = tournament?.seasons?.[seasonKey];

    setCurrentTournament(tournament);
    setCurrentSeason(season || null);

    const normalizedTeams = normalizeTeams(season?.teams, season?.stages);
    setTeamsList(normalizedTeams);

    const normalizedPlayoff = normalizePlayoff(season?.stages);
    setPlayoffData(normalizedPlayoff);

    const normalizedTable = normalizeTable(season);
    setTableData(normalizedTable);

    setSelectedRound(normalizedPlayoff.length > 0 ? "Playoff" : "Group stage");
  };

  React.useEffect(() => {
    if (selectedLeague && selectedSeason) fetchTournamentData(selectedLeague, selectedSeason);
  }, [selectedLeague, selectedSeason]);

  if (!currentTournament || !currentSeason) {
    return <div>Loading...</div>;
  }

  const stages = currentSeason.stages || {};
  const hasLeague = Boolean(stages.league);
  const hasGroupStage = Boolean(stages.groupStage);
  const hasPlayoff = Boolean(stages.playoff);

  const oldTableData = stages?.groupStage;

  return (
    <section className='tournaments'>
      <TitleBackground title='Tournaments' />
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

        {hasLeague && !hasPlayoff && <Table teamsList={teamsList} tableData={tableData} />}

        {hasPlayoff && (hasLeague || hasGroupStage) && (
          <>
            <RoundSelector selectedRound={selectedRound} onRoundChange={handleRoundChange} />
            {selectedRound === "Group stage" || selectedRound === "League" ? (
              hasGroupStage ? (
                oldTableData.map((group) => {
                  const groupTableData = tableData.filter((team) => team.groupName === group.groupName);

                  return (
                    <div className='table__container' key={group.groupName}>
                      <h5 className='group-stage__title'>{`Group ${group.groupName}`}</h5>
                      <Table key={group.groupName} teamsList={teamsList} tableData={groupTableData} mode='groups' />
                    </div>
                  );
                })
              ) : (
                <Table teamsList={teamsList} tableData={tableData} mode='league' />
              )
            ) : (
              <Playoff playoffData={playoffData} teamsData={teamsList} />
            )}
          </>
        )}

        {hasPlayoff && !hasLeague && !hasGroupStage && <Playoff playoffData={playoffData} teamsData={teamsList} />}
      </div>
    </section>
  );
};

export default Tournaments;
