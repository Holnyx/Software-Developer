import styled from "styled-components";
import "./App.css";
import { Header } from "./layout/header/header";
import { Main } from "./layout/sections/main/main";
import { Skills } from "./layout/sections/skills/skills";
import { Project } from "./layout/sections/project/project";
import { Contact } from "./layout/sections/contact/contact";
import { Footer } from "./layout/sections/footer/footer";
import FooterImg from "./assets/img/footer-wave.svg"
import PhotoSvg from "./assets/img/Vector.svg"


function App() {
  return (
    <StyledApp className="App">
      {/* <PhotoWave src={PhotoSvg}/> */}
      <BlockContainer>
        <Header />
        <Main />
        <Skills />
        <Project/>
        <Contact/>
        <Footer/>
      </BlockContainer>
<FooterWave src={FooterImg}/>
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
  position: relative;
  padding: 20px;
`;

const FooterWave = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`
const PhotoWave = styled.img`
  position: absolute;
  background-color: yellow;


`
