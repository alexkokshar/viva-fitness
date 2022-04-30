import React from 'react';
import styled from 'styled-components';

import NewsIntro from '../../../components/news/NewsIntro';
import { news2021 } from '../../../data/newsData';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-weight: 300;
  line-height: 1.5;
  &.margin-b {
    margin-bottom: 15px;
  }
`;

function Post20211230() {
  return (
    <Wrapper>
      <NewsIntro data={news2021.posts[0]} />
      <Text className="margin-b">
        Оказалось, что многие наши клиенты не знают о существовании клип-карт, не говоря уже о том,
        для чего они нужны. Клип-карта - это блок персональных тренировок! Да, всё максимально
        просто)
      </Text>
      <Text className="margin-b">
        Персональный тренер - главный человек в вашей фитнес-жизни. Эксперт, коуч, ментор и друг. Он
        помогает подобрать более эффективные упражнения для достижения ваших целей, а также избежать
        чересчур изматывающих, после которых хочется отставить тренировки и просто смириться с
        лишними килограммами или ноющей спиной. Но верят не все, пока не проверят. Начните с малого
        - запишитесь на Вводную персональную тренировку, если она включена в вашу карту VIVA.
        Результат не заставит себя ждать!
      </Text>
    </Wrapper>
  );
}

export default Post20211230;
