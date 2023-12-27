import { styled } from "styled-components";
import { Theme } from "../../../component/styled/theme";
import { Link } from "react-scroll";



const Main = styled.section`
  margin: 0 0 220px 0;
  padding: 180px 0 0 0;
  @media ${Theme.media.mobile} {
    padding: 120px 0 0px 0;
    margin: 0 0 50px 0;
  }
`;
const TextContent = styled.div`
  max-width: 610px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  position: relative;
  z-index: 2;
  @media (max-width: 1016px) {
    max-width: 500px;
      }
  h1 {
    color: #b70404;
    text-transform: uppercase;
    margin: 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: calc( (100vw - 480px)/(1200 - 480) * (20 - 16) + 16px);
  }
  span {
    font-size: 24px;
    line-height: 150%;
    font-family: "Poppins";
    color: #777;
    font-size: calc( (100vw - 480px)/(1200 - 480) * (20 - 16) + 16px);
    & > b {
      background-size: 400% 400%;
      animation: gradient 8s ease-in-out infinite;
      background-color: #0b0eff;
      background-image: linear-gradient(
        55deg,
        #5a0000,
        #ff1111,
        #ff9113,
        #ff1111,
        #5a0000
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
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
      /* font-size: 64px; */
      color: #D9D9D9;
      font-weight: 700;
      font-family: "Roboto";
      line-height: 120%;
      font-size: calc( (100vw - 480px)/(1200 - 480) * (58 - 46) + 46px);
    }
  }
`;
const LinkedInStyledButton = styled.a`
  margin-right: auto;
  padding: 6px 24px;
  border: solid #777 2px;
  border-radius: 8px;
  font-size: 18px;
  text-decoration: none;
  color: #777777;
  font-family: "Poppins";
  transition: all 1s ease;
  &:hover {
    transition: all .6s ease;
    border-color: #0288d1;
    color: #fff;
    box-shadow: inset #0288d1 0 0 100px 50px;
    filter: drop-shadow( 0 10px 30px #0288d1);
  }
`;
export const Button = styled(Link)`
  background: linear-gradient(
    180deg,
    #eaa400 0%,
    #e85405 20%,
    #780000 100%
  );
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-family: "Poppins";
  color: #c6c6c6;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    transition: all 1s ease;
    filter: drop-shadow( 0 10px 40px rgba(255, 0, 0, 0.818));
      }
`;


export const S ={
    Main,
    TextContent,
    LinkedInStyledButton,
    Button,
}