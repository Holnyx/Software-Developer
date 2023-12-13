import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { ProjectBox } from "../project/projectBox";
import { FlexWrap } from "../../../component/flexWrap";
import ImgProj1 from "../../../assets/img/proj1.jpeg";
import ImgProj2 from "../../../assets/img/proj2.webp";
import ImgProj3 from "../../../assets/img/proj3.webp";

export const Project = () => {
  return (
    <StyledProject>
      <StyledTitle>Project</StyledTitle>
      <FlexWrap direction={"row"}  gap={"40px"}>
        <ProjectBox
          title={"Project Name"}
          text={
            "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
          }
          src={ImgProj1}
        />
        <ProjectBox
          title={"Project Name"}
          text={
            "What was your role, your deliverables, if the project was personal, freelancing."
          }
          src={ImgProj2}
        />
      </FlexWrap>
      <FlexWrap direction={"row"} gap={"40px"}>
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
      </FlexWrap>
    </StyledProject>
  );
};

const StyledProject = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
