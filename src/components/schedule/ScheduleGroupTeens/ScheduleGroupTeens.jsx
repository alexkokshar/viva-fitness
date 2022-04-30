import React, { useState } from 'react';

import ScheduleGroupName from '../ScheduleGroupName/SheduleGroupName';
import ScheduleTabs from '../ScheduleTabs/ScheduleTabs';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import { teensSchedule } from '../../../data/scheduleData';

import './ScheduleGroupTeens.scss';

function ScheduleGroupTeens() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="schedule__group">
      <ScheduleGroupName name="Расписание занятий по карте TEEN'S" descr="Посещение 12-16 лет" />
      <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'schedule' && <ScheduleTable schedule={teensSchedule} />}
      {activeTab === 'description' && (
        <DescriptionContainer>
          <ul>
            <li>
              <small className="descr-bold">SPARTACUS </small>– функциональная тренировка с
              использованием малого оборудования (эспандеры, утяжелённые мячи, облегченные штанги)
              или с собственным весом.
            </li>
            <li>
              <small className="descr-bold">TEEN'S SYNERGY </small>– круговая тренировка в
              тренажерном зале на многофункциональной раме «SYNERGY». Прекрасно прорабатывает все
              мышечные группы, проводится в достаточно интенсивном темпе с небольшим отдыхом между
              кругами.
            </li>
            <li>
              <small className="descr-bold">UNIVERSAL SHAPE </small>– урок-микс из классической
              аэробной разминки и упражнений силового и функционального характера. Этот класс
              позволяет развить природную пластику тела, а также совершенствованию двигательных
              качеств и координационных способностей.
            </li>
            <li>
              <small className="descr-bold">TEEN'S POOL </small>– тренировка в бассейне, в т.ч
              обучение плаванию, отработка техники, способствующая совершенствованию координационных
              способностей и общему оздоровлению.
            </li>
          </ul>
        </DescriptionContainer>
      )}
    </div>
  );
}

export default ScheduleGroupTeens;
