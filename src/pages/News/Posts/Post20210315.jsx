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

function Post20210315() {
  return (
    <Wrapper>
      <NewsIntro data={news2021.posts[1]} />
      <Text className="margin-b">
        С 15 марта все клиенты клуба, которые обладают знаком отличия ГТО, могут получить разовую
        скидку 10% на приобретение стандартного абонемента
      </Text>
      <Text className="margin-b">Подробности уточняйте по телефону клуба 61-40-61</Text>
    </Wrapper>
  );
}

export default Post20210315;
