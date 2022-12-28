import styled from "styled-components";

export const MainWindowContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 85vh;
  margin-bottom: 1em;
`;

export const FriendListContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.cardBg};
  height: 100%;
  padding: 1em;
  border-radius: 10px;
  flex: 1;

  @media (max-width: 1042px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 50%;
    z-index: ${({ toggle }) => (toggle ? "0" : "20")};

    transform: ${({ toggle }) =>
      toggle ? "translateX(-100%)" : "translateX(0)"};
  }

  @media (max-width: 490px) {
    width: 80%;
  }
`;

export const ConvoHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OpenCloseBtn = styled.div`
  display: none;
  position: ${({ toggle }) => (toggle ? "absolute" : "static")};
  top: 20%;
  right: -30px;
  color: red;
  width: 35px;
  height: 35px;
  padding: ${({ toggle }) => (toggle ? "1em" : "none")};
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.colors.cardBg};
  cursor: pointer;

  @media (max-width: 1042px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OpenCloseOnlineFriends = styled.div`
  display: none;
  position: ${({ toggle }) => (toggle ? "absolute" : "static")};
  top: 0;
  left: -30px;
  color: red;
  width: 35px;
  height: 35px;
  padding: ${({ toggle }) => (toggle ? "1em" : "none")};
  border-radius: 10px 0 0 10px;
  background: ${({ theme }) => theme.colors.cardBg};
  cursor: pointer;

  @media (max-width: 1042px) {
    top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FriendListWrapper = styled.div`
  border-right: 2px solid ${({ theme }) => theme.colors.hoverOverlay};
`;

export const ChatBoxContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  flex: 2;

  @media (max-width: 1042px) {
    padding: 0 2em;
  }
`;

export const ChatBoxMessageBox = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.hoverOverlay};
  border-radius: 10px;
  margin-bottom: 0.3em;
  padding: 1em;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  overflow-y: auto;
`;

export const ChatBoxInput = styled.input`
  width: 100%;
  background: none;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.hoverOverlay};
  color: ${({ theme }) => theme.colors.text};
  padding: 1em;
  outline: none;
`;

export const OnlineUsers = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  heigth: 100%;
  padding: 1em;
  border-radius: 10px;
  flex: 1;

  position: relative;

  @media (max-width: 1042px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    z-index: 20;

    transform: ${({ toggle }) =>
      toggle ? "translateX(100%)" : "translateX(0)"};
  }

  @media (max-width: 490px) {
    width: 80%;
  } ;
`;

export const OnlineUsersWrapper = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.hoverOverlay};
`;
