import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
`;

export const NavLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  font-size: 1.5em;
`;

export const Logo = styled.img``;

export const NavUserContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const NavUserImg = styled.img`
  height: 30px;
  width: 30px;
  margin: 0 1em;
  border-radius: 50%;
`;

export const NavUsername = styled.h3`
  transition: 0.2s ease color;
  &:hover {
    color: ${({ theme }) => theme.colors.orangeBtn};
  }
`;

// Menu dropdown
export const NavDropdownCotnainer = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  z-index: 10;
`;

export const NavbarDropdownLink = styled(Link)`
  width: 100%;
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.colors.heading};
  padding: 0.5em;
`;

export const NavbarDropdownSignOut = styled.span`
  width: 100%;
  display: block;
  color: ${({ theme }) => theme.colors.orangeBtn};
  transition: 0.2s ease color;
  padding: 0.5em;

  &:hover {
    color: ${({ theme }) => theme.colors.greenBtn};
  }
`;

export const ToggleContainer = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.heading};
  padding: 0.3em;
`;

export const ToggleItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const ToggleBtn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.heading};
  position: absolute;
  left: ${({ toggle }) => (toggle ? "100%" : "0%")};
  transform: ${({ toggle }) =>
    toggle ? "translateX(-100%)" : " translateX(0%)"};
  z-index: 3;
  transition: 0.3s ease all;
`;

export const NavItemWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  background: ${({ theme }) => theme.colors.cardBg};
  transition: 0.3s ease all;
  transform: ${({ hamburgerToggle }) =>
    hamburgerToggle ? "translateX(0%)" : "translateX(-100%)"};

  @media (max-width: 526px) {
    width: 60%;
  }
`;

export const HamburgerContainer = styled.div`
  z-index: 10;
  width: 33px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  transition: 0.3s ease all;
  z-index: 20;

  & span {
    z-index: 10;
    display: block;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.heading};
    transition: 0.3s ease all;
    position: ${({ hamburgerToggle }) =>
      hamburgerToggle ? "absolute" : "static"};
  }

  & span:nth-child(1) {
    transform: ${({ hamburgerToggle }) =>
      hamburgerToggle ? "rotate(45deg)" : "rotate(0deg)"};
  }

  & span:nth-child(3) {
    transform: ${({ hamburgerToggle }) =>
      hamburgerToggle ? "rotate(-45deg)" : "rotate(0deg)"};
  }

  & span:nth-child(2) {
    opacity: ${({ hamburgerToggle }) => (hamburgerToggle ? "0" : "1")};
    display: ${({ hamburgerToggle }) => (hamburgerToggle ? "none" : "block")};
  }
`;

export const AdditionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    font-size: 1.3em;
    margin-right: 0.3em;
    cursor: pointer;
  }
`;

export const NotificationContainer = styled.span`
  position: relative;

  & > span {
    cursor: pointer;
  }
`;

export const NotificationNumber = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  top: -2px;
  right: -2px;
  background: ${({ theme }) => theme.colors.redBtn};
  color: ${({ theme }) => theme.colors.heading};
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

export const NotificationArrow = styled.div`
  height: 20px;
  width: 20px;
  background: ${({ theme }) => theme.colors.text};
  position: absolute;

  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`;

export const NotificationTextContainer = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 33px;
  width: 227px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.cardBg};
`;

export const NotificationMessagesContainer = styled.div`
  padding: 0.3em;
  height: auto;
  max-height: 250px;
  overflow-y: auto;
`;

export const NotificationMarkAsRead = styled.span`
  display: block;
  cursor: pointer;
  padding: 0.3em;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 0 0 10px 10px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBg};
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.cardBg};
`;
