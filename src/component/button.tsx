import styled from "styled-components";
import { Theme } from "./styled/theme";

export const Button = styled.button`
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
    -webkit-filter: drop-shadow( 0 10px 40px rgba(255, 0, 0, 0.818));
    filter: drop-shadow( 0 10px 40px rgba(255, 0, 0, 0.818));
      }
      @media ${Theme.media.tablet} {
        -webkit-filter: drop-shadow( 0 0 30px rgba(255, 0, 0, 0.818));
    filter: drop-shadow( 0 0 30px rgba(255, 0, 0, 0.818));
      }
`;
