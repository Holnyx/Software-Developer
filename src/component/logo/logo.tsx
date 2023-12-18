import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return <StyledLogo href="#">Anastasia Smirnova</StyledLogo>;
};

const StyledLogo = styled.a`
  text-decoration: none;
  background-color: rgba(246, 0, 255, 1);
  background-image: linear-gradient(55deg, #0b0eff, #11b4ff, #f713ff, #0b0eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Roboto";
  font-size: 20px;
  cursor: pointer;
`;
