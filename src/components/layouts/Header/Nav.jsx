import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  @media (max-width: 1275px) {
    flex: 0;
  }
`;

const List = styled.ul`
  display: flex;
  @media (max-width: 1275px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  margin: 0 20px;
  @media (max-width: 1275px) {
    margin: 30px 0;
  }
  a {
    text-transform: uppercase;
    font-size: 12px;
    transition: color var(--trans);
    font-weight: var(--fw-med);
    :hover {
      color: var(--red-hover);
    }
    @media (max-width: 1275px) {
      font-size: 15px;
    }
  }
`;

const links = [
  {
    title: 'Услуги',
    to: '/services',
  },
  {
    title: 'Новости',
    to: '/news',
  },
  {
    title: 'Расписание',
    to: '/schedule',
  },
  {
    title: 'Клубные карты',
    to: '/cards',
  },
  {
    title: 'О клубе',
    to: '/about',
  },
  {
    title: 'Команда',
    to: '/team',
  },
  {
    title: 'Контакты',
    to: '/contacts',
  },
];

const Nav = () => {
  return (
    <>
      <NavBar>
        <List>
          {links.map(({ title, to }) => (
            <Item key={title}>
              <NavLink to={to}>{title}</NavLink>
            </Item>
          ))}
        </List>
      </NavBar>
    </>
  );
};

export default Nav;
