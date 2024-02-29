import styled from "styled-components";
import { StyledTitle } from "../../../component/sectionTitle";
import { ProjectBox } from "../project/projectBox";
import ImgProj2 from "../../../assets/img/proj2.png";
import ImgProj3 from "../../../assets/img/proj3.webp";
import { GridWrap } from "../../../component/gridWrap";

export const Project = () => {
  return (
    <StyledProject  id="projects">
      <StyledTitle>Projects</StyledTitle>
      <GridWrap gap={"40px"} templateColumns={"repeat(auto-fit, minmax(min(30rem, 100%), 2fr))"}>
        <ProjectBox
          title={"TodoList"}
          text={
            "At the moment the project is under development, but you can follow its development by following the link :)"
          }
          href={"https://holnyx.github.io/myTodoList/"}
          src={ImgProj2}
        />
        <ProjectBox
          title={"Social Network"}
          text={
            "A platform where you can tell your story and communicate with your friends"
          }
          href={undefined}
          src={ImgProj3}
        />
        {/* <ProjectBox
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
        /> */}
        
      </GridWrap>
    </StyledProject>
  );
};

const StyledProject = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
