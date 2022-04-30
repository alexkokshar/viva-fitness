import React, { useState } from 'react';
import styled from 'styled-components';

import { cardsData } from '../../data/cardsData';
import { Container } from '../../components/UI/Container';
import CardType from '../../components/cards/CardType';
import handWithCard from '../../assets/cards/cards-hand-bg.png';
import qrcode from '../../assets/cards/qrcode.jpg';
import cardsBg from '../../assets/cards/cards-bg.png';

const CardsWrapper = styled.div`
  padding-bottom: 60px;
`;

const Intro = styled.div`
  min-height: 535px;
  background-image: url(${cardsBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  height: 535px;
  position: relative;
  @media (max-width: 850px) {
    height: 500px;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 260px;
  color: #fff;
  font-size: 50px;
  line-height: 1.2;
  font-weight: 700;
  @media (max-width: 850px) {
    top: 10%;
    transform: translateY(0);
  }
`;

const ImgIntro = styled.img.attrs({
  src: handWithCard,
  alt: 'Рука держит карту VIVA',
})`
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50%;
  @media (max-width: 850px) {
    width: 500px;
  }
  @media (max-width: 550px) {
    right: -100px;
    left: 15px;
  }
`;

const Payment = styled.div`
  padding: 40px 0;
`;

const PaymentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

const ImgPayment = styled.img.attrs({
  src: qrcode,
  alt: 'qrcode для оплаты',
})`
  max-width: 50%;
  @media (max-width: 940px) {
    max-width: 100%;
  }
`;

const PaymentInfo = styled.div`
  margin-left: 20px;
  @media (max-width: 940px) {
    margin-left: 0;
  }
`;

const PaymentTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const PaymentDetails = styled.div`
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.5;
`;

function Cards() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <CardsWrapper>
      <Intro>
        <Container>
          <Title>Клубные карты</Title>
        </Container>
        <ImgIntro />
      </Intro>

      <Payment>
        <Container>
          <PaymentFlex>
            <ImgPayment />
            <PaymentInfo>
              <PaymentTitle>Дистанционная оплата</PaymentTitle>
              <PaymentDetails>
                <div>Для оплаты через банковское приложение, действует QR-код.</div>
                <div>Вам необходимо:</div>
                <div>
                  1.Открыть мобильное приложение Банка, выбрать «Платежи» и далее — «Оплата по QR,
                  либо можно ввести реквизиты, которые закреплены в этом разделе».
                </div>
                <div>2.Навести камеру телефона на QR-код. Он считается автоматически.</div>
                <div>
                  3. Ввести сумму (стоимость Абонемента, согласно действующего прейскуранта, либо
                  Акционного предложения в период действия данного предложения).
                </div>
                <div>
                  4. В комментариях (Назначении платежа) указать - За Абонемент (такой-то), за
                  Ф.И.О. лица, на чье имя приобретается Абонемент
                </div>
              </PaymentDetails>
              <PaymentDetails>
                <div>
                  Для оплаты по реквизитам организации, в онлайн-банке необходимо ввести следующие
                  платежные реквизиты:
                </div>
                <div>ИНН получателя: 3906133862</div>
                <div>Расчётный счет получателя: 40702810203700001635</div>
                <div>БИК банка получателя: 044030795</div>
                <div>
                  Назначение платежа: За Абонемент (такой-то), за Ф.И.О. лица, на чье имя
                  приобретается Абонемент
                </div>
                <div>Сумма: Указывается сумма выбранного Абонемента</div>
              </PaymentDetails>
            </PaymentInfo>
          </PaymentFlex>
        </Container>
      </Payment>

      <div>
        <Container>
          {cardsData.map((item) => (
            <CardType key={item.id} card={item} activeTab={activeTab} setActiveTab={setActiveTab} />
          ))}
        </Container>
      </div>
    </CardsWrapper>
  );
}

export default Cards;
