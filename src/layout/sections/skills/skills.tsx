import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Icon } from "../../../component/icon/icon";
import { StyledTitle } from "../../../component/sectionTitle";
import { Theme } from "../../../component/styled/theme";
import { Fade } from "react-awesome-reveal";

export const Skills = () => {

  return (
    <StyledSkills id="skills">
      <StyledTitle>Skills</StyledTitle>
      <FlexWrap
        align={"center"}
        justify={"space-between"}
        wrap="wrap"
        gap="100px"
        width="800px"
        margin="60px 0 120px 0"
      >
        <Fade cascade={true} damping={.3} triggerOnce={true}>
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
        </Fade>
      </FlexWrap>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > ${FlexWrap} {
    & svg{
      transition: all 1s ease;
      @media ${Theme.media.mobile} {
        width: 80%;
      }
      @media (max-width: 260px) {
        width: 60%;
        gap: 0;
      }
      &:hover{
        /* -webkit-box-reflect: below -10px linear-gradient(transparent 30%, #ffffff1b 70%, #a4a4a413 100%); */
        /* -webkit-filter: drop-shadow( 0  10px 50px rgba(255, 0, 0, 0.856));
        filter: drop-shadow( 0 10px 40px rgba(255, 0, 0, 0.818)); */
       
      }
    }
    @media ${Theme.media.tablet} {
        gap: 80px;
        width: 100%;
        margin: 0;
      }
    @media ${Theme.media.mobile} {
        gap: 30px;
        width: 120%;
      }
      @media (max-width: 260px) {
        gap: 0;
      }
    @media (max-width:1152px) {
      &:last-child{
        justify-content: center;
      }
    }
    
  }
`;

