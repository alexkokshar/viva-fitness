import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../../components/UI/Container';
import TrainerCard from './TrainerCard/TrainerCard';
import { teamData } from '../../data/teamData';
import './Team.scss';

function Team() {
  return (
    <div className="team">
      <Container>
        <div className="team__inner">
          <h1 className="team__title">Команда VIVA</h1>
          <ul className="team__list">
            {teamData.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </ul>
        </div>
      </Container>
      <Outlet />
    </div>
  );
}

export default Team;
