import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { ProjectBox } from "../project/projectBox";
import ImgProj1 from "../../../assets/img/proj1.jpeg";
import ImgProj2 from "../../../assets/img/proj2.webp";
import ImgProj3 from "../../../assets/img/proj3.webp";
import { GridWrap } from "../../../component/gridWrap";
import { FlexWrap } from "../../../component/flexWrap";

export const Project = () => {
  return (
    <StyledProject>
      <StyledTitle>Project</StyledTitle>
      <GridWrap gap={"40px"} templateColumns="repeat(auto-fit, minmax(min(20rem, 100%), 2fr))">
        <ProjectBox
          title={"Project Name"}
          text={
            "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
          }
          src={ImgProj2}
        />
        <ProjectBox
          title={"Project Name"}
          text={
            "What was your role, your deliverables, if the project was personal, freelancing."
          }
          src={ImgProj2}
        />
        <ProjectBox
          title={"Project Name"}
          text={
            "You can also add in this description the type of the project, if it was for web, mobile, electron."
          }
          src={ImgProj3}
        />
        <ProjectBox
          title={"Project Name"}
          text={
            "You can also add in this description the type of the project, if it was for web, mobile, electron."
          }
          src={ImgProj3}
        />
        
      </GridWrap>
    </StyledProject>
  );
};

const StyledProject = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
