import styled from "styled-components";
import "./App.css";
import { Header } from "./layout/header/header";
import { Main } from "./layout/sections/main/main";
import { Skills } from "./layout/sections/skills/skills";

function App() {
  return (
    <StyledApp className="App">
      <BlockContainer>
        <Header />
        <Main />
        <Skills />
      </BlockContainer>
    </StyledApp>
  );
}

export default App;

const BlockContainer = styled.div`
  max-width: 1200px;
`;
const StyledApp = styled.div`
  background-color: #f9faff;
  display: flex;
  justify-content: center;
`;
