import styled from "styled-components";

export const ConversationMainContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease background-color;
  padding: 0.3em;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverOverlay};
  }

  & span {
    font-size: 1.3em;
    color: ${({ theme }) => theme.colors.heading};
    margin: 1em 0.5em;
  }
`;

export const ConversationImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
