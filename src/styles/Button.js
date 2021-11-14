import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: #2e51a2;
  border-radius: 3px;
  border: none;
  color: #fff;
  margin: ${props => props.margin || "5px"};
  padding: ${props => props.padding || "10px"};

  ${props => props.ad && css`
    background: #eb6100;
    padding: 0 30px;
  `}
`;

export default Button;
