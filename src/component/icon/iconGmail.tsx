import styled from "styled-components";
import IconGmailColor from "../../assets/img/gmail-color.svg";
import IconGmailBW from "../../assets/img/gmail-bw .svg";

export const IconGmail = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconGmailBlack src={IconGmailBW} alt="Gmail Icon"/>
        <IconGmailCol src={IconGmailColor} alt="Gmail Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconGmailBlack = styled.img`
  position: absolute;
  width: 56px;
  height: auto;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    opacity: 0;
  }
`;
const IconGmailCol = styled.img`
  width: 56px;
  height: auto;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
