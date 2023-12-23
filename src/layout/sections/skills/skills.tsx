import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Icon } from "../../../component/icon/icon";
import { StyledTitle } from "../../../component/sectionTitle";
import { Theme } from "../../../component/styled/theme";

export const Skills = () => {

  return (
    <StyledSkills>
      <StyledTitle>Skills</StyledTitle>
      <FlexWrap
        align={"center"}
        justify={"space-between"}
        wrap="wrap"
        gap="80px"
      >
        <Icon iconId={"vscode"} />
        <Icon iconId={"js"} viewBox={"0 0 120 120"}/>
        <Icon iconId={"css"} viewBox={"0 0 120 120"}/>
        <Icon iconId={"html"} viewBox={"0 0 120 120"}/>
        <Icon iconId={"SVG"} viewBox={"0 0 500 500"} />
        <Icon iconId={"redux"} />
        <Icon iconId={"github"} viewBox={"-6 -5 100 100"}/>
        <Icon iconId={"git"} />
        <Icon iconId={"react"} viewBox={"0 -8 115 115"}/>
        <Icon iconId={"sass"} viewBox={"0 -15 120 120"}/>
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
  & > ${FlexWrap} {
    @media ${Theme.media.mobile} {
        gap: 35px;
        width: 120%;
      }
    @media (max-width:1152px) {
      &:last-child{
        justify-content: center;
      }
    }
  }
`;

