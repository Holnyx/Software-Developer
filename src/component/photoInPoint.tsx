import styled from "styled-components";
import photoTest from "../assets/img/photo.png";

export const PhotoInPoint = () => {
  return (
    <PhotoTest>
      <svg
        width="977"
        height="1177"
        viewBox="0 0 977 1177"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <clipPath id="cP">
            <path
              d="M426.755 0.660905C526.01 5.37687 630.416 42.2627 691.019 119.058C747.053 190.064 709.403 290.888 725.408 379.114C738.276 450.044 786.302 512.961 775.404 584.204C763.332 663.132 724.842 738.453 662.532 790.186C597.271 844.368 510.835 889.895 426.755 873.671C345.261 857.947 319.875 754.823 250.249 710.635C174.069 662.287 41.2528 688.785 6.43092 606.913C-27.6816 526.71 83.9568 456.257 106.308 372.209C131.067 279.108 79.6084 166.633 143.094 93.0241C208.865 16.7636 324.689 -4.1886 426.755 0.660905Z"
              transform="scale(1.1,1.2)"
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
  top: -5%;
  z-index: 1;
  svg {
    background: url(${photoTest}) no-repeat 250% 150%,
      linear-gradient(
        150deg,
        rgba(9, 9, 121, 1) 0%,
        rgba(11, 137, 255, 1) 40%,
        rgba(246, 0, 255, 1) 100%
      );
    background-size: 120% auto;
    background-repeat: no-repeat;
    background-position: 100% 60%;
    clip-path: url("#cP");
  }

  &::before {
    content: "";
    opacity: 0;
    transition: all 1s ease;
    width: 900px;
    height: 800px;
    position: absolute;
    top: 10%;
    right: 0;
    left: 0%;
    border-radius: 50%;
    filter: blur(90px);
    background: radial-gradient(circle, #fb0bffbe 0%, #0bb2ff 80%);
  }
  &:hover::before {
    transition: all 1s ease;
    opacity: 1;
  }
`;
