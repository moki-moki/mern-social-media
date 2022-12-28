import styled from "styled-components";

export const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 1em;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

export const FooterText = styled.p``;
