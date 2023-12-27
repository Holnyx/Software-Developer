import styled from "styled-components";
import { Theme } from "../../component/styled/theme";

const Header = styled.header`
  position: fixed;
  height: 14%;
  z-index: 5;
  right: 0;
  left: 0;
  background: linear-gradient(to bottom, #0d0d0d, transparent 100%);
  /* backdrop-filter:  blur(8px); */
  @media ${Theme.media.mobile} {
    backdrop-filter: none;
    background: linear-gradient(to bottom, #0d0d0d, transparent 100%)
  }
`;

export const S = {
    Header,
}