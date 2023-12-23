import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: #25282b;
  text-align: center;
  margin: 144px 0 80px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  font-family: "Playfair";
  /* text-transform: uppercase; */
  
  &::after {
    padding-top: 4px;
    background: linear-gradient(90deg, rgba(11,231,255,0.0046612394957983305) 0%, rgba(1,128,255,0.8954175420168067) 50%, rgba(1,128,255,0) 100%);
    width: 80%;
    border-radius: 2px;
    content: "";
    position: relative;
    display: block;
    margin-top: 4px;
    margin: auto;
    right: 0;
    left: 0;
  }
 
`;
