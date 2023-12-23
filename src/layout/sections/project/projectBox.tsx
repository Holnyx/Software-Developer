import styled from "styled-components";
import React from "react";
import { FlexWrap } from "../../../component/flexWrap";
import { Theme } from "../../../component/styled/theme";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

export const ProjectBox = (props: ProjectPropsType) => {
  return (
    <StyledProjectBox>
      <FlexWrap gap="50px">
        <FlexWrap
          gap="24px"
          direction="column"
          justify="space-between"
          wrap="wrap"
          margin="50px 0"
        >
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Link href={"#"}>View Project</Link>
        </FlexWrap>
        <FlexWrap height="524px">
          <Image src={props.src} alt="Project Img"></Image>
        </FlexWrap>
      </FlexWrap>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  background-color: #fff;
  max-width: 1500px;
  width: 100%;
  height: 524px;
  border-radius: 24px;
  box-shadow: #d8dadd51 0 0 60px;
  overflow: hidden;
  padding-left: 50px;
  @media (max-width: 560px) {
    padding-right: 50px;
  }
  & > ${FlexWrap} {
    @media (max-width: 560px) {
      flex-wrap: wrap-reverse;
    }
    @media (max-width: 560px) {
      gap: 40px;
    }
    & > ${FlexWrap}:first-of-type {
      @media (max-width: 560px) {
        margin: 0;
      }
    }
    & > ${FlexWrap}:last-of-type {
      @media (max-width: 560px) {
        height: 218px;
      }
    }
  }
`;

const Title = styled.h3`
  font-family: "Playfair";
  font-size: 40px;
  margin: 0;
  @media (max-width: 422px) {
    font-size: 30px;
  }
  @media (max-width: 362px) {
    font-size: 25px;
  }
`;
const Text = styled.p`
  font-size: 18px;
  color: #828282;
  font-family: "Poppins";
  margin: 0 auto;
  /* font-size: calc((100vw - 480px) / (1280 - 480) * (18 - 12) + 12px); */

  @media (max-width: 529px) {
    font-size: 16px;
  }
  @media (max-width: 422px) {
    font-size: 14px;
  }
  @media (max-width: 362px) {
    font-size: 12px;
  }
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
  /* font-size: 16px; */
  font-family: "Poppins";
  transition: all 1s ease;
  cursor: pointer;
  font-size: calc((100vw - 480px) / (1280 - 480) * (16 - 14) + 14px);

  @media (max-width: 362px) {
    /* font-size: 14px; */
    height: 40px;
    width: 146px;
  }
  &:hover {
    border-color: #025aff;
    transition: all 1s ease;
    box-shadow: #2f78ff7a 0 0 10px 5px;
  }
`;
const Image = styled.img`
  width: 448px;
  object-fit: cover;
  @media ${Theme.media.tablet} {
    width: 330px;
  }
  @media (max-width: 560px) {
    width: 550px;
    position: relative;
    right: 20%;
  }
`;
