import React, { useState } from 'react';

import ScheduleGroupName from '../ScheduleGroupName/SheduleGroupName';
import ScheduleTabs from '../ScheduleTabs/ScheduleTabs';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import { swimSchedule } from '../../../data/scheduleData';

import './ScheduleGroupSwim.scss';

function ScheduleGroupSwim() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="schedule__group">
      <ScheduleGroupName
        name="Расписание детских групповых занятий по плаванию"
        descr="Информация о датах записи во вкладке 'описание'"
      />
      <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'schedule' && <ScheduleTable schedule={swimSchedule} />}
      {activeTab === 'description' && (
        <DescriptionContainer>
          <div className="descr-bold">Продление действующих абонементов:</div>
          <ul>
            <li>с 20 по 25 число</li>
          </ul>
          <div className="descr-bold">
            Запись новых детей в порядке живой очереди строго в указанные даты:
          </div>
          <ul>
            <li>27 число - дети до 4 лет</li>
            <li>28 число - дети 5-7 лет</li>
            <li>29 число - дети 7-10 лет</li>
            <li>30 число - дети 11-16 лет</li>
          </ul>
          <div className="descr-bold">Режим работы отдела:</div>
          <ul>
            <li>Пн-пт с 9:00 до 21:00</li>
            <li>Сб-вс c 9:00 до 20:00</li>
          </ul>
          <div className="descr-bold">Телефон: 61-40-61</div>
        </DescriptionContainer>
      )}
    </div>
  );
}

export default ScheduleGroupSwim;
