import styled from 'styled-components';

export const RedLink = styled.button`
  display: inline-block;
  width: 190px;
  font-size: 12px;
  color: var(--red);
  text-transform: uppercase;
  padding-bottom: 8px;
  transition: 0.3s ease-in-out;
  border-bottom: 4px solid;
  border-color: currentColor;
  text-align: ${(props) => (props.right ? 'right' : 'left')};
  &:hover {
    color: var(--red-hover);
  }
`;
