import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

export const ModalInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 15px;
  background: none;
  padding: 0.3em;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`;

export const CloseBtn = styled.div`
  position: absolute;
  left: 90%;
  bottom: 15%;
  border: 1px solid ${({ theme }) => theme.colors.orangeBtn};
  border-radius: 10px;
  padding: 0.3em;
  font-size: 1.2em;
  width: max-content;
  cursor: pointer;
  transition: 0.3s ease border-radius;

  &:hover {
    border-radius: 0;
  }
`;
