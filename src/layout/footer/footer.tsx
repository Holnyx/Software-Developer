import styled from "styled-components";
import FooterImg from "../../assets/img/footer-wave.svg";
import { Theme } from "../../component/styled/theme";
import { IconInsta } from "./iconInstagram";
import { IconGmail } from "./iconGmail";
import { IconLinkedIN } from "./iconLinkedIN";

export const Footer = () => {
  return (
    <StyleFooter>
      <SocialIcons>
        <IconInsta />
        <IconGmail />
        <IconLinkedIN />
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
  margin-bottom: 290px;
  @media (max-width: 965px) {
    margin-bottom: 150px;
  }
  @media ${Theme.media.mobile} {
    margin-bottom: 110px;
  }
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
const Copyright = styled.small`
  display: flex;
  justify-content: center;
  font-family: "Nunito";
  color: #828282;
  @media ${Theme.media.mobile} {
    font-size: 10px;
  }
`;
const FooterWave = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  right: 0;
  width: 100vw;
`;
