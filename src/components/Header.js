import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const HeaderTitleContainer = styled.div`
  display: flex;
`;
const HeaderTitle = styled.h2`
  margin: 0 auto 0 0;
  color: #2e51a2;
`;
const HeaderContainer = styled.div`
  background-color: #2e51a2;
  display: flex;
`
const HeaderItem = styled.a`
  margin: 5px;
  text-decoration: none;
  color: #fff;
`;
const HeaderDescription = styled.div`
  border-bottom: solid 1px #2e51a2;
  background-color: #e1e7f5;
  color: #000;
  font-weight: bold;
  padding: 5px;
`;

const Header = () => {
  return(
    <div>
      <HeaderTitleContainer>
        <HeaderTitle>MyAnimeList</HeaderTitle>
        <Button ad>Hide Ads</Button>
        <Button>button</Button>
      </HeaderTitleContainer>
      <HeaderContainer>
        <HeaderItem href="#">Anime</HeaderItem>
        <HeaderItem href="#">Manga</HeaderItem>
      </HeaderContainer>
      <HeaderDescription>My Prof</HeaderDescription>
    </div>
  );
}

export default Header;
