import React from "react";
import photo from "../../../assets/img/photo.webp";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Button } from "../../../component/button";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrap align={"center"}>
        <TextContent>
          <h1>Software Developer</h1>
          <h2>Hello, my name is Vahid Navazan</h2>
          <span>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </span>
          <Button>Project</Button>
          <LinkedInStyledButton href="#">LinkedIn</LinkedInStyledButton>
        </TextContent>
        <Photo src={photo} alt="" />
      </FlexWrap>
    </StyledMain>
  );
};
const StyledMain = styled.div`
  color: #333333;
`;
const TextContent = styled.div`
  max-width: 508px;
  width: 100%;
  & > h2 {
    font-size: 64px;
  }
`;
const Photo = styled.img``;
const LinkedInStyledButton = styled.a`
  padding: 6px 24px;
  border: solid #25282b 2px;
  border-radius: 8px;
  font-size: 18px;
  text-decoration: none;
`;
