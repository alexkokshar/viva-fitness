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

function Post20220228() {
  return (
    <Wrapper>
      <NewsIntro data={news2022.posts[0]} />
      <Text>
        Для открытия новых детских и взрослых секций приглашаем к сотрудничеству
        хореографов-педагогов и тренеров по следующим направлениям:
      </Text>
      <List>
        <Item>танцы</Item>
        <Item>единоборства</Item>
      </List>
      <Text className="margin-b">
        2 зала групповых программ, зал с татами, зал единоборств с рингом.
      </Text>
      <Text className="margin-b">
        По вопросам аренды/трудоустройства звоните по телефону или отправляйте предложения и резюме
        фитнес-директору Клуба:
      </Text>
      <Text>
        Телефон: <b>61-40-61</b> , почта: <b>fit-manager@vivafitness.ru</b>{' '}
      </Text>
    </Wrapper>
  );
}

export default Post20220228;
