import React from "react";

import TitleBackround from "../components/TitleBackground/TitleBackground";
import StandingsData from "../assets/standings.json";
import TableItem from "../components/TableItem/TableItem";
import PlayOffItem from "../components/PlayOffItem/";

const Standings = () => {
  const [selectedLeague, setSelectedLeague] = React.useState("laliga");
  const [selectedSeason, setSelectedSeason] = React.useState(0);
  const [leagueDropdown, setLeagueDropdown] = React.useState(false);
  const [seasonDropdown, setSeasonDropdown] = React.useState(false);
  const [selectedRound, setSelectedRound] = React.useState("league");

  const leagueData = StandingsData[selectedLeague];
  const currentSeason = leagueData.seasons[selectedSeason];
  const leagues = Object.keys(StandingsData);

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

  const toggleLeagueDropdown = () => {
    setLeagueDropdown(!leagueDropdown);
    setSeasonDropdown(false);
  };

  const toggleSeasonDropdown = () => {
    setSeasonDropdown(!seasonDropdown);
    setLeagueDropdown(false);
  };

  const selectLeague = (league) => {
    setSelectedLeague(league);
    setSelectedSeason(0);
    setSelectedRound("league");
    setLeagueDropdown(false);
  };

  const selectSeason = (index) => {
    setSelectedSeason(index);
    setSelectedRound("league");
    setSeasonDropdown(false);
  };

  const selectRound = (round) => {
    setSelectedRound(round);
  };

  const getCurrentRoundTitle = () => {
    if (selectedRound === "league") {
      return "Group Stage";
    } else if (currentSeason.playOff && currentSeason.playOff[selectedRound]) {
      return (
        currentSeason.playOff[selectedRound].title.charAt(0).toUpperCase() +
        currentSeason.playOff[selectedRound].title.slice(1)
      );
    }
    return "Group Stage";
  };

  const transformToPlayoffMatches = (playOffData) => {
    if (!playOffData || !playOffData.teams) return [];

    return Object.entries(playOffData.teams)
      .map(([coupleName, matches]) => {
        const firstMatch = matches[0];
        const hasSecondMatch = matches.length > 1;
        const secondMatch = hasSecondMatch ? matches[1] : null;

        const homeAggregate = hasSecondMatch
          ? firstMatch.ownerScore + secondMatch.guestScore
          : firstMatch.ownerScore;

        const awayAggregate = hasSecondMatch
          ? firstMatch.guestScore + secondMatch.ownerScore
          : firstMatch.guestScore;

        const penalty = hasSecondMatch
          ? secondMatch?.penalty
          : firstMatch?.penalty;

        const overtime = hasSecondMatch
          ? secondMatch?.overtime
          : firstMatch?.overtime;

        return {
          coupleName,
          title: `${firstMatch.ownerTitle} vs ${firstMatch.guestTitle}`,
          homeAggregate,
          awayAggregate,
          isDraw: homeAggregate === awayAggregate,
          overtime,
          penalty,
          homeTeam: {
            name: firstMatch.ownerTitle,
            img: firstMatch.ownerImg,
          },
          awayTeam: {
            name: firstMatch.guestTitle,
            img: firstMatch.guestImg,
          },
          matches: matches.map((match) => ({
            id: match.id,
            homeTeam: {
              name: match.ownerTitle,
              img: match.ownerImg,
              score: match.ownerScore,
            },
            awayTeam: {
              name: match.guestTitle,
              img: match.guestImg,
              score: match.guestScore,
            },
          })),
        };
      })
      .filter(Boolean);
  };

  return (
    <section className="standings">
      <TitleBackround title="Standings" />
      <div className="container">
        <div className="standings-selector___container">
          {/* League Selector */}
          <div className="league__selector">
            <div className="league__dropdown">
              <div
                onClick={() => toggleLeagueDropdown()}
                className={`dropdown__selected ${
                  leagueDropdown ? "active" : ""
                }`}
              >
                <img
                  src={`../img/Competition/${leagueData.img}.png`}
                  alt={leagueData.title}
                  className="standings-competition__img"
                />
                <span
                  className={`dropdown__arrow ${
                    leagueDropdown ? "active" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {leagueDropdown && (
                <div className="dropdown__options">
                  {leagues.map((league) => {
                    const leagueInfo = StandingsData[league];
                    return (
                      <div
                        key={league}
                        className={`dropdown__option ${
                          selectedLeague === league ? "active" : ""
                        }`}
                        onClick={() => selectLeague(league)}
                      >
                        <img
                          src={`../img/Competition/${leagueInfo.img}.png`}
                          alt={leagueInfo.title}
                          className="standings-competition__img"
                        />
                        <span className="standings-competition__title">
                          {leagueInfo.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {/* //League Selector  */}

          {/* Season Selector */}
          <div className="season__selector">
            <div className="season__dropdown">
              <div
                onClick={() => toggleSeasonDropdown()}
                className={`dropdown__selected ${
                  seasonDropdown ? "active" : ""
                }`}
              >
                {currentSeason.year}
                <span
                  className={`dropdown__arrow ${
                    seasonDropdown ? "active" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {seasonDropdown && (
                <div className="dropdown__options">
                  {leagueData.seasons.map((season, index) => (
                    <div
                      key={season.year}
                      className={`dropdown__option ${
                        selectedSeason === index ? "active" : ""
                      }`}
                      onClick={() => selectSeason(index)}
                    >
                      {season.year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* //Season Selector */}

          <div className="standings__info">
            <p className="standings-competition__info">
              <b>
                {leagueData.title} {currentSeason.year}
              </b>{" "}
              season
            </p>
            <p className="standings-date__update">
              Last updated: 02.06.25 14:40 PM
            </p>
          </div>
        </div>

        {/* Round Navigation */}
        {currentSeason.playOff && (
          <div className="round-navigation">
            <button
              className={`round-btn ${
                selectedRound === "league" ? "active" : ""
              }`}
              onClick={() => selectRound("league")}
            >
              Group Stage
            </button>
            {currentSeason.playOff.map((round, index) => (
              <button
                key={index}
                className={`round-btn ${
                  selectedRound === index ? "active" : ""
                }`}
                onClick={() => selectRound(index)}
              >
                {round.title.charAt(0).toUpperCase() + round.title.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="table__container">
          {selectedRound === "league" ? (
            <table className="standings__table">
              <thead className="standings-table__head">
                <tr className="table-head__row">
                  {tableHeadItems.map((item, index) => (
                    <td key={index} className="table-head__item">
                      {item}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="standings-table__body">
                {currentSeason.teams.map((team) => (
                  <TableItem key={`${team.id}-${team.title}`} {...team} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="playoff-matches">
              <h3 className="playoff-matches__title">
                {getCurrentRoundTitle()}
              </h3>
              <div className="playoff-matches__container">
                {transformToPlayoffMatches(
                  currentSeason.playOff[selectedRound]
                ).map((couple, index) => (
                  <div key={index} className="playoff-couple">
                    <div className="playoff-couple__header">
                      <div className="team-with-logo">
                        <img
                          className="team-logo"
                          src={`../img/teams/${couple.homeTeam.img}.png`}
                          alt={couple.homeTeam.name}
                        />
                        <span className="team-title">
                          {couple.homeTeam.name}
                        </span>
                      </div>
                      <div className="score-container">
                        <span className="aggregate-score">{`${couple.homeAggregate} - ${couple.awayAggregate}`}</span>
                        <p className="score-info">
                          {couple.isDraw &&
                            couple.penalty &&
                            ` (penalty: ${couple.penalty})`}
                        </p>
                        <p className="score-info">
                          {couple.overtime && ` (O.T)`}
                        </p>
                      </div>
                      <div className="team-with-logo">
                        <img
                          className="team-logo"
                          src={`../img/teams/${couple.awayTeam.img}.png`}
                          alt={couple.awayTeam.name}
                        />
                        <span className="team-title">
                          {couple.awayTeam.name}
                        </span>
                      </div>
                    </div>
                    <div className="playoff-matches-list">
                      {couple.matches.map((match) => (
                        <PlayOffItem key={match.id} match={match} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Standings;
