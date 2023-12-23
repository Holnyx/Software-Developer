import styled from "styled-components";
import { Theme } from "../../component/styled/theme";

const Header = styled.header`
  position: fixed;
  z-index: 5;
  right: 0;
  left: 0;
  backdrop-filter:  blur(8px);
  @media ${Theme.media.mobile} {
    backdrop-filter: none;

  }
`;

export const S = {
    Header,
}