import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  & > a {
    display: flex;
    @media (max-width: 880px) {
      flex-direction: column;
    }
  }
  :hover .card-name {
    color: var(--red-hover);
  }
`;

const Img = styled.img`
  max-width: 570px;
  object-fit: cover;
  @media (max-width: 880px) {
    max-width: 100%;
  }
`;

const Info = styled.div`
  margin-left: 50px;
  padding-top: 22px;
  @media (max-width: 880px) {
    margin-left: 0;
  }
`;

const Time = styled.time`
  color: var(--grey);
  font-size: 14px;
`;

const Name = styled.div`
  margin-top: 24px;
  font-size: 30px;
  transition: color var(--trans);
  @media (max-width: 880px) {
    margin-top: 15px;
    font-size: 20px;
  }
`;

function NewsMainCard({ to, pathPic, descr, date, datetime, name }) {
  return (
    <Card>
      <Link to={to}>
        <Img src={pathPic} alt={descr} />
        <Info>
          <Time dateTime={datetime}>{date}</Time>
          <Name className="card-name">{name}</Name>
        </Info>
      </Link>
    </Card>
  );
}

export default NewsMainCard;
