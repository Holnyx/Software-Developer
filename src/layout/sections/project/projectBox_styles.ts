import { styled } from "styled-components";
import { FlexWrap } from "../../../component/flexWrap";
import { Theme } from "../../../component/styled/theme";


const ProjectBox = styled.div`
  background-color: #1c1c1c;
  max-width: 1500px;
  width: 100%;
  height: 524px;
  border-radius: 24px;
  /* box-shadow: #d8dadd51 0 0 60px; */
  overflow: hidden;
  /* &:hover img{
    transition: all 1s ease;
    filter: blur(5px);
  } */
  @media (max-width: 560px) {
  }
  & > ${FlexWrap} {

    @media (max-width: 560px) {
      flex-wrap: wrap-reverse;
    }
    @media (max-width: 560px) {
      gap: 40px;
    }
    & > ${FlexWrap}:first-of-type {
      padding: 0 50px;
      @media (max-width: 560px) {
        width: auto;
        margin: 0;
      }
    }
    & > ${FlexWrap}:last-of-type {
      overflow: hidden;
      @media (max-width: 560px) {
        height: 218px;
        width: auto;
      }
    }
  }
`;

const Title = styled.h3`
  font-family: "Castoro";
  font-size: 40px;
  margin: 0;
  @media (max-width: 422px) {
    font-size: 30px;
  }
  @media (max-width: 362px) {
    font-size: 25px;
  }
`;
const Text = styled.p`
  font-size: 18px;
  color: #828282;
  font-family: "Poppins";
  margin: 0 auto;
  /* font-size: calc((100vw - 480px) / (1280 - 480) * (18 - 12) + 12px); */

  @media (max-width: 529px) {
    font-size: 16px;
  }
  @media (max-width: 422px) {
    font-size: 14px;
  }
  @media (max-width: 362px) {
    font-size: 12px;
  }
`;
const Link = styled.a`
  height: 44px;
  width: 150px;
  border: #adadad solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adadad;
  border-radius: 24px;
  /* font-size: 16px; */
  font-family: "Poppins";
  transition: all 1s ease;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 362px) {
    font-size: 14px;
    height: 40px;
    width: 146px;
  }
  &:hover {
    border-color: #a40000;
    transition: all 1s ease;
    box-shadow: #ff080879 0 0 10px 5px;
  }
`;
const Image = styled.img`
  width: 448px;
  object-fit: cover;
  transition: all 1s ease;
  @media ${Theme.media.tablet} {
    width: 330px;
  }
  @media (max-width: 560px) {
    width: 550px;

  }
`;


export const S = {
    ProjectBox,
    Title,
    Text,
    Link,
    Image,
}