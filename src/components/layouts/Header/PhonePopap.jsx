import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { IoCloseOutline } from 'react-icons/io5';

const Wrapper = styled.div`
  display: ${(props) => (props.isPhoneOpen ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Popap = styled.div`
  position: fixed;
  top: ${(props) => (props.isScrolled ? '62px' : '92px')};
  left: 15px;
  z-index: 2;
  width: 98%;
  padding: 15px 0;
  background-color: var(--white);
  border: 1px solid #d8d8d8;
  a {
    display: block;
    margin: 15px auto;
    text-align: center;
    font-size: 16px;
    color: var(--black);
    transition: color var(--trans);
    :hover {
      color: var(--red-hover);
    }
  }
`;

const Close = styled.button`
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

function PhonePopap({ isPhoneOpen, setIsPhoneOpen, isScrolled }) {
  return ReactDOM.createPortal(
    <Wrapper isPhoneOpen={isPhoneOpen} onClick={() => setIsPhoneOpen(false)}>
      <Popap onClick={(e) => e.stopPropagation()} isScrolled={isScrolled}>
        <a href="tel:+74012614061">+7 (4012) 61-40-61</a>
        <a href="tel:+79637386316">+7 963 738 63 16 (Viber, WhatsApp)</a>
        <Close onClick={() => setIsPhoneOpen(false)}>
          <IoCloseOutline />
        </Close>
      </Popap>
    </Wrapper>,
    document.getElementById('root')
  );
}

export default PhonePopap;
