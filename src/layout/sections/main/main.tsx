import React from "react";
import { FlexWrap } from "../../../component/flexWrap";
import { PhotoInPoint } from "../../../component/photoInPoint";
import { S } from "./main_styles";

const items = [
  {
  title: "Projects",
  href: "projects"
},
]

export const Main = () => {
  return (
    <S.Main id="about">
      <FlexWrap direction="row">
        <S.TextContent>
          <h1>Software Developer</h1>
          <span>
            Hello, <br />
            my name is <br/><b>Anastasia Smirnova</b>
          </span>
          <br />
          <span>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </span>
          <br />
          <FlexWrap justify="flex-start" gap="28px" wrap="wrap">
          {items.map((item, index) => {
          return (
            <S.Button to={item.href} smooth="true">Projects</S.Button>
            );
          })}
            <S.LinkedInStyledButton href="#">LinkedIn</S.LinkedInStyledButton>
          </FlexWrap>
        </S.TextContent>
        <PhotoInPoint />
      </FlexWrap>
    </S.Main>
  );
};
