import TableItem from "../TableItem";

const Table = ({ groupData }) => {
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
  );
};
export default Table;
