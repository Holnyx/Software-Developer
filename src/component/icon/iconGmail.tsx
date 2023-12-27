import styled from "styled-components";
import IconGmailColor from "../../assets/img/gmail-color.svg";

export const IconGmail = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconGmailCol src={IconGmailColor} alt="Gmail Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconGmailCol = styled.img`
  width: 56px;
  height: auto;
  transition: all 0.5s ease;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
    transition: all 0.5s ease;
  }
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
