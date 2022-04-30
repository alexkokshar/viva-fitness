import React from 'react';

import { Container } from '../../components/UI/Container';
import ScheduleGroup from '../../components/schedule/ScheduleGroup/ScheduleGroup';
import ScheduleGroupAqua from '../../components/schedule/ScheduleGroupAqua/ScheduleGroupAqua';
import ScheduleGroupTeens from '../../components/schedule/ScheduleGroupTeens/ScheduleGroupTeens';
import ScheduleGroupAdultKids from '../../components/schedule/ScheduleGroupAdultKids/ScheduleGroupAdultKids';
import ScheduleGroupSwim from '../../components/schedule/ScheduleGroupSwim/ScheduleGroupSwim';
import './Schedule.scss';

function Schedule() {
  return (
    <section className="schedule">
      <Container>
        <div className="schedule__inner">
          <h1 className="schedule__title">Расписание</h1>
          <ScheduleGroup />
          <ScheduleGroupAqua />
          <ScheduleGroupTeens />
          <ScheduleGroupAdultKids />
          <ScheduleGroupSwim />
        </div>
      </Container>
    </section>
  );
}

export default Schedule;
