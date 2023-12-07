import styled from "styled-components";
import React from "react";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
};

export const ProjectBox = (props: ProjectPropsType) => {
  return (
    <StyledProjectBox>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={"#"}>View Project</Link>
      <Image src={props.src} alt=""></Image>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  background-color: beige;
  max-width: 992px;
  max-height: 524px;
  height: 100%;
  width: 100%;
  border-radius: 24px;
`;

const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a`
  padding: 8px 24px;
  border: #fff solid;
`;
const Image = styled.img`
  height: 100%;
  width: 496px;
  object-fit: cover;
`;
