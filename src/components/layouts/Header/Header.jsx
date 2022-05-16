import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ModalContext } from '../../../App';
import { MdPhoneIphone } from 'react-icons/md';
import Nav from './Nav';
import Burger from '../../UI/Burger';
import { RedButton } from '../../UI/RedButton';
import PhonePopap from './PhonePopap';

import logo from '../../../assets/icons/logo.png';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 0 20px;
  transition: height var(--trans);
  height: ${({ isScrolled }) => (isScrolled ? '60px' : '90px')};
  box-shadow: 0 3px 0 0 rgba($color: #000000, $alpha: 0.1);
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Логотип фитнес клуба VIVA',
})`
  object-fit: cover;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 1275px) {
    position: absolute;
    top: ${({ isMenuOpen }) => (isMenuOpen ? '60px' : '90px')};
    left: 0;
    width: 100vw;
    height: calc(110vh - 90px);
    background-color: #fff;
    flex-direction: column;
    padding: 50px 15px;
    text-align: center;
    overflow: auto;
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'scale(1)' : 'scale(0.5)')};
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    .phone-btn {
      order: -1;
    }
  }
`;

const Phone = styled.button`
  position: relative;
  margin-right: 30px;
  @media (max-width: 1275px) {
    display: none;
  }
  svg {
    width: 30px;
    height: 25px;
    fill: var(--red);
  }
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setIsModalOpen } = useContext(ModalContext);

  window.onscroll = () => {
    window.pageYOffset ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <FixedHeader isScrolled={isScrolled}>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderContent isMenuOpen={isMenuOpen}>
        <Nav />
        <Phone>
          <MdPhoneIphone onClick={() => setIsPhoneOpen(!isPhoneOpen)} />
          <PhonePopap
            isPhoneOpen={isPhoneOpen}
            setIsPhoneOpen={setIsPhoneOpen}
            isScrolled={isScrolled}
          />
        </Phone>
        <div className="phone-btn" onClick={() => setIsModalOpen(true)}>
          <RedButton>Запись онлайн</RedButton>
        </div>
      </HeaderContent>
      <Burger isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </FixedHeader>
  );
}

export default Header;
