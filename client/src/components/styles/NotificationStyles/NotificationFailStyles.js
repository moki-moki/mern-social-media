import styled from "styled-components";

export const NotificationFailContainer = styled.div`
  position: fixed;
  top: 85%;
  left: -100%;
  background-color: ${({ theme }) => theme.colors.body};
  border: 2px solid ${({ theme }) => theme.colors.redBtn};
  border-radius: 10px;
  animation: enter-leave 3s ease;

  &::after {
    content: "";
    display: block;
    position: relative;
    top: 2px;
    left: 7px;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.heading};
    border-radius: 10px;
    animation: loading 3s ease;
  }

  @keyframes loading {
    0% {
      width: 0%;
    }
    100% {
      width: 95%;
    }
  }

  @keyframes enter-leave {
    0% {
      left: -260px;
      display: block;
    }
    7.5% {
      left: 15px;
      display: block;
    }
    92.5% {
      left: 15px;
      display: block;
    }
    100% {
      left: -360px;
      display: block;
    }
  }
`;

export const NotificationSuccessText = styled.p`
  padding: 0.6em;
`;
