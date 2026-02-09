import React from "react";

import TitleBackground from "../components/TitleBackground";
import TournamentsSelector from "../components/Tournaments/TournamentsSelector";
import Table from "../components/Tournaments/Table/index";
import RoundSelector from "../components/Tournaments/RoundSelector";
import Playoff from "../components/Tournaments/Playoff";

import { createTeamsById } from "../utils/Tournaments/normalize/createTeamsById";
import { normalizeTeams, normalizePlayoff, normalizeTable } from "../utils/Tournaments/normalize/index";
import { DATA_BASE_URL } from "../config/assets";

const TOURNAMENTS = {
  "La Liga": `${DATA_BASE_URL}/tournaments/laliga.json`,
  "UEFA Champions League": `${DATA_BASE_URL}/tournaments/ucl.json`,
  "Copa del Rey": `${DATA_BASE_URL}/tournaments/copa-del-rey.json`,
  "Spanish Supercup": `${DATA_BASE_URL}/tournaments/spanish-super-cup.json`,
  "UEFA Europa League": `${DATA_BASE_URL}/tournaments/europa-league.json`,
};

const TOURNAMENTS_META = {
  "La Liga": { title: "La Liga" },
  "UEFA Champions League": { title: "UEFA Champions League" },
  "Copa del Rey": { title: "Copa del Rey" },
  "Spanish Supercup": { title: "Spanish Supercup" },
  "UEFA Europa League": { title: "UEFA Europa League" },
};

const TEAMS = `${DATA_BASE_URL}/teams.json`;

const Tournaments = () => {
  const [teamsById, setTeamsById] = React.useState({});
  const [currentTournament, setCurrentTournament] = React.useState({});
  const [currentSeason, setCurrentSeason] = React.useState({});
  const [playoffData, setPlayoffData] = React.useState([]);
  const [selectedLeague, setSelectedLeague] = React.useState("La Liga");
  const [selectedSeason, setSelectedSeason] = React.useState("");
  const [selectedRound, setSelectedRound] = React.useState("Group stage");
  const [tournamentData, setTournamentData] = React.useState({});
  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch(TEAMS)
      .then((res) => res.json())
      .then((teams) => {
        setTeamsById(createTeamsById(teams));
      });
  }, []);

  React.useEffect(() => {
    const loadTournament = async () => {
      try {
        setLoading(true);

        const res = await fetch(TOURNAMENTS[selectedLeague]);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setTournamentData((prev) => ({
          ...prev,
          [selectedLeague]: data,
        }));
      } catch (e) {
        console.error("Failed to load tournament", e);
        setTournamentData({});
      } finally {
        setLoading(false);
      }
    };

    loadTournament();
  }, [selectedLeague]);

  const availableSeasons = React.useMemo(() => {
    const leagueData = tournamentData[selectedLeague];
    return leagueData?.seasons ? Object.keys(leagueData.seasons) : [];
  }, [tournamentData, selectedLeague]);

  const handleLeagueChange = (league) => {
    setSelectedLeague(league);
    setSelectedSeason("");
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

  const fetchTournamentData = React.useCallback(
    (league, seasonKey) => {
      const tournament = tournamentData[league];
      const season = tournament?.seasons?.[seasonKey];

      setCurrentTournament(tournament);
      setCurrentSeason(season || null);

      const normalizedPlayoff = normalizePlayoff(season?.stages);
      setPlayoffData(normalizedPlayoff);

      const normalizedTable = normalizeTable(season, teamsById);
      setTableData(normalizedTable);

      setSelectedRound(normalizedPlayoff.length > 0 ? "Playoff" : "Group stage");
    },
    [tournamentData, teamsById],
  );

  React.useEffect(() => {
    if (selectedLeague && selectedSeason) fetchTournamentData(selectedLeague, selectedSeason);
  }, [selectedLeague, selectedSeason, fetchTournamentData]);

  if (loading || !currentTournament || !currentSeason) {
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
          tournamentsData={TOURNAMENTS_META}
          availableSeasons={availableSeasons}
        />

        {loading && <div>Loading tournament...</div>}
        {!loading && currentTournament && currentSeason && (
          <>
            {hasLeague && !hasPlayoff && <Table teamsById={teamsById} tableData={tableData} />}
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
                          <Table key={group.groupName} teamsById={teamsById} tableData={groupTableData} mode='groups' />
                        </div>
                      );
                    })
                  ) : (
                    <Table teamsById={teamsById} tableData={tableData} mode='league' />
                  )
                ) : (
                  <Playoff playoffData={playoffData} teamsById={teamsById} />
                )}
              </>
            )}
            {hasPlayoff && !hasLeague && !hasGroupStage && <Playoff playoffData={playoffData} teamsById={teamsById} />}
          </>
        )}
      </div>
    </section>
  );
};

export default Tournaments;
