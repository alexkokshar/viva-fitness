import React from 'react';
import { Link } from 'react-router-dom';

import './TrainerCard.scss';

const noScroll = () => {
  document.documentElement.classList.add('no-scroll');
};

function TrainerCard({ trainer }) {
  const { id, name, position, img } = trainer;
  return (
    <li className="trainer" onClick={noScroll}>
      <Link to={`/team/${id}`} className="trainer__link">
        <img className="trainer__img" src={img} alt="trainer" />
        <div className="trainer__info">
          <div className="trainer__name">{name}</div>
          <div className="trainer__position">{position}</div>
        </div>
      </Link>
    </li>
  );
}

export default TrainerCard;
