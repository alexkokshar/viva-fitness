import styled from 'styled-components';

const Wrapper = styled.div`
  width: 35px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 3px;
    background-color: var(--red);
    transition: var(--trans);
    transform-origin: left;
    :nth-child(2) {
      transform: ${(props) => (props.open ? 'translateX(-50px)' : 'translateX(0)')};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    :nth-child(1) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open }) => {
  return (
    <Wrapper open={open}>
      <div />
      <div />
      <div />
    </Wrapper>
  );
};

export default Burger;
