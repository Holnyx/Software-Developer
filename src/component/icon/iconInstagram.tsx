import styled from "styled-components";
import IconInstaColor from "../../assets/img/instagram-color.svg";
import IconInstaBW from "../../assets/img/instagram-bw.svg";

export const IconInsta = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconInstaBlack src={IconInstaBW} alt="Instagram Icon"/>
        <IconInstaCol src={IconInstaColor} alt="Instagram Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconInstaBlack = styled.img`
  position: absolute;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0;
  }
`;
const IconInstaCol = styled.img`
  width: 55px;
  height: 55px;
  &:hover {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
