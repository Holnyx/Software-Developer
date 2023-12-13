import React from "react";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Button } from "../../../component/button";
import yellowPoint from "../../../assets/img/test.svg";
import photoTest from "../../../assets/img/photo.png"

export const Main = () => {
  
  return (
    <StyledMain>
      <TextContent>
        <h1>Software Developer</h1>
        <span>Hello, my name is Vahid Navazan</span>
        <br />
        <span>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </span>
        <br />
        <FlexWrap justify="flex-start" gap="12px">
          <Button>Projects</Button>
          <LinkedInStyledButton href="#">LinkedIn</LinkedInStyledButton>
        </FlexWrap>
      </TextContent>
      <YellowPoint src={yellowPoint} alt=""/>
      <PhotoTest src={photoTest} alt="" />
    </StyledMain>
  );
};
const StyledMain = styled.div`
  margin-top: 250px;
`;
const TextContent = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  h1 {
    color: #fdc435;
    text-transform: uppercase;
    margin: 0;
    font-size: 20px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
  }
  span {
    font-size: 24px;
    color: #828282;
    font-family: "Roboto";
    &:first-of-type {
      font-size: 64px;
      color: #25282b;
      font-weight: 700;
    }
    &:last-of-type {
      line-height: 36px;
      font-family: "Nunito";
    }
  }
`;
const LinkedInStyledButton = styled.a`
  margin-right: auto;
  padding: 6px 24px;
  border: solid #25282b 2px;
  border-radius: 8px;
  font-size: 18px;
  text-decoration: none;
  color: #25282b;
  font-family: "Roboto";
`;
const YellowPoint = styled.img`
  position: absolute;
  left: 50%;
  top: -5%;
  height: 26%;
`;
const PhotoTest = styled.img`
  position: absolute;
  top: 0%;
  left: 40%;
  height: 23%;
`