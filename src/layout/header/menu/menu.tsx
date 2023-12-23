import React from "react";
import styled from "styled-components";
import { Theme } from "../../../component/styled/theme";


export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, i) => {
          return (
            <li key={i}>
              <a href="{#}">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    text-shadow:1px 0 13px  #050068;
    font-family: "Poppins";
    font-size: 16px;
    display: flex;
    list-style-type: none;
    gap: 76px;
    padding: 5px 0;
    li > a {
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;
    }
  }
  @media ${Theme.media.mobile} {
    display: none;
  }
`;
