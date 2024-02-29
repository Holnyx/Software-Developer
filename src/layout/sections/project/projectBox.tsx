import React from "react";
import { FlexWrap } from "../../../component/flexWrap";
import { S } from "./projectBox_styles";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  href?: string

};

export const ProjectBox = (props: ProjectPropsType) => {

  return (
    <S.ProjectBox>
      <FlexWrap gap="50px">
        <FlexWrap
          gap="24px"
          direction="column"
          justify="space-between"
          wrap="wrap"
          margin="50px 0"
          width="50%"
        >
          <S.Title>{props.title}</S.Title>
          <S.Text>{props.text}</S.Text>
          <S.Link href={props.href} target="_blank">View Project</S.Link>
        </FlexWrap>
        <FlexWrap height="524px" position="relative">
          <S.TextProgress>IN PROGRESS</S.TextProgress>
          <S.Image src={props.src} alt="Project Img"></S.Image>
        </FlexWrap>
      </FlexWrap>
    </S.ProjectBox>
  );
};

