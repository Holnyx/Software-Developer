import styled from "styled-components";
import IconInstaColor from "../../assets/img/instagram-color.svg";

export const IconInsta = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="https://www.instagram.com/ahacmu/" target="_blank">
        <IconInstaCol src={IconInstaColor} alt="Instagram Icon" />
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconInstaCol = styled.img`
  width: 55px;
  height: 55px;
  transition: all 0.5s ease;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;
const SocialIconItem = styled.li``;
const SocialIconLink = styled.a``;
