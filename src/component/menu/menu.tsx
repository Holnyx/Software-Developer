import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, i) => {
          return (
            <li key={i}>
              <a href="#">{item}</a>
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
    li > a {
      color: #000;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
