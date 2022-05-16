import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Modal from './components/layouts/Modal/Modal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const Main = styled.main`
  padding-top: 88px;
  flex: 1;
`;

export const ModalContext = createContext(null);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <Header />
        <Wrapper>
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </Wrapper>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </ModalContext.Provider>
    </>
  );
}

export default App;
