import React from "react";
import styled from "styled-components";
import { Logo } from "../../component/logo/logo";
import { Menu } from "../../component/menu/menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
`;
