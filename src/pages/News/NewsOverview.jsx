import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import { Container } from '../../components/UI/Container';

const Section = styled.section`
  padding-bottom: 60px;
`;

const Header = styled.div`
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 620px) {
    margin: 35px 0;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;

const Year = styled.div`
  margin: 0 20px;
  a {
    font-size: 12px;
    transition: color var(--trans);
    padding-bottom: 10px;
    :hover {
      color: var(--red-hover);
    }

    &.year-active {
      color: var(--red);
      border-bottom: 4px solid currentColor;
    }
  }
`;

function NewsOverview() {
  return (
    <Section>
      <Container>
        <Header>
          <h1 className="title">Новости клуба</h1>
          <Flex>
            <Year>
              <NavLink to="/news" end className={({ isActive }) => (isActive ? 'year-active' : '')}>
                2022
              </NavLink>
            </Year>
            <Year>
              <NavLink
                to="/news/2021"
                end
                className={({ isActive }) => (isActive ? 'year-active' : '')}
              >
                2021
              </NavLink>
            </Year>
          </Flex>
        </Header>
        <Outlet />
      </Container>
    </Section>
  );
}

export default NewsOverview;
