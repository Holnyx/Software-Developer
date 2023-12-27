import React from "react";
import styled from "styled-components";
import { Theme } from "../../../component/styled/theme";
import { Link } from "react-scroll";

export const items = [
  {
    title: "About",
    href: "about"
  },
  {
    title: "Skills",
    href: "skills"
  },
  {
    title: "Projects",
    href: "projects"
  },
  {
    title: "Contacts",
    href: "contacts"
  },
]

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <NavLink activeClass="active" spy={true} to={item.href} smooth="true">{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    font-family: "Poppins";
    font-size: 16px;
    display: flex;
    list-style-type: none;
    gap: 76px;
    padding: 5px 0;
  
  }
  @media ${Theme.media.mobile} {
    display: none;
  }
`;
const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: all 1s ease;
  &:hover, &.active{
    color: rgba(255, 1, 1, 0.895);
    /* background-image: linear-gradient(180deg, #800000, #ff4d11, #ff9913);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
  &::after {
    padding-top: 1.5px;
    background: linear-gradient(90deg, rgba(11,231,255,0.0046612394957983305) 0%, rgba(255, 1, 1, 0.895) 50%, rgba(1,128,255,0) 100%);
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
  &:hover::after, &.active::after{
    opacity: 1;
    
  }
`;
