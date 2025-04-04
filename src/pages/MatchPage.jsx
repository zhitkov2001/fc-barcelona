import React from "react";
import { useLocation } from "react-router-dom";

const MatchPage = () => {
  const location = useLocation();
  const match = location.state;
  const ownerPlayersList = match?.owner?.players?.start;
  const guestPlayersList = match?.guest?.players?.start;
  const ownerSubtitutionsList = match?.owner?.players?.subtitution;
  const guestSubtitutionsList = match?.guest?.players?.subtitution;

  // console.log(match, "match");

  return (
    <div className="match__page">
      <div className="container">
        <div className="match__wrapper">
          <img
            src={`/img/Matches/${match.match_background}.webp`}
            alt={match.match_background}
            className="match-wrapper__background"
          />
          <div className="match__item">
            <div className="match-team__container">
              <div className="team-img__container">
                <img
                  className="team__logo"
                  src={`/img/Teams/${match.owner.img}.png`}
                  alt={match.owner.img}
                />
                <div className="team__title">{match.owner.title}</div>
              </div>
              {ownerPlayersList && ownerSubtitutionsList && (
                <ul className="team-info__list">
                  {Object.entries({
                    ...ownerPlayersList,
                    ...ownerSubtitutionsList,
                  })
                    // 1. Фильтрация игроков с валидными действиями
                    .filter(([_, player]) => {
                      if (!player.actions) return false;

                      const validActions = Object.values(player.actions).filter(
                        (action) =>
                          action?.img &&
                          action.img !== "subtitution" &&
                          action.minute
                      );

                      return validActions.length > 0;
                    })
                    // 2. Сортировка игроков по минимальной минуте
                    .sort((a, b) => {
                      const getFirstMinute = (player) => {
                        const minutes = Object.values(player.actions)
                          .filter((action) => action.img !== "subtitution")
                          .map((action) => parseInt(action.minute) || Infinity);
                        return Math.min(...minutes);
                      };
                      return getFirstMinute(a[1]) - getFirstMinute(b[1]);
                    })
                    // 3. Рендер только непустых элементов
                    .map(([playerId, player]) => {
                      const actions = Object.entries(player.actions)
                        .filter(
                          ([_, action]) =>
                            action?.img &&
                            action.img !== "subtitution" &&
                            action.minute
                        )
                        .sort(
                          (a, b) =>
                            (parseInt(a[1].minute) || 0) -
                            (parseInt(b[1].minute) || 0)
                        );

                      return (
                        <li key={playerId} className="team-info-list__item">
                          {actions.map(([actionId, action]) => (
                            <div key={actionId} className="action__container">
                              <img
                                className="action__img"
                                src={`/img/MatchAction/${action.img}.png`}
                                alt={action.img}
                                onError={(e) =>
                                  (e.target.style.display = "none")
                                }
                              />{" "}
                              {Array.isArray(action.minute) ||
                              typeof action.minute === "object" ? (
                                Object.values(action.minute).map((min, i) => (
                                  <span key={i} className="action__minute">
                                    {min}'
                                  </span>
                                ))
                              ) : (
                                <span className="action__minute">
                                  {action.minute}'
                                </span>
                              )}
                            </div>
                          ))}
                          <span className="action__player">
                            {player.surname}
                          </span>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div className="match__info">
              <p className="match-info__stage">{match.stageinfo.stage}</p>
              <img
                src={`/img/Competition/${match.competition}.png`}
                alt={match.competition}
                className={`match-info__competition ${
                  match.competition === "UCL" ? "white-logo" : ""
                }`}
              />
              <div className="match-score__container">
                <p className="team__score">{match.score.owner}</p>
                <span className="score__dash">-</span>
                <p className="team__score">{match.score.guest}</p>
              </div>
              <p className="match-info__stadium">{match.stageinfo.stadium}</p>
            </div>
            <div className="match-team__container">
              {guestPlayersList && guestSubtitutionsList && (
                <ul className="team-info__list">
                  {Object.entries({
                    ...guestPlayersList,
                    ...guestSubtitutionsList,
                  })
                    // 1. Фильтрация игроков с валидными действиями
                    .filter(([_, player]) => {
                      if (!player.actions) return false;

                      const validActions = Object.values(player.actions).filter(
                        (action) =>
                          action?.img &&
                          action.img !== "subtitution" &&
                          action.minute
                      );

                      return validActions.length > 0;
                    })
                    // 2. Сортировка игроков по минимальной минуте
                    .sort((a, b) => {
                      const getFirstMinute = (player) => {
                        const minutes = Object.values(player.actions)
                          .filter((action) => action.img !== "subtitution")
                          .map((action) => parseInt(action.minute) || Infinity);
                        return Math.min(...minutes);
                      };
                      return getFirstMinute(a[1]) - getFirstMinute(b[1]);
                    })
                    // 3. Рендер только непустых элементов
                    .map(([playerId, player]) => {
                      const actions = Object.entries(player.actions)
                        .filter(
                          ([_, action]) =>
                            action?.img &&
                            action.img !== "subtitution" &&
                            action.minute
                        )
                        .sort(
                          (a, b) =>
                            (parseInt(a[1].minute) || 0) -
                            (parseInt(b[1].minute) || 0)
                        );

                      return (
                        <li key={playerId} className="team-info-list__item">
                          {actions.map(([actionId, action]) => (
                            <div key={actionId} className="action__container">
                              <img
                                className="action__img"
                                src={`/img/MatchAction/${action.img}.png`}
                                alt={action.img}
                                onError={(e) =>
                                  (e.target.style.display = "none")
                                }
                              />{" "}
                              {Array.isArray(action.minute) ||
                              typeof action.minute === "object" ? (
                                Object.values(action.minute).map((min, i) => (
                                  <span key={i} className="action__minute">
                                    {min}'
                                  </span>
                                ))
                              ) : (
                                <span className="action__minute">
                                  {action.minute}'
                                </span>
                              )}
                            </div>
                          ))}
                          <span className="action__player">
                            {player.surname}
                          </span>
                        </li>
                      );
                    })}
                </ul>
              )}
              <div className="team-img__container">
                <img
                  className="team__logo"
                  src={`/img/Teams/${match.guest.img}.png`}
                  alt={match.guest.title}
                />
                <div className="team__title">{match.guest.title}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="match-info__container">
          <h2 className="match-info__title">Starting line up</h2>
          <div className="lineup__container">
            <div className="lineup__wrapper">
              <h3 className="lineup__title">{match.owner.title}</h3>
              <ul className="lineup__list">
                {ownerPlayersList
                  ? Object.entries(ownerPlayersList).map(([key, player]) => (
                      <li key={key} className="lineup__item">
                        <p className="lineup-player__number">{player.number}</p>
                        <div className="lineup-player-img__container">
                          <img
                            className="lineup-player__img"
                            src={
                              player.img
                                ? `/img/Players/30x30/${player.img}.png`
                                : "/img/Players/30x30/Noname.png"
                            }
                            alt={player.img ? player.surname : "Noname"}
                          />
                        </div>
                        <div className="luneup-player__info">
                          <p className="lineup-player__name">
                            {player.name + " " + player.surname}
                          </p>
                          <p className="lineup-player__position">
                            {player.position}
                          </p>
                        </div>
                        <ul className="player-action__list">
                          {player.actions ? (
                            Object.entries(player.actions).map(
                              ([key, action]) => (
                                <li key={key} className="player-action__item">
                                  <img
                                    className="player-action__img"
                                    src={`/img/MatchAction/${action.img}.png`}
                                    alt={`${action.img}`}
                                  />
                                  {action.playerIn ? (
                                    <p className="player-action__subtitle">
                                      {action.minute +
                                        "'" +
                                        " " +
                                        action.playerIn}
                                    </p>
                                  ) : (
                                    <p className="player-action__subtitle">
                                      {action.minute + "' "}
                                    </p>
                                  )}
                                </li>
                              )
                            )
                          ) : (
                            <></>
                          )}
                        </ul>
                      </li>
                    ))
                  : null}
                <h4 className="lineup__subtitle">Subtitution</h4>
                {ownerPlayersList
                  ? Object.entries(ownerPlayersList).map(([key, player]) => (
                      <li key={key} className="lineup__item">
                        <p className="lineup-player__number">{player.number}</p>
                        <div className="lineup-player-img__container">
                          <img
                            className="lineup-player__img"
                            src={
                              player.img
                                ? `/img/Players/30x30/${player.img}.png`
                                : "/img/Players/30x30/Noname.png"
                            }
                            alt={player.img ? player.surname : "Noname"}
                          />
                        </div>
                        <div className="luneup-player__info">
                          <p className="lineup-player__name">
                            {player.name + " " + player.surname}
                          </p>
                          <p className="lineup-player__position">
                            {player.position}
                          </p>
                        </div>
                        <ul className="player-action__list">
                          {player.actions ? (
                            Object.entries(player.actions).map(
                              ([key, action]) => (
                                <li key={key} className="player-action__item">
                                  <img
                                    className="player-action__img"
                                    src={`/img/MatchAction/${action.img}.png`}
                                    alt={`${action.img}`}
                                  />
                                  {action.playerIn ? (
                                    <p className="player-action__subtitle">
                                      {action.minute +
                                        "'" +
                                        " " +
                                        action.playerIn}
                                    </p>
                                  ) : (
                                    <p className="player-action__subtitle">
                                      {action.minute + "' "}
                                    </p>
                                  )}
                                </li>
                              )
                            )
                          ) : (
                            <></>
                          )}
                        </ul>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="lineup__wrapper">
              <h3 className="lineup__title">{match.guest.title}</h3>
              <ul className="lineup__list">
                {guestPlayersList
                  ? Object.entries(guestPlayersList).map(([key, player]) => (
                      <li key={key} className="lineup__item">
                        <p className="lineup-player__number">{player.number}</p>
                        <div className="lineup-player-img__container">
                          <img
                            className="lineup-player__img"
                            src={
                              player.img
                                ? `/img/Players/30x30/${player.img}.png`
                                : "/img/Players/30x30/Noname.png"
                            }
                            alt={player.img ? player.surname : "Noname"}
                          />
                        </div>
                        <div className="luneup-player__info">
                          <p className="lineup-player__name">
                            {player.name + " " + player.surname}
                          </p>
                          <p className="lineup-player__position">
                            {player.position}
                          </p>
                        </div>
                        <ul className="player-action__list">
                          {player.actions ? (
                            Object.entries(player.actions).map(
                              ([key, action]) => (
                                <li key={key} className="player-action__item">
                                  <img
                                    className="player-action__img"
                                    src={`/img/MatchAction/${action.img}.png`}
                                    alt={`${action.img}`}
                                  />
                                  {action.playerIn ? (
                                    <p className="player-action__subtitle">
                                      {action.minute +
                                        "'" +
                                        " " +
                                        action.playerIn}
                                    </p>
                                  ) : (
                                    <p className="player-action__subtitle">
                                      {action.minute + "' "}
                                    </p>
                                  )}
                                </li>
                              )
                            )
                          ) : (
                            <></>
                          )}
                        </ul>
                      </li>
                    ))
                  : null}
                <h4 className="lineup__subtitle">Subtitution</h4>
                {guestSubtitutionsList
                  ? Object.entries(guestSubtitutionsList).map(
                      ([key, player]) => (
                        <li key={key} className="lineup__item">
                          <p className="lineup-player__number">
                            {player.number}
                          </p>
                          <div className="lineup-player-img__container">
                            <img
                              className="lineup-player__img"
                              src={
                                player.img
                                  ? `/img/Players/30x30/${player.img}.png`
                                  : "/img/Players/30x30/Noname.png"
                              }
                              alt={player.img ? player.surname : "Noname"}
                            />
                          </div>
                          <div className="luneup-player__info">
                            <p className="lineup-player__name">
                              {player.name + " " + player.surname}
                            </p>
                            <p className="lineup-player__position">
                              {player.position}
                            </p>
                          </div>
                          <ul className="player-action__list">
                            {player.actions ? (
                              Object.entries(player.actions).map(
                                ([key, action]) => (
                                  <li key={key} className="player-action__item">
                                    <img
                                      className="player-action__img"
                                      src={`/img/MatchAction/${action.img}.png`}
                                      alt={`${action.img}`}
                                    />
                                    {action.playerIn ? (
                                      <p className="player-action__subtitle">
                                        {action.minute +
                                          "'" +
                                          " " +
                                          action.playerIn}
                                      </p>
                                    ) : (
                                      <p className="player-action__subtitle">
                                        {action.minute + "' "}
                                      </p>
                                    )}
                                  </li>
                                )
                              )
                            ) : (
                              <></>
                            )}
                          </ul>
                        </li>
                      )
                    )
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
