import styled from "styled-components";
import { Theme } from "../../component/styled/theme";
import { IconInsta } from "../../component/icon/iconInstagram";
import { IconGmail } from "../../component/icon/iconGmail";
import { IconLinkedIN } from "../../component/icon/iconLinkedIN";
import FooterImg from "../../assets/img/footer-wave.svg";


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
  margin-bottom: 230px;
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
`;
const Copyright = styled.small`
  display: flex;
  justify-content: center;
  font-family: "Nunito";
  color: #2c2c2c;
  @media ${Theme.media.mobile} {
    font-size: 10px;
  }
`;

const FooterWave = styled.img`
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
  right: 0;
  width: 100vw;
`;
