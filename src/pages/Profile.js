import styled from "styled-components";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Main from "../components/Main";

const FlexContainer = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
  
`;

const Profile = () => {
  return(
    <div>
      <Header />
      <Aside />
      <Main />
    </div>
  )
};

export default Profile;
