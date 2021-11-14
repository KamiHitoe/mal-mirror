import styled from "styled-components";

const Background = styled.div`
  margin-top: 20px;
  padding: 50px;
  text-align: center;
  background: #2e51a2;
  color: #fff;
`;

const Footer = () => {
  return(
    <Background>
      <p style={{ fontSize: "10px" }}>
        MyAnimeList.net is a property of MyAnimeList Co.,Ltd. ©2021 All Rights Reserved.<br />
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </Background>
  );
};

export default Footer;
