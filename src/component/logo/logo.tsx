import React from "react";
import styled from "styled-components";
import { Theme } from "../styled/theme";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return <StyledLogo onClick={() => {scroll.scrollToTop()}}>AS</StyledLogo>;
};

const StyledLogo = styled.a`
  text-decoration: none;
  background-color: #9c0000;
  background-image: linear-gradient(55deg, #650000, #ff4d11, #ff9913);
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
