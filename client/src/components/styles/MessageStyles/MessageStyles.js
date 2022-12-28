import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${({ self }) => (self ? "row-reverse" : null)};
  margin: 0.5em 0;
  overflow-wrap: anywhere;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5em;
  border-radius: 10px;
  min-width: 100px;
  background: ${({ theme }) => theme.colors.hoverOverlay};
`;

export const MessageImg = styled.img`
  height: 25px;
  width: 25px;
  margin: 0.5em 0.3em;
  border-radius: 50%;
`;

export const MsgStamp = styled.p`
  position: absolute;
  margin: 0.1em 0.5em;
  top: 0;
  right: 0;
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.heading};
`;
