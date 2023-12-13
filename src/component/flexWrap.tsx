import styled from "styled-components";

type FlexWrapPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  content?: string
};

export const FlexWrap = styled.div<FlexWrapPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  gap: ${props => props.gap || "0"};
  align-content: ${props => props.content || "flex-start"};
`;
