import React, { useState } from 'react';

import ScheduleGroupName from '../ScheduleGroupName/SheduleGroupName';
import ScheduleTabs from '../ScheduleTabs/ScheduleTabs';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';

import { aquaSchedule } from '../../../data/scheduleData';

import './ScheduleGroupAqua.scss';

function ScheduleGroupAqua() {
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="schedule__group">
      <ScheduleGroupName
        name="Расписание групповых программ по аквааэробике"
        descr="Посещение от 14 лет"
      />
      <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'schedule' && <ScheduleTable schedule={aquaSchedule} />}
      {activeTab === 'description' && (
        <DescriptionContainer>
          <ul>
            <li>
              <small className="descr-bold">Aqua Tone </small>- силовой класс на мелкой части
              бассейна. Занятие проводится без использования поясов. Оборудование на усмотрение
              инструктора. Рекомендуем для новичков и не умеющих плавать
            </li>
            <li>
              <small className="descr-bold">Aqua Power </small>- силовой урок высокой интенсивности
              на все группы мышц, возможно использование различного оборудования.
            </li>
            <li>
              <small className="descr-bold">Aqua Interval </small>- тренировка, сочетающая в себе
              интервалы каридо- и силовой нагрузки, последовательно чередующиеся друг с другом.
              Способствует развитию аэробных и силовых возможностей, помогает укрепить все мышечные
              группы, сжечь лишние калории. Используется различное оборудование.
            </li>
            <li>
              <small className="descr-bold">Aqua Noodles </small>- тренировка с использованием одной
              или двух гибких палок «нудлс», чередование глубокой и мелкой воды. Занятия на развитие
              координационных способностей и силовой выносливости. Рекомендуем для подготовленных.
            </li>
            <li>
              <small className="descr-bold">Aqua MIX </small>- тренировка с использованием
              нескольких видов оборудования. Тренинг средней интенсивности, подходит для всех
              уровней подготовленности
            </li>
            <li>
              <small className="descr-bold">Aqua Classic </small>- урок не высокой интенсивности,
              подходит для любого уровня подготовленности, оборудование используется на усмотрение
              инструктора, основной инвентарь - пояс. Рекомендован для старшего зрелого возраста и
              для новичков.
            </li>
            <li>
              <small className="descr-bold">Aqua Dance </small>– танцевальная тренировка со
              специальным комплексом упражнений направленными на повышение тонуса, сопротивляемости
              всего организма и укреплению мышц. Подходит для любого уровня подготовки.
            </li>
            <li>
              <small className="descr-bold">Aqua коммерческая группа </small>- тренировка в формате
              секции, оплачивается отдельно. Подходит для любого уровня подготовки
            </li>
          </ul>
        </DescriptionContainer>
      )}
    </div>
  );
}

export default ScheduleGroupAqua;
