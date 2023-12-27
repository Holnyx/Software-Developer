import React from "react";
import { Logo } from "../../component/logo/logo";
import { Menu } from "./menu/menu";
import { FlexWrap } from "../../component/flexWrap";
import { BlockContainer } from "../../component/container";
import { MenuBurger } from "./menuBurger/menuBurger";
import {S} from "./header_styles"


export const Header: React.FC = () => {
  return (
    <S.Header>
      <BlockContainer>
      <FlexWrap align="center" justify="space-between" height="56px">
      <Logo />
      <Menu />
      <MenuBurger />
      </FlexWrap>
      </BlockContainer>
    </S.Header>
  );
};

