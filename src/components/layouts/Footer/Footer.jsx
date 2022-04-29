import styled from 'styled-components';

import { Container } from '../../UI/Container';
import { ImFacebook2 } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';

const Wrapper = styled.footer`
  background-color: #000;
  color: var(--white);
  padding: 40px 0;
`;

const Address = styled.address`
  display: flex;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  font-style: normal;
  font-size: 16px;
  &:first-child,
  &:last-child {
    flex: 1;
  }
  &:last-child {
    text-align: right;
  }
  @media (max-width: 580px) {
    text-align: center;
    margin-bottom: 20px;
    &:first-child,
    &:last-child {
      flex: 0;
    }
    &:last-child {
      text-align: center;
      margin-top: 20px;
    }
  }

  a {
    color: #fff;
  }
`;

const Time = styled.div`
  font-style: normal;
  text-align: center;
  font-size: 16px;
  margin: 0 15px;
  div {
    margin-bottom: 20px;
  }
`;

const Socials = styled.div`
  text-align: center;
  margin: 30px 0 0;
  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    transition: fill var(--trans);
    &:hover {
      fill: var(--red-hover);
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Address>
          <Column>г. Калининград, ул. Олега Кошевого 33</Column>
          <Time>
            <div>Ежедневно с 7:00 до 23:00</div>
            Бассейны: <br /> Пн с 11:00 до 22:00 <br /> Вт-Вс с 7:00 до 22:00
          </Time>
          <Column>
            <a href="tel:+74012614061">+7 (4012) 61-40-61</a>
          </Column>
        </Address>
        <Socials>
          <a href="https://www.facebook.com/vivafitnessclubkld/">
            <ImFacebook2 />
          </a>
          <a href="https://vk.com/vivafitnesskld">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/vivafitness.ru">
            <ImInstagram />
          </a>
        </Socials>
      </Container>
    </Wrapper>
  );
}

export default Footer;
