import React from "react";
import style from "./tableItem.module.scss";

function TableItem(team) {
  const getStatus = () => {
    if (team.isDowngraded) return "#dc3545";
    if (team.isQualified === "blue") return "#141e5e";
    if (team.isQualified === "orange") return "#ff9100";
    if (team.isQualified === "green") return "#28a745";
    return "transparent";
  };

  return (
    <tr
      className={style.tableItem}
      style={{ "--row-accent-color": getStatus() }}
    >
      <th className={style.position}>{team.position}</th>
      <th className={style.teamContainer}>
        {team.image === "" || !team.image ? (
          <div className={style.teamImgContainer}>
            <img
              src={`../img/Teams/default2.png`}
              alt={team.title}
              className={style.teamImg}
            />
          </div>
        ) : (
          <div className={style.teamImgContainer}>
            <img
              src={`../img/Teams/${team.image}.png`}
              alt={team.title}
              className={style.teamImg}
            />
          </div>
        )}
        <p className={style.teamTitle}>{team.title}</p>
      </th>
      <th className={style.points}>
        <b>{team.points}</b>
      </th>
      <th className={style.stats}>{team.matches}</th>
      <th className={style.stats}>{team.wins}</th>
      <th className={style.stats}>{team.draws}</th>
      <th className={style.stats}>{team.losses}</th>
      <th className={style.stats}>{team.scored}</th>
      <th className={style.stats}>{team.missed}</th>
      <th className={style.stats}>{team.scored - team.missed}</th>
    </tr>
  );
}

export default TableItem;
