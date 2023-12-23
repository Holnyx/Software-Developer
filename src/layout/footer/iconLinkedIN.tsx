import styled from "styled-components";
import IconLinkedColor from "../../assets/img/linkedin-color.svg";
import IconLinkedBW from "../../assets/img/linkedin-bw.svg";

export const IconLinkedIN = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconLinkedINBW src={IconLinkedBW} />
        <IconLinkedINColor src={IconLinkedColor} />
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
  width: 56px;
  height: 56px;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    opacity: 1;
  }
`;

const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
