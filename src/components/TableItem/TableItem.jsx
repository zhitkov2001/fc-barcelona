import React from "react";
import style from "./tableItem.module.scss";

function TableItem(team) {
  return (
    <tr className={style.tableItem}>
      <th className={style.position}>{team.position}</th>
      <th className={style.teamContainer}>
        <div className={style.teamImgContainer}>
          <img
            src={`../img/Teams/${team.image}.png`}
            alt={team.title}
            className={style.teamImg}
          />
        </div>
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
