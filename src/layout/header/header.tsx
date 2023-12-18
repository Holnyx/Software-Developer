import React from "react";
import styled from "styled-components";
import { Logo } from "../../component/logo/logo";
import { Menu } from "../../component/menu/menu";
import { FlexWrap } from "../../component/flexWrap";
import { BlockContainer } from "../../component/container";

const items = ["About", "Project", "Contacts"]

export const Header = () => {
    // const [scroll, setScroll] = useState(0);
  // useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // const handleScroll = () => {
  //     setScroll(window.scrollY);
  // };
  // console.log(window.scrollY)
  // className={`${scroll > 154 ? ' _visible' : ''} `}
  return (
    <StyledHeader>
      <BlockContainer>
      <FlexWrap align="center" justify="space-between">
      <Logo />
      <Menu menuItems = {items}/>
      </FlexWrap>
      </BlockContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 5;
  right: 0;
  left: 0;
  backdrop-filter:  blur(6px);
  /* border: 1px solid rgba(255, 255, 255, 0.094); */
`;
