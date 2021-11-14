import styled from 'styled-components';
import Button from '../styles/Button';

const FlexContainer = styled.div`
  display: flex;
`;
const FlexItem = styled.div`
  flex-grow: ${props => props.rate || 1};
`;

const Main = () => {
  return(
    <main>
      <p>profile description space</p>
      <h5>Statistics</h5>
      <FlexContainer>
        <FlexItem rate="5">Anime Stats</FlexItem>
        <FlexItem rate="5">Last Anime Updates</FlexItem>
      </FlexContainer>
      <h5>hey darling!</h5>
      <h5>Comments</h5>
      <textarea
        placeholder="Write a new comment"
        rows="7"
        style={{ width: "95%" }}
      ></textarea>
      <Button>Submit Comment</Button>
    </main>
  );
};

export default Main;
