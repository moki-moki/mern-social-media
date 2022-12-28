import styled from "styled-components";

export const BtnArrowUp = styled.span`
  position: fixed;
  display: inline-block;
  bottom: 6%;
  left: 7%;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 3em;
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover {
    color: ${({ theme }) => theme.colors.editBtn};
  }

  @media (max-width: 910px) {
    left: 3%;
    bottom: 3%;
  }

  @media (max-width: 590px) {
    display: none;
  }
`;
