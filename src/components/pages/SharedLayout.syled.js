import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  :not(.active):hover{
    border: 1px solid #ffffff;
  }

  &.active {
    color: black;
    background-color: white;
  }
`;

export const Header = styled.header`
padding-top: 16px;
padding-bottom: 16px;
border-bottom: 1px solid #ffffff;
`;
