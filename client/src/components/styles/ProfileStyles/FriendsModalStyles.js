import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 20;
`;

export const FriendsModalMainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1em;
  z-index: 22;

  @media (max-width: 752px) {
    width: 95%;
    height: 95%;
  }
`;

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transition: ease background-color 0.3s;
  padding: 0.5em 0;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverOverlay};
  }
`;

export const FriendNameAndImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ModalCloseContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: flex-end;
  padding: 0.3em 0;
`;
