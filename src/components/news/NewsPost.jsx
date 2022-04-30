import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Post = styled.div`
  max-width: 475px;
  margin-top: 60px;
  margin-left: 20px;
  :hover .post-name {
    color: var(--red-hover);
  }
`;

const Row = styled.div`
  @media (max-width: 614px) {
    display: flex;
    flex-direction: column;
  }
`;

const Date = styled.div`
  color: var(--grey);
  font-size: 14px;
  transform-origin: left;
  transform: translateY(120px) rotate(270deg);
  @media (max-width: 614px) {
    transform: none;
    order: 1;
  }
`;

const Img = styled.img`
  max-width: 475px;
  padding-left: 20px;
  @media (max-width: 614px) {
    padding-left: 0;
    padding-bottom: 20px;
    max-width: 100%;
  }
`;

const Name = styled.div`
  padding-left: 20px;
  margin-top: 24px;
  font-size: 20px;
  transition: color var(--trans);
  @media (max-width: 614px) {
    padding-left: 0;
  }
`;

function NewsPost({ to, pathPic, descr, date, datetime, name }) {
  return (
    <Post>
      <Link to={to}>
        <Row>
          <Date>{date}</Date>
          <Img src={pathPic} alt={descr} />
        </Row>
        <Name className="post-name">{name}</Name>
      </Link>
    </Post>
  );
}

export default NewsPost;
