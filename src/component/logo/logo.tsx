import React from "react";
import styled from "styled-components";
import { Theme } from "../styled/theme";

export const Logo = () => {
  return <StyledLogo href="#">AS</StyledLogo>;
};

const StyledLogo = styled.a`
  text-decoration: none;
  background-color: rgba(246, 0, 255, 1);
  background-image: linear-gradient(55deg, #0b0eff, #11b4ff, #f713ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  cursor: pointer;
  @media ${Theme.media.mobile} {
    font-size: 30px;

  }
`;
