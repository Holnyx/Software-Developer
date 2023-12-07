import styled from "styled-components";
import { Icon } from "../../../component/icon/icon";

export const Footer = () => {
  return (
    <StyleFooter>
      <Icon iconId={"instagram"} viewBox="0 0 48 48" width="48px" height="48px"/>
      <Icon iconId={"linkedin"} viewBox="-5 -5 48 48" width="48px" height="48px"/>
      <Icon iconId={"mail"} viewBox="-3 -8 50 50" width="48px" height="48px"/>
    </StyleFooter>
  );
};

const StyleFooter = styled.section`
display: flex;
justify-content: center;
gap: 24px;
margin-bottom: 295px;
`;
