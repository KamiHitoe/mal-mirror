import styled, { css } from "styled-components";

const Button = styled.button`
  background: #2e51a2;
  border-radius: 3px;
  border: none;
  color: #fff;
  margin: 5px;
  padding: 5px;

  ${props => props.ad && css`
    background: #eb6100;
    padding: 5px 30px;
  `}
`;

export default Button;
