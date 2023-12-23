import styled from "styled-components";

type GridWrapPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  content?: string;
  templateColumns?: string;
  autoFlow?: string
};

export const GridWrap = styled.div<GridWrapPropsType>`
  display: grid;
  gap: ${props => props.gap || "0"};
  align-content: ${props => props.content};
  grid-template-columns: ${props => props.templateColumns};
  grid-auto-flow: ${props => props.autoFlow};
`;
