import styled from 'styled-components';
import Button from '../styles/Button';
import img from '../assets/miyuki.png';

const Image = styled.img`
  width: 200px;
`;

const Aside = () => {
  return(
    <aside>
      <Image src={img} alt="img" />
    </aside>
  );
};

export default Aside;
