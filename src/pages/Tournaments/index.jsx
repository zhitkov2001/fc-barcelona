import React from "react";

import TitleBackround from "../../components/TitleBackground";
import Ucl from "./ucl/index";
import TableItem from "../../components/TableItem";
import { addMatchWithStats } from "../../utils/Tournaments/addMatchWithStats";

import UclData from "../../data/tournaments/ucl.json";
import LaLigaData from "../../data/tournaments/laliga.json";
import TournamentsSelector from "../../components/TournamentsSelector";

const Tournaments = () => {
  const TournamentsData = { UclData, LaLigaData };
  // const teams = TournamentsData.ucl.seasons["2025/26"].teams.sort(
  //   (a, b) => a.position - b.position
  // );

  // const [selectedLeague, setSelectedLeague] = React.useState("laliga");
  // const [selectedSeason, setSelectedSeason] = React.useState(0);
  // const [leagueDropdown, setLeagueDropdown] = React.useState(false);
  // const [seasonDropdown, setSeasonDropdown] = React.useState(false);
  // const [selectedRound, setSelectedRound] = React.useState("league");

  console.log(TournamentsData);

  // const leagueData = TournamentsData[selectedLeague];
  // const currentSeason = leagueData.seasons[selectedSeason];

  const selectedLeagueItems = [
    "laliga",
    "ucl",
    "copa-del-rey",
    "spanish-supercup",
    "europa-league",
  ];

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
        <TournamentsSelector />
      </div>
    </section>
  );
};

export default Tournaments;
