import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

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

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
