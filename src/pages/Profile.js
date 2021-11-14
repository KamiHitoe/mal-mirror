import styled from "styled-components";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";

const FlexContainer = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
  margin: 10px;
  flex-grow: ${props => props.rate || 1};
  border-right: solid 0.5px rgba(190,190,190,0.5);
`;

const Profile = () => {
  return(
    <div>
      <Header />
      <FlexContainer>
        <FlexItem rate="1">
          <Aside />
        </FlexItem>
        <FlexItem rate="9">
          <Main />
        </FlexItem>
      </FlexContainer>
    </div>
  )
};

export default Profile;
