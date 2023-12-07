import React from "react";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Icon } from "../../../component/icon/icon";
import { StyledTitle } from "../../../component/sectionTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <StyledTitle>Skills</StyledTitle>
      <FlexWrap align={"center"} justify={"space-around"} wrap="wrap" gap="74px">
        <Icon iconId={"vscode"} />
        <Icon iconId={"js"} />
        <Icon iconId={"css"} />
        <Icon iconId={"html"} />
        <Icon iconId={"greensock"} viewBox={"0 5 130 100"}/>
        <Icon iconId={"redux"} />
        <Icon iconId={"github"} />
        <Icon iconId={"git"} />
        <Icon iconId={"react"} />
        <Icon iconId={"sass"} />
        <Icon iconId={"bootstrap"} viewBox={"-5 -7 100 100"} />
        <Icon iconId={"tailwind"} viewBox={"10 10 112 112"} />
      </FlexWrap>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;
