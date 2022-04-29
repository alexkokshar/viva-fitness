import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../components/UI/Container';
import { RedLink } from '../../components/UI/RedLink';

import picture1 from '../../assets/news/1.jpg';
import picture2 from '../../assets/news/2.jpg';
import picture3 from '../../assets/news/3.jpg';
import mainMask from '../../assets/news/mask-main.png';
import secondMask from '../../assets/news/mask-second.png';
import thirdMask from '../../assets/news/mask-third.png';
import bg from '../../assets/bg/latestnews-bg.png';

const Background = styled.section`
  min-height: 1100px;
  padding-bottom: 60px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center 100px;
  background-size: cover;
  @media (max-width: 816px) {
    background-image: none;
  }
`;

const Item = styled.li`
  &:nth-child(2) {
    float: right;
    @media (max-width: 816px) {
      float: none;
    }
  }
  &:nth-child(3) {
    float: left;
    margin-left: 130px;
    @media (max-width: 816px) {
      float: none;
      margin-left: 0;
    }
  }
  &:not(:last-child) {
    margin-bottom: 72px;
  }
  &:hover .news-descr {
    color: var(--red-hover);
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 816px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ImgBox = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 101%;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  @media (max-width: 816px) {
    max-width: 100%;
    &::after {
      display: none;
    }
  }
`;

const ImgMainBox = styled(ImgBox)`
  max-width: 475px;
  &::after {
    background-image: url(${mainMask});
  }
  @media (max-width: 816px) {
    max-width: 100%;
  }
`;

const ImgSecondBox = styled(ImgBox)`
  max-width: 344px;
  &::after {
    background-image: url(${secondMask});
  }
  @media (max-width: 816px) {
    max-width: 100%;
  }
`;

const ImgThirdBox = styled(ImgBox)`
  max-width: 344px;
  &::after {
    background-image: url(${thirdMask});
  }
  @media (max-width: 816px) {
    max-width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  margin-left: 40px;
  @media (max-width: 816px) {
    margin-left: 0;
  }
`;

const Time = styled.time`
  display: block;
  margin-bottom: 30px;
  font-size: 14px;
  color: var(--grey);
  @media (max-width: 816px) {
    margin: 20px 0;
  }
`;

const Description = styled.div`
  max-width: 245px;
  font-size: 20px;
  line-height: 1.2;
  transition: color var(--trans);
  @media (max-width: 816px) {
    max-width: 100%;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

function LatestNews() {
  return (
    <Background>
      <Container>
        <h2 className="title">Новости клуба</h2>
        <ul style={{ minHeight: '1000px' }}>
          <Item>
            <Link to="/posts">
              <ItemContent>
                <ImgMainBox>
                  <Img src={picture1} alt="Человек рисует ступеньки мелом на стене" />
                </ImgMainBox>
                <Details>
                  <Time dateTime="2022-04-04">4 апреля 2022</Time>
                  <Description className="news-descr">VIVA ВАКАНСИИ</Description>
                </Details>
              </ItemContent>
            </Link>
          </Item>
          <Item>
            <Link to="/posts/2">
              <ItemContent>
                <ImgSecondBox>
                  <Img src={picture2} alt="Человек рисует ступеньки мелом на стене" />
                </ImgSecondBox>
                <Details>
                  <Time dateTime="2022-02-28">28 февраля 2022</Time>
                  <Description>Аренда залов в фитнес-клубе VIVA</Description>
                </Details>
              </ItemContent>
            </Link>
          </Item>
          <Item>
            <Link to="/posts/3">
              <ItemContent>
                <ImgThirdBox>
                  <Img src={picture3} alt="Человек рисует ступеньки мелом на стене" />
                </ImgThirdBox>
                <Details>
                  <Time dateTime="2021-12-31">31 декабря 2021</Time>
                  <Description>Подарочные сертификаты на любые услуги клуба</Description>
                </Details>
              </ItemContent>
            </Link>
          </Item>
        </ul>
        <Button>
          <RedLink as={Link} to="/news">
            Все новости
          </RedLink>
        </Button>
      </Container>
    </Background>
  );
}

export default LatestNews;
