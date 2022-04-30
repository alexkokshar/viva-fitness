import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

function Post20211231() {
  return (
    <Wrapper>
      <NewsIntro data={news2021.mainPost} />
      <Text className="margin-b">
        Заранее готовитесь к праздникам и выбираете подарок близкому человеку на Новый год, День
        рождения, День всех влюбленных или День защитника Отечества? Отличным презентом может стать
        подарочный сертификат на услуги фитнес-клуба VIVA!
      </Text>
      <Text className="margin-b">
        Вы можете выбрать любой из абонементов, Блок персональных тренировок или сертификат на
        массаж.
      </Text>
      <Text className="margin-b">
        Полный список абонементов смотрите в разделе <Link to="/cards">"КЛУБНЫЕ КАРТЫ"</Link>
      </Text>
      <Text className="margin-b">
        Сделайте приятный и полезный подарок другу, родственнику или коллеге!
      </Text>
      <Text>Адрес: ул. О. Кошевого 33</Text>
      <Text>Звоните: 61-40-61</Text>
    </Wrapper>
  );
}

export default Post20211231;
