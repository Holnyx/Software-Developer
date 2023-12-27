import React, { useEffect, useState } from "react";
import { items } from "../menu/menu";
import { S } from "./menuBurger_styles";

export const MenuBurger: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  useEffect(()=>{
  menuIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
  },[menuIsOpen])
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MenuBurger>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <ul>
          {items.map((item, i) => {
            return (
              <li key={i}>
             <S.NavLink activeClass="active" spy={true} to={item.href} smooth="true">{item.title}</S.NavLink>
              </li>
            );
          })}
        </ul>
      </S.MobileMenuPopup>
    </S.MenuBurger>
  );
};

