import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  margin: 15px;
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 3px;
`;

export const NLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  :not(.active):hover {
    border: 1px solid #ffffff;
  }

  &.active {
    color: black;
    background-color: white;
  }
`;
