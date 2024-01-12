import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import { Theme } from "../../../component/styled/theme";

const MenuBurger = styled.nav`
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
  background-color: #0d0d0db8;
  will-change: transform;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  top: 0;
  left: 0;
  /* left: 120%; */
  transition: opacity 1s;
  right: 0;
  bottom: 0;
  opacity: 0;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
    display: flex;
      /* transition: opacity 1s, z-index 1s; */
      /* left: 0; */
      opacity: 1;
    `}
  ul {
    text-shadow: 1px 0 20px #2c0000;
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
  }
`;
const NavLink = styled(Link)`
  color: #740000;
  /* transition: all 1s ease; */
  &:hover,
  &.active {
    background-image: linear-gradient(180deg, #650000, #ff4d11, #ff9913);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &::after {
    padding-top: 1.5px;
    background: linear-gradient(
      90deg,
      rgba(11, 231, 255, 0.0046612394957983305) 0%,
      rgba(255, 1, 1, 0.895) 50%,
      rgba(1, 128, 255, 0) 100%
    );
    width: 100%;
    border-radius: 2px;
    content: "";
    position: relative;
    display: block;
    margin: auto;
    right: 0;
    left: 0;
    opacity: 0;
    transition: all 1s ease;
  }
  &:hover::after,
  &.active::after {
    opacity: 1;
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
    background-color: #c70000;
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
      background-color: #c70000;
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
      background-color: #c70000;
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

export const S = {
  MenuBurger,
  MobileMenuPopup,
  NavLink,
  BurgerButton,
};
