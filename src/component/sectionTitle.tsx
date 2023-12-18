import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: #25282b;
  text-align: center;
  margin: 144px 0 80px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  font-family: "Playfair";
  /* text-transform: uppercase; */
  
  &::after {
    padding-top: 4px;
    background: linear-gradient(90deg, rgba(250,11,255,0), #fb0bffd2, rgba(11,145,255,1), #fb0bffd2, rgba(250,11,255,0));
    width: 100%;
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
