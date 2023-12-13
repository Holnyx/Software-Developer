import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: #000;
  text-align: center;
  margin: 144px 0 80px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  font-family: "Playfair";
  
  &::after {
    padding-top: 4px;
    background-color: #fdc435;
    width: 70%;
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
