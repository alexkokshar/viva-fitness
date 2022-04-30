import React from 'react';

import './ScheduleGroupName.scss';

function SheduleGroupName({ name, descr }) {
  return (
    <>
      <div className="schedule__name">{name}</div>
      <div className="schedule__descr">{descr}</div>
    </>
  );
}

export default SheduleGroupName;
