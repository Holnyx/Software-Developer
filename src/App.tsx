import styled from "styled-components";
import "./App.css";
import { Header } from "./layout/header/header";
import { Main } from "./layout/sections/main/main";
import { Skills } from "./layout/sections/skills/skills";
import { Project } from "./layout/sections/project/project";
import { Contact } from "./layout/sections/contact/contact";
import { Footer } from "./layout/footer/footer";
import { BlockContainer } from "./component/container";

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <BlockContainer>
        <Main />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </BlockContainer>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: #0b0b0b;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
