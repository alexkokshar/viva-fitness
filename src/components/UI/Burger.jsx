import styled from 'styled-components';

const Wrapper = styled.button`
  width: 35px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  @media (min-width: 1275px) {
    display: none;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: var(--red);
    transition: var(--trans);
    transform-origin: left;
    :nth-child(2) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(-50px)' : 'translateX(0)')};
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }
    :nth-child(1) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(3) {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ isMenuOpen, onClick }) => {
  return (
    <Wrapper isMenuOpen={isMenuOpen} onClick={onClick}>
      <div />
      <div />
      <div />
    </Wrapper>
  );
};

export default Burger;
