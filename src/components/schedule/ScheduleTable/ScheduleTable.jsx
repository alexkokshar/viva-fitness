import React from 'react';

import './ScheduleTable.scss';

function ScheduleTable({ schedule }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th>Время</th>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {schedule.map((row) => (
            <tr key={row.id}>
              <td>
                <time dateTime={row.time.length === 5 ? row.time : `0${row.time}`}>{row.time}</time>
                <span>{row.place}</span>
              </td>
              <td>{row.mo}</td>
              <td>{row.tu}</td>
              <td>{row.we}</td>
              <td>{row.th}</td>
              <td>{row.fr}</td>
              <td>{row.sa}</td>
              <td>{row.su}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
