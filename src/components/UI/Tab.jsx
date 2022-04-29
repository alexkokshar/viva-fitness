import styled from 'styled-components';
import { RedLink } from './RedLink';

export const Tab = styled(RedLink)`
  color: ${(props) => (props.active ? 'var(--red)' : 'var(--black)')};
  border-color: ${(props) => (props.active ? 'var(--red)' : 'transparent')};
`;
