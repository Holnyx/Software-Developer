import React from "react";
import styled from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Button } from "../../../component/button";
import yellowPoint from "../../../assets/img/test.svg";
import photoTest from "../../../assets/img/photo.png";
import { PhotoInPoint, PhotoTest } from "../../../component/photoInPoint";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrap direction="row">
        <TextContent>
          <h1>Software Developer</h1>
          <span>
            Hello, <br />
            my name is <strong>Anastasia Smirnova</strong>
          </span>
          <br />
          <span>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </span>
          <br />
          <FlexWrap justify="flex-start" gap="28px">
            <Button>Projects</Button>
            <LinkedInStyledButton href="#">LinkedIn</LinkedInStyledButton>
          </FlexWrap>
        </TextContent>
        <PhotoInPoint />
      </FlexWrap>
    </StyledMain>
  );
};
const StyledMain = styled.div`
  margin: 200px 0 150px 0;
`;
const TextContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  position: relative;
  z-index: 2;
  h1 {
    color: rgba(11, 137, 255, 1);
    text-transform: uppercase;
    margin: 0;
    font-size: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
  }
  span {
    font-size: 24px;
    color: #828282;
    font-family: "Roboto";
    & > strong {
      background-size: 400% 400%;
      animation: gradient 8s ease-in-out infinite;
      background-color: #0b0eff;
      background-image: linear-gradient(
        55deg,
        #0b0eff,
        #11b4ff,
        #f713ff,
        #11b4ff,
        #0b0eff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @keyframes gradient {
        0% {
          background-position: 0 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0 50%;
        }
      }
    }
    &:first-of-type {
      font-size: 64px;
      color: #25282b;
      font-weight: 700;
    }
    &:last-of-type {
      line-height: 36px;
      font-family: "Poppins";
    }
  }
`;
const LinkedInStyledButton = styled.a`
  margin-right: auto;
  padding: 6px 24px;
  border: solid #25282b 2px;
  border-radius: 8px;
  font-size: 18px;
  text-decoration: none;
  color: #25282b;
  font-family: "Poppins";
  transition: all 1s ease;
  &:hover {
    transition: all 1s ease;
    border-color: #0288D1;
    color: #fff;
    box-shadow: inset #0288D1 0 0 100px 50px;
  }
`;
