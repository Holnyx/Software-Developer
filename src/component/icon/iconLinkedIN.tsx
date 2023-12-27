import styled from "styled-components";
import IconLinkedColor from "../../assets/img/linkedin-color.svg";
import IconLinkedBW from "../../assets/img/linkedin-bw.svg";

export const IconLinkedIN = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconLinkedINBW src={IconLinkedBW} alt="LinkedIn Icon"/>
        <IconLinkedINColor src={IconLinkedColor} alt="LinkedIn Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconLinkedINBW = styled.img`
  position: absolute;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0;
    transition: all 0.5s ease;
  }
`;
const IconLinkedINColor = styled.img`
  width: 55px;
  height: 55px;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    opacity: 1;
  }
`;

const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
