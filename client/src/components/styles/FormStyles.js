import styled from "styled-components";

export const FormControl = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  margin: 1em 0;
  padding: 1em;
  width: 60%;
  transition: 0.2s ease all;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.greenBtn};
  }

  &:invalid {
    border-bottom-color: ${({ theme }) => theme.colors.redBtn};
  }

  @media (max-width: 740px) {
    width: 80%;
  }
`;

export const FormButton = styled.button`
  color: ${({ theme }) => theme.colors.heading};
  border: 1px solid ${({ theme }) => theme.colors.greenBtn};
  background: none;
  padding: 1em;
  width: 10%;
  font-size: 1em;
  transition: 0.2s ease all;
  margin: 1em 0;

  &:hover {
    background: ${({ theme }) => theme.colors.greenBtn};
    border-radius: 15px;
  }

  @media (max-width: 740px) {
    width: 80%;
  }
`;

export const Labels = styled.label`
  width: 60%;
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.heading};
`;

export const SpanForm = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;
