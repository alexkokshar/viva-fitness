import React from 'react';

import { Tab } from '../../UI/Tab';
import './ScheduleTabs.scss';

function ScheduleTabs({ activeTab, setActiveTab }) {
  return (
    <div className="schedule__tabs">
      <div className="schedule__tab">
        <Tab
          onClick={() => setActiveTab('schedule')}
          active={activeTab === 'schedule' ? true : false}
        >
          Расписание
        </Tab>
      </div>
      <div className="schedule__tab">
        <Tab
          onClick={() => setActiveTab('description')}
          active={activeTab === 'description' ? true : false}
        >
          Описание
        </Tab>
      </div>
    </div>
  );
}

export default ScheduleTabs;
