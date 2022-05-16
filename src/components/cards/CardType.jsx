import React, { useContext } from 'react';
import styled from 'styled-components';

import { ModalContext } from '../../App';
import DescriptionContainer from '../schedule/DescriptionContainer/DescriptionContainer';
import { RedButton } from '../UI/RedButton';

const Card = styled.div`
  padding-left: 60px;
  margin-bottom: 30px;
  position: relative;
`;

const Button = styled.button`
  text-align: left;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    width: 16px;
    height: 4px;
    background-color: #000;
    transition: background-color 0.3s ease-in-out;
  }
  &::after {
    transition: rotate 0.3s ease-in-out;
    transform: ${({ id, activeTab }) => (id === activeTab ? 'rotate(0)' : 'rotate(90deg)')};
    background-color: ${({ id, activeTab }) => (id === activeTab ? 'var(--red)' : '#000')};
  }
  &:hover::before,
  &:hover::after {
    background-color: var(--red);
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  color: var(--black);
  transition: color var(--trans);
  &:hover {
    color: var(--red-hover);
  }
`;

const Price = styled.div`
  font-size: 20px;
  color: var(--red);
  margin-bottom: 30px;
`;

const Details = styled.div`
  display: ${({ id, activeTab }) => (id === activeTab ? 'block' : 'none')};
`;

const Info = styled.div`
  display: flex;
  @media (max-width: 615px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  flex-basis: 50%;
`;

const Services = styled.div`
  margin-left: 15px;
  flex-basis: 50%;
  @media (max-width: 615px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

const Subtitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Btn = styled.div`
  margin-top: 50px;
`;

function CardType(props) {
  const { id, name, price, descriptions, services } = props.card;
  const { activeTab } = props;
  const { setActiveTab } = props;

  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <Card>
      <Button id={id} activeTab={activeTab} onClick={() => setActiveTab(id)}>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </Button>
      <Details id={id} activeTab={activeTab}>
        <Info>
          <Description>
            <Subtitle>Описание карты</Subtitle>
            <DescriptionContainer>
              <ul>
                {descriptions.map((descr) => (
                  <li key={descr}>{descr}</li>
                ))}
              </ul>
            </DescriptionContainer>
          </Description>
          <Services>
            <Subtitle>Входящие услуги</Subtitle>
            <DescriptionContainer>
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </DescriptionContainer>
          </Services>
        </Info>
        <Btn onClick={() => setIsModalOpen(true)}>
          <RedButton>Заказать</RedButton>
        </Btn>
      </Details>
    </Card>
  );
}

export default CardType;
