import styled from "styled-components";

export const DeleteModalMainContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const DeleteModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60vh;
  width: 70%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.body};
  border: 3px solid ${({ theme }) => theme.colors.editBtn};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5em;

  @media (max-width: 834px) {
    width: 90%;
    height: 70vh;
  }
`;

export const Close = styled.span`
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1em;
  padding: 0.3em;
  border: 1px solid ${({ theme }) => theme.colors.editBtn};
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.editBtn};
  }
`;
