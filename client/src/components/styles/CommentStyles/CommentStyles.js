import styled from "styled-components";

export const PostCardDesc = styled.p`
  color: ${({ theme }) => theme.colors.text};
  padding: 1em 1em;
  transition: 0.3s ease all;
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  word-break: break-word;
  cursor: default;
  &:hover {
    color: ${({ theme }) => theme.colors.heading};
    background: rgba(255, 255, 255, 0.1);
  }
`;
