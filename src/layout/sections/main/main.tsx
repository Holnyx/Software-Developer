import React from "react";
import photo from "../../../assets/img/photo.webp";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrap align={"center"} >
        <TextContent>
          <h1>Software Developer</h1>
          <span>Hello,  my name is Vahid Navazan</span>
          <span>Short text with details about you, what you do or your professional career. You can add more information on the about page.</span>
          <button>Project</button>
          <button>LinkedIn</button>
        </TextContent>
        <Photo src={photo} alt="" />
      </FlexWrap>
    </StyledMain>
  );
};
const StyledMain = styled.div`
  color: #333333;
`;
const TextContent = styled.div``;
const Photo = styled.img``;
