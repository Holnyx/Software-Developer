import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(
    180deg,
    rgba(11, 137, 255, 1) 0%,
    rgba(11, 137, 255, 1) 20%,
    rgba(246, 0, 255, 1) 100%
  );
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  box-sizing: border-box;
  font-family: "Poppins";
  color: #fff;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    /* outline: solid #02f1f9; */
    transition: all 1s ease;
    filter: hue-rotate(30deg);
    /* box-shadow: #f902f178 0 0 12px 7px; */
      }
`;
