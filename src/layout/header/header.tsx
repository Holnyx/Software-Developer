import React from "react";
import { Logo } from "../../component/logo/logo";
import { Menu } from "./menu/menu";
import { FlexWrap } from "../../component/flexWrap";
import { BlockContainer } from "../../component/container";
import { MenuBurger } from "./menu/menuBurger";
import {S} from "./header_styles"

const items = ["About","Skills", "Project", "Contacts"]

export const Header: React.FC = () => {
  return (
    <S.Header>
      <BlockContainer>
      <FlexWrap align="center" justify="space-between" height="56px">
      <Logo />
      <Menu menuItems = {items}/>
      <MenuBurger menuItems={items}/>
      </FlexWrap>
      </BlockContainer>
    </S.Header>
  );
};

