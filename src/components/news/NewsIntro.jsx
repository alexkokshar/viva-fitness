import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RedLink } from '../UI/RedLink';

const BackBtn = styled.div`
  margin: 50px 0;
`;

const Img = styled.img`
  @media (max-width: 845px) {
    width: 100%;
  }
`;

const Time = styled.time`
  display: block;
  margin: 30px 0;
  color: $grey;
`;

const Name = styled.div`
  margin-bottom: 40px;
  font-size: 30px;
`;

function NewsIntro({ data }) {
  const { pathPic, descr, date, dateTime, name } = data;
  return (
    <div>
      <BackBtn>
        <RedLink as={Link} to="/news" right>
          Назад к новостям
        </RedLink>
      </BackBtn>
      <Img src={pathPic} alt={descr} />
      <Time dateTime={dateTime}>{date}</Time>
      <Name>{name}</Name>
    </div>
  );
}

export default NewsIntro;
