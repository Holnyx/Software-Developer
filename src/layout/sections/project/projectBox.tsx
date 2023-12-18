import styled from "styled-components";
import React from "react";
import { FlexWrap } from "../../../component/flexWrap";
import { GridWrap } from "../../../component/gridWrap";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

export const ProjectBox = (props: ProjectPropsType) => {
  return (
    <StyledProjectBox>
      <GridWrap templateColumns="1fr 1fr" gap="50px">
        <FlexWrap gap="24px" direction="column" justify="space-between" wrap="wrap" margin="50px 0">
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Link href={"#"}>View Project</Link>
        </FlexWrap>
        <FlexWrap height="524px">
        <Image src={props.src} alt="Project Img"></Image>
        </FlexWrap>
      </GridWrap>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  background-color: #fff;
  max-width: 992px;
  width: 100%;
  height: 524px;
  border-radius: 24px;
  box-shadow: #d8dadd51 0 0 60px;
  overflow: hidden;
  padding-left: 50px;
  
`;
  

const Title = styled.h3`
  font-family: "Playfair";
  font-size: 40px;
  margin: 0 auto;
`;
const Text = styled.p`
  font-size: 18px;
  color: #828282;
  font-family: "Poppins";
  margin: 0 auto;
`;
const Link = styled.a`
  height: 44px;
  width: 150px;
  border: #25282b solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #25282b;
  border-radius: 24px;
  font-size: 16px;
  font-family: "Poppins";
  transition: all 1s ease;
  cursor: pointer;
  &:hover {
    border-color: #025aff;
    transition: all 1s ease;
    box-shadow: #2f78ff7a 0 0 10px 5px;
  }
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
