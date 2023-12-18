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
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gap || "0"};
  align-content: ${props => props.content};
  grid-template-columns: ${props => props.templateColumns};
  grid-auto-flow: ${props => props.autoFlow};
`;
