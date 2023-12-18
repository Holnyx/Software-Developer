import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Icon } from "../../../component/icon/icon";
import { StyledTitle } from "../../../component/sectionTitle";

export const Skills = () => {

  return (
    <StyledSkills>
      <StyledTitle>Skills</StyledTitle>
      <FlexWrap
        align={"center"}
        justify={"space-around"}
        wrap="wrap"
        gap="60px"
      >
        <Icon iconId={"vscode"} />
        <Icon iconId={"js"} />
        <Icon iconId={"css"} />
        <Icon iconId={"html"} />
        <Icon iconId={"SVG"} viewBox={"0 0 500 500"} />
        <Icon iconId={"redux"} />
        <Icon iconId={"github"} />
        <Icon iconId={"git"} />
        <Icon iconId={"react"} />
        <Icon iconId={"sass"} />
        <Icon iconId={"bootstrap"} viewBox={"-5 -7 100 100"} />
        <Icon iconId={"StyledComponents"} viewBox={"10 10 112 112"} />
      </FlexWrap>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
