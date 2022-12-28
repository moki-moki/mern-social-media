import styled from "styled-components";

export const ShareContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 1em auto;
  color: ${({ theme }) => theme.colors.text};
`;

export const ShareForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const FormInputUpload = styled.input`
  padding: 1em;
  margin: 0 0.3em;
  background: none;
  color: ${({ theme }) => theme.colors.editBtn};
`;

export const FormInput = styled.input`
  width: 60%;
  padding: 1em;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 80%;
  }

  &:focus {
    outline: none;
  }
`;

export const FormPlus = styled.span`
  display: inline-block;
  padding: 10% 0;
`;

export const FormPlustBorder = styled.span`
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  transition: 0.2s ease all;

  &:hover {
    border-radius: 0;
    border-color: ${({ theme }) => theme.colors.greenBtn};
    cursor: pointer;
  }
`;

export const FormBtnSubmit = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.editBtn};
  border-radius: 20px;
  padding: 1em;
  color: ${({ theme }) => theme.colors.heading};
  transition: 0.2s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.editBtn};
    border-radius: 0;
    cursor: pointer;
  }
`;

export const UploadImageContainer = styled.div`
  max-width: 800px;
  max-height: 800px;
  text-align: center;
`;
