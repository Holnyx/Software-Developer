import styled from "styled-components";
import FooterImg from "../../assets/img/footer-wave.svg";
import IconLinkedColor from "../../assets/img/linkedin-color.svg";
import IconGmailColor from "../../assets/img/gmail-color.svg";
import IconInstaColor from "../../assets/img/instagram-color.svg";
import IconLinkedBW from "../../assets/img/linkedin-bw.svg";
import IconGmailBW from "../../assets/img/gmail-bw .svg";
import IconInstaBW from "../../assets/img/instagram-bw.svg";

export const Footer = () => {
  return (
    <StyleFooter>
      <SocialIcons>
        <SocialIconItem>
          <SocialIconLink href="#">
            <IconInstaBlack src={IconInstaBW} />
            <IconInsta src={IconInstaColor} />
          </SocialIconLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialIconLink href="#">
            <IconGmailBlack src={IconGmailBW} />
            <IconGmail src={IconGmailColor} />
          </SocialIconLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialIconLink href="#">
            <IconLinkedINBW src={IconLinkedBW} />
            <IconLinkedINColor src={IconLinkedColor} />
          </SocialIconLink>
        </SocialIconItem>
      </SocialIcons>
      <Copyright>© 2023 Anastasia Smirnova, All Rights Reserved. </Copyright>
      <FooterWave alt="Gradient Wave" src={FooterImg} />
    </StyleFooter>
  );
};

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 295px;
`;

const SocialIcons = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0 0 32px 0;
  gap: 24px;
  z-index: 2;
  position: static;
  cursor: pointer;
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a`
 
`;
const Copyright = styled.small`
  display: flex;
  justify-content: center;
  font-family: "Nunito";
  color: #828282;
`;
const FooterWave = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  left: 0;
  right: 0;
`;
const IconInstaBlack = styled.img`
  position: absolute;
  transition: all .5s ease;
  &:hover {
    opacity: 0;
  }
`;
const IconInsta = styled.img`
  width: 56px;
  height: 56px;
  &:hover {
    opacity: 1;
    transition: all .5s ease;
  }
`;
const IconGmailBlack = styled.img`
  position: absolute;
  width: 56px;
  height: auto;
  transition: all .5s ease;
  &:hover {
    transition: all .5s ease;
    opacity: 0;
  }
`;
const IconGmail = styled.img`
  width: 56px;
  height: auto;
  opacity: 0;
  transition: all .5s ease;
  &:hover {
    opacity: 1;
    transition: all .5s ease;
  }
`;
const IconLinkedINBW = styled.img`
  position: absolute;
  transition: all .5s ease;
  &:hover {
    opacity: 0;
    transition: all .5s ease;
  }
`;
const IconLinkedINColor = styled.img`
  width: 56px;
  height: 56px;
  transition: all .5s ease;
  &:hover {
    transition: all .5s ease;
    opacity: 1;
  }
`;
