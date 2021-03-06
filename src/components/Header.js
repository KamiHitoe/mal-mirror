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
`;
const HeaderItem = styled.a`
  padding: 10px;
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
        <span class="material-icons" style={{ color: '#2e51a2' }}>list</span>
        <span class="material-icons" style={{ color: '#2e51a2' }}>email</span>
        <span class="material-icons" style={{ color: '#2e51a2' }}>notifications</span>
        <Button>button</Button>
      </HeaderTitleContainer>
      <HeaderContainer>
        <HeaderItem href="#">Anime</HeaderItem>
        <HeaderItem href="#">Manga</HeaderItem>
        <HeaderItem href="#">Community</HeaderItem>
        <HeaderItem href="#">Industry</HeaderItem>
        <HeaderItem href="#">Watch</HeaderItem>
        <HeaderItem href="#">Read</HeaderItem>
        <HeaderItem href="#">Help</HeaderItem>
      </HeaderContainer>
      <HeaderDescription>starmiya_miyuki's Profile</HeaderDescription>
    </div>
  );
}

export default Header;
