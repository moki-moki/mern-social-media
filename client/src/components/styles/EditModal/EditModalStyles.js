import styled from "styled-components";

export const EditModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cardBg};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
`;

export const EditModalHeader = styled.h3`
  text-align: center;
`;

export const EditInputContainer = styled.div`
  width: 70%;
  border: 2px solid ${({ theme }) => theme.colors.text};
  padding: 0.5em;
  border-radius: 10px;
`;

export const CloseEditModal = styled.span`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.editBtn};
  padding: 0.2em;
  top: 0;
  right: 0;
  margin: 0.5em;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.editBtn};
  }
`;

export const EditModalForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EditModalInput = styled.input`
  width: 100%;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3em;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const EditModalSubmitbtn = styled.button`
  font-size: 1em;
  cursor: pointer;
  padding: 0.2em;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.orangeBtn};
  transition: 0.2s ease all;
  margin: 0.3em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.orangeBtn};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.heading};
  }
`;

export const EditModalInputWarning = styled.div`
  position: absolute;
  top: 8%;
  left: 30%;
  background: ${({ theme }) => theme.colors.cardBg};
  width: 200px;
  height: 25px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.redBtn};
  padding: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.redBtn};
    bottom: 0;
    top: 24px;
    clip-path: polygon(50% 100%, 15% 0, 85% 0);
  }
`;

export const EditModalInputWarningArrow = styled.span`
  position: absolute;
  height: 20px;
  width: 20px;
  background: red;
`;
