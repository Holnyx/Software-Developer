import styled from "styled-components";
import { Theme } from "./styled/theme";

export const StyledTitle = styled.h2`
  color: #D9D9D9;
  text-align: center;
  font-size: 40px;
  line-height: 72px;
  font-family: "Castoro";
  text-transform: uppercase;
  padding: 30px 0;
  
  &::after {
    padding-top: 4px;
    background: linear-gradient(90deg, rgba(11,231,255,0.0046612394957983305) 0%, rgba(255, 1, 1, 0.895) 50%, rgba(1,128,255,0) 100%);
    width: 80%;
    border-radius: 2px;
    content: "";
    position: relative;
    display: block;
    margin-top: 4px;
    margin: auto;
    right: 0;
    left: 0;
  }
 
`;
