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
    font-family: "Nunito";
    font-size: 18px;
    display: flex;
    list-style-type: none;
    gap: 75.72px;
    li > a{
      text-decoration: none;
      color: #25282b;
      cursor: pointer;
    }
  }
`;
