import styled from "styled-components";
import IconLinkedColor from "../../assets/img/linkedin-color.svg";

export const IconLinkedIN = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="#">
        <IconLinkedINColor src={IconLinkedColor} alt="LinkedIn Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconLinkedINColor = styled.img`
  width: 56px;
  height: 56px;
  transition: all 0.5s ease;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;

const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
