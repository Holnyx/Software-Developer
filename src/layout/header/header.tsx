import React from "react";
import styled from "styled-components";
import { Logo } from "../../component/logo/logo";
import { Menu } from "../../component/menu/menu";

const items = ["About", "Project", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems = {items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 5;
`;
