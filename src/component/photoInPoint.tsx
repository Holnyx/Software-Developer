import styled from "styled-components";
import photoTest from "../assets/img/photo.png";
import { Theme } from "./styled/theme";

export const PhotoInPoint = () => {
  return (
    <PhotoTest>
      <svg
        viewBox="0 0 977 1177"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <clipPath id="cP">
            <path
              d="M426.755 0.660905C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.453 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660905Z"
              fill="none"
              stroke="black"
            />
          </clipPath>
        </g>
      </svg>
    </PhotoTest>
  );
};

export const PhotoTest = styled.div`
  position: absolute;
  left: 55%;
  top: -6%;
  clip-path: url("#cP");
  -webkit-clip-path: url("#cP");
  @media (max-width: 1350px) {
    left: 50%;
  }
  @media (max-width: 1228px) {
    left: 45%;
  }
  @media (max-width: 1115px) {
    left: 40%;
  }
  @media (max-width: 1079px) {
    left: 40%;
    top: -5%;
  }
  @media (max-width: 1030px) {
    left: 35%;
  }
  @media (max-width: 768px) {
    top: -6%;
  }
  @media ${Theme.media.mobile}{
    display: none;
  }
  svg {
    width: 976px;
    height: 1176px;
    background: url(${photoTest}) no-repeat 250% 150%,
    linear-gradient(60deg, #440000 20%, rgba(255,0,0,1) 70%, rgba(255,211,0,1) 100%);
    background-size: 120% auto;
    background-repeat: no-repeat;
    background-position: 100% 60%;
    @media ${Theme.media.tablet} {
      width: 576px;
      height: 924px;
      background-size: 100% auto;
    }
    @media (max-width: 1115px) {
      opacity: 0.3;
    }
    & > g > clipPath > path {
      -webkit-transform: scale(1.2, 1.3);
      transform: scale(1.2, 1.3);
      @media ${Theme.media.tablet} {
        transform: scale(0.7, 0.8);
      }
    }
  }
  /* &::before {
    content: "";
    opacity: 0;
    transition: all 1s ease;
    width: 900px;
    height: 900px;
    position: absolute;
    top: 10%;
    right: 0;
    left: 0;
    border-radius: 50%;
    -webkit-filter: blur(90px);
    filter: blur(90px);
    background: radial-gradient(circle, #350000bd 0%, #a00000 80%);
    @media (max-width: 1115px) {
      left: 40%;
      width: 1500px;
    }
    @media ${Theme.media.tablet} {
      opacity: 1;
      top: 5%;
    }
  }
  &:hover::before {
    transition: all 1s ease;
    opacity: 1; */
    /* @media (max-width: 1115px) {
      transition: 1s;
    } */
  /* } */
`;
