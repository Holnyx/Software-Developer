import styled from "styled-components";
import React from "react";
import { FlexWrap } from "../../../component/flexWrap";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

export const ProjectBox = (props: ProjectPropsType) => {
  return (
    <StyledProjectBox>
      <FlexWrap direction="row">
        <FlexWrap gap="24px" direction="column">
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Link href={"#"}>View Project</Link>
        </FlexWrap>
        <Image src={props.src} alt="Project Img"></Image>
      </FlexWrap>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  background-color: #fff;
  max-width: 992px;
  width: 100%;
  border-radius: 24px;
  box-shadow: #d8dadd51 0 0 60px;
  position: relative;
  overflow: hidden;
  padding-left: 50px;
  padding-right: 536px;
  padding: 0 320px 0 50px;
  margin: 0 auto;
`;

const Title = styled.h3`
  margin: 100px 0 0 0;
  font-family: "Playfair";
  font-size: 40px;
`;
const Text = styled.p`
  font-size: 18px;
  margin: 0;
  color: #828282;
  font-family: "Nunito";
`;
const Link = styled.a`
  height: 44px;
  width: 150px;
  border: #25282b solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #25282b;
  border-radius: 24px;
  font-size: 18px;
  margin-bottom: 100px;
  font-family: "Roboto";
  cursor: pointer;
`;
const Image = styled.img`
  height: 100%;
  width: 50%;
  position: absolute;
  left: 50%;
  object-fit: cover;
  /* transform: translateX(20%); */
`;
