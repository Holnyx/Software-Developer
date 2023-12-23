import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../../component/styled/theme";
import { FlexWrap } from "../../../component/flexWrap";

export const MenuBurger = (props: { menuItems: Array<string> }) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <StyledMenuBurger>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <ul>
          {props.menuItems.map((item, i) => {
            return (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMenuBurger>
  );
};

const StyledMenuBurger = styled.nav`
  display: none;
  @media ${Theme.media.mobile} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #f9faffb8;
  backdrop-filter: blur(8px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  opacity: 0;
  transition: all 1s ease;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transition: all 1s ease;
      opacity: 1;
    `}
  ul {
    text-shadow: 1px 0 10px #ffffff;
    font-family: "Poppins";
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    gap: 76px;
    padding: 5px 0;
    font-weight: 700;
    cursor: pointer;
    li a{
      color: #0b89ff;
    }
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  border: none;
  width: 200px;
  height: 200px;
  top: -123px;
  right: -100px;
  background-color: transparent;
  display: none;
  z-index: 15;
  cursor: pointer;
  @media ${Theme.media.mobile} {
    display: block;
  }
  span {
    background-color: #0b89ff;
    position: absolute;
    left: 55px;
    bottom: 50px;
    width: 25px;
    height: 2px;
    transition: all 1s ease;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: transparent;
        transform: translateX(20px);
        transition: all 1s ease;
      `}
    &::before {
      content: "";
      display: block;
      background-color: #0b89ff;
      position: absolute;
      width: 25px;
      height: 2px;
      transform: translateY(-8px);
      transition: all 1s ease;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(-10px) translateX(-10px);
          transition: all 1s ease;
        `}
    }
    &::after {
      content: "";
      display: block;
      background-color: #0b89ff;
      position: absolute;
      width: 25px;
      height: 2px;
      transform: translateY(8px);
      transition: all 1s ease;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(10px) translateX(-10px);
          transition: all 1s ease;
        `}
    }
  }
`;
