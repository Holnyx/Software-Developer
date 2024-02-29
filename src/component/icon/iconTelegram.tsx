import styled from "styled-components";
import IconTelegramColor from "../../assets/img/telegram.svg";

export const IconTelegramC = () => {
  return (
    <SocialIconItem>
      <SocialIconLink href="https://t.me/Ahacmu" target="_blank">
        <IconTelegram src={IconTelegramColor} alt="Telegram Icon"/>
      </SocialIconLink>
    </SocialIconItem>
  );
};

const IconTelegram = styled.img`
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
