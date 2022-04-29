import styled from 'styled-components';

import btnBg from '../../assets/bg/red-btn.png';
import btnBgHover from '../../assets/bg/red-btn-hover.png';

export const RedButton = styled.button`
  display: block;
  width: 192px;
  height: 40px;
  padding: 12px 44px;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  font-weight: var(--fw-med);
  color: var(--white);
  text-transform: uppercase;
  background-image: url(${btnBg});
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s ease-in-out;
  &:hover {
    background-image: url(${btnBgHover});
  }
`;
