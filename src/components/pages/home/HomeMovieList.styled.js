import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const List = styled.ul`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 15px;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

export const ListItem = styled.li`
width: calc((100% - 60px)/3);
`;

export const Img = styled.img`
max-width: 100%;
 &:hover{
    scale: 1.05;
 }
`;

export const ImgLink = styled(Link)`
text-decoration: none;
color: #ffffff;
`;