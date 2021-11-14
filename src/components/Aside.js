import styled from 'styled-components';
import Button from '../styles/Button';
import img from '../assets/miyuki.png';

const profRows = ['Last Online', 'Gender', 'Birthday', 'Location', 'Joined'];

const Image = styled.img`
  width: 200px;
`;

const Aside = () => {
  return(
    <aside>
      <Image src={img} alt="img" />
      {profRows.map((e,i) => 
        i%2===0 ? <p>{e}</p> : <p style={{ background: "rgba(190,190,190,0.2)" }}>{e}</p>
      )}
      <div style={{ textAlign: "center" }}>
        <Button padding="10px 20px">Anime List</Button>
        <Button padding="10px 20px">Manga List</Button>
      </div>
    </aside>
  );
};

export default Aside;
