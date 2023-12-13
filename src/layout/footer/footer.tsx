import styled from "styled-components";
import { Icon } from "../../component/icon/icon";
import FooterImg from "../../assets/img/footer-wave.svg";

export const Footer = () => {
  return (
    <StyleFooter>
      <SocialIcons>
        <SocialIconItem>
          <SocialIconLink>
            <Icon
              iconId={"instagram"}
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            />
          </SocialIconLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialIconLink>
            <Icon
              iconId={"linkedin"}
              viewBox="-5 -5 48 48"
              width="48px"
              height="48px"
            />
          </SocialIconLink>
        </SocialIconItem>
        <SocialIconItem>
          <SocialIconLink>
            <Icon
              iconId={"mail"}
              viewBox="-3 -8 50 50"
              width="48px"
              height="48px"
            />
          </SocialIconLink>
        </SocialIconItem>
      </SocialIcons>
      <Copyright>Madelyn Torff 2021 </Copyright>
      <FooterWave alt="Yellow Wave" src={FooterImg} />
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
 
`;
const SocialIconItem = styled.li`
`;
const SocialIconLink = styled.a`
 cursor: pointer;
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