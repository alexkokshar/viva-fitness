import React, { useState } from 'react';

import ScheduleGroupName from '../ScheduleGroupName/SheduleGroupName';
import ScheduleTabs from '../ScheduleTabs/ScheduleTabs';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import { adultKidsSchedule } from '../../../data/scheduleData';

import './ScheduleGroupAdultKids.scss';

function ScheduleGroupAdultKids() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="schedule__group">
      <ScheduleGroupName
        name="Расписание взрослых и детских групповых занятий"
        descr="Групповые занятия не входят в клубные карты и оплачиваются отдельно"
      />
      <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'schedule' && <ScheduleTable schedule={adultKidsSchedule} />}
      {activeTab === 'description' && (
        <DescriptionContainer>
          <ul>
            <li>
              <small className="descr-bold">КАРАТЭ </small>
              <div>
                Тренер: БОРОДИН ИГОРЬ (сертифицированный инструктор по каратэ-до 3 дан, мастер
                спорта) +7(952)052-55-33
              </div>
            </li>
            <li>
              <small className="descr-bold">БОКС </small>
              <div>
                Тренер: ПЛИГОВКА АЛЕКСАНДР (президент федерации профессионального бокса
                Калининргадской области, КМС) +7(906)237-85-25
              </div>
            </li>
            <li>
              <small className="descr-bold">ХУДОЖЕСТВЕННАЯ ГИМНАСТИКА </small>
              <div>
                Тренер: КОЗЛОВА ЛЮБОВЬ АНАТОЛЬЕВНА (мастер спорта России по акробатике,
                дипломированный тренер.) +7(4012)38-60-88
              </div>
            </li>
          </ul>
        </DescriptionContainer>
      )}
    </div>
  );
}

export default ScheduleGroupAdultKids;
