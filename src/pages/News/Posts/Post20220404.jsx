import React from 'react';
import styled from 'styled-components';

import NewsIntro from '../../../components/news/NewsIntro';
import { news2022 } from '../../../data/newsData';

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

const List = styled.ul`
  margin-left: 20px;
`;

const Item = styled.li`
  font-weight: 300;
  padding-left: 40px;
  margin: 8px 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 10px;
    height: 6px;
    border-radius: 2px;
    background-color: var(--red);
    transform: skewX(-25deg);
  }
`;

function Post20220404() {
  return (
    <Wrapper>
      <NewsIntro data={news2022.mainPost} />
      <Text>Открыты вакансии в фитнес-клубе VIVA: </Text>
      <List>
        <Item>инструктор водных программ (грудничковое плавание)</Item>
        <Item>дежурный инструктор бассейна</Item>
        <Item>инструктор тренажерного зала</Item>
        <Item>инструктор групповых программ</Item>
        <Item>инструктор единоборств </Item>
        <Item>менеджер-администратор рецепции</Item>
        <Item>персонал клининговой службы</Item>
      </List>
      <Text className="margin-b">
        Присоединяйся к нашему дружному коллективу и получай привилегии для сотрудников:
      </Text>
      <Text>Бесплатное посещение всех зон клуба</Text>
      <Text>Скидки на персональные тренировки и услуги массажа</Text>
      <Text>Скидки на абонементы для близких родственников</Text>
      <Text className="margin-b">Интересно? Пиши, ответим на любые вопросы!</Text>
      <Text>Резюме отправлять на e-mail:</Text>
      <Text className="margin-b">тренерский состав и аренда: fit-manager@vivafitness.ru</Text>
      <Text>Калининград, ул. О. Кошевого 33</Text>
      <Text>Телефон 61-40-61</Text>
    </Wrapper>
  );
}

export default Post20220404;
