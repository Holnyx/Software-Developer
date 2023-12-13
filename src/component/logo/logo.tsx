import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <StyledLogo href="#">
     Vahid Navazan
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
   text-decoration: none;
   color: #25282B;
   font-family: "Nunito";
   font-size: 18px;
   cursor: pointer;
`