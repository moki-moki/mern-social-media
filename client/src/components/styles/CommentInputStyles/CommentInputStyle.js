import styled from "styled-components";

export const CommentInputContainer = styled.form`
  width: 100%;
  height: 100%;
  padding: 0.7em;
`;

export const CommentInputForm = styled.input`
  padding: 0.5em 1em;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
`;

export const CommentInputBtn = styled.button`
  font-size: 1em;
  cursor: pointer;
  padding: 0.5em;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.greenBtn};
  transition: 0.2s ease all;
  margin: 0 0.3em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.greenBtn};
    border-radius: 10px;
  }
`;
