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
  max-width: 1200px;
  width: 100%;
  padding: 12px 240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  right: 0;
  left: 0;
  backdrop-filter:  blur(8px);
`;
