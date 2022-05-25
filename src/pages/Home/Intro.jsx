import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { RedButton } from '../../components/UI/RedButton';

import sliderBg1 from '../../assets/bg/intro-swiper-1.jpg';
import sliderBg2 from '../../assets/bg/intro-swiper-2.jpg';
import sliderBg3 from '../../assets/bg/intro-swiper-3.jpg';

const Wrapper = styled.section`
  .swiper-pagination-bullet {
    width: 36px;
    height: 4px;
    background-color: #fff;
    border-radius: 0;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--red);
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 20px;
  }
`;

const Item = styled.div`
  margin-left: 90px;
  width: calc(100% - 90px);
  height: 650px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0000008a;
  }
  &#intro-swiper-1 {
    background-image: url(${sliderBg1});
  }
  &#intro-swiper-2 {
    background-image: url(${sliderBg2});
  }
  &#intro-swiper-3 {
    background-image: url(${sliderBg3});
  }
  @media (max-width: 1050px) {
    margin-left: 0;
    width: 100%;
    height: 600px;
  }
`;

const Info = styled.div`
  height: 100%;
  max-width: 1165px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  position: relative;
  z-index: 10;
  padding: 0 30px;
  @media (max-width: 816px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  max-width: 600px;
  line-height: 1.2;
  font-weight: var(--fw-bold);
  @media (max-width: 1050px) {
    font-size: 30px;
  }
`;

const Text = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 20px;
`;

function Intro() {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="intro-swiper"
      >
        <SwiperSlide>
          <Item id="intro-swiper-1">
            <Info>
              <Title>Выберите занятие для себя!</Title>
              <Text>Групповые программы, аквааэробика, детские занятия</Text>
              <RedButton as={Link} to="/schedule">
                Расписание
              </RedButton>
            </Info>
          </Item>
        </SwiperSlide>
        <SwiperSlide>
          <Item id="intro-swiper-2">
            <Info>
              <Title>Абонемент безлимитный или дневной?</Title>
              <Text>Выбор за вами!</Text>
              <RedButton as={Link} to="/cards">
                Выбрать
              </RedButton>
            </Info>
          </Item>
        </SwiperSlide>
        <SwiperSlide>
          <Item id="intro-swiper-3">
            <Info>
              <Title>VIVA — да здравствует фитнес!</Title>
              <Text>Если вы ещё не с нами, давайте знакомиться!</Text>
              <RedButton as={Link} to="/about">
                О клубе
              </RedButton>
            </Info>
          </Item>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default Intro;
